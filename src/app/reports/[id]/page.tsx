import PageHeading from '@/components/common/PageHeading/PageHeading';
import ReportContent from '@/components/pages/reports/ReportContent/ReportContent';
import getReport from '@/features/report/api/getReport';
import getReports from '@/features/report/api/getReports';
import { Report } from '@/features/report/types';
import { createMeta } from '@/helpers/meta';
import { extractFirstImageUrl } from '@/utils/extractFirstImageUrl';
import { formatDate } from '@/utils/formatDate';

export async function generateMetadata({ params }: { params: { id: string } }) {
  // 開催報告の詳細を取得
  const report = await getReport(params.id);
  // OG Image
  const ogImageUrl = extractFirstImageUrl(report.content);
  return createMeta(
    report.title || '',
    report.summary || '',
    `/reports/${params.id}`,
    ogImageUrl,
  );
}

export async function generateStaticParams() {
  // 開催報告を取得
  const reports: Report[] = (
    await getReports({ limit: 12, orders: '-publishedAt,-originalCreatedAt' })
  ).contents;
  // 生成するページの id (contentId) を返却
  return reports.map((report) => ({
    id: String(report.id),
  }));
}

export default async function ReportDetailIndex({
  params,
}: {
  params: { id: string };
}) {
  // 開催報告の詳細を取得
  const report = await getReport(params.id);
  // 投稿日時
  const publishedAt = report.originalCreatedAt || report.publishedAt;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* 初めて参加される方へ */}
        <div className="pb-5">
          {/* 投稿日 */}
          <p className="mb-2 text-xs text-gray-400">
            {formatDate(publishedAt || '')}
          </p>
          {/* タイトル */}
          <PageHeading label={report.title} className="text-left" />
        </div>

        {/* 記事詳細 */}
        <ReportContent report={report} />
      </div>
    </main>
  );
}
