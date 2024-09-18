import PageHeading from '@/components/common/PageHeading/PageHeading';
import FadeInOnScrollContainer from '@/components/common/FadeInOnScrollContainer/FadeInOnScrollContainer';
import ReportList from '@/components/common/ReportList/ReportList';
import getReports from '@/features/reports/api/getReports';

export default async function Reports() {
  // 開催報告一覧を取得
  const reports = await getReports();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* 初めて参加される方へ */}
        <div className="pb-5">
          <PageHeading label="開催報告" />
        </div>

        {/* 開催報告一覧 */}
        <FadeInOnScrollContainer>
          <ReportList reports={reports.contents} className="mt-5" />
        </FadeInOnScrollContainer>
      </div>
    </main>
  );
}
