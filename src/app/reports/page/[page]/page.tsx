import { notFound } from 'next/navigation';

import PageHeading from '@/components/common/PageHeading/PageHeading';
import FadeInOnScrollContainer from '@/components/common/FadeInOnScrollContainer/FadeInOnScrollContainer';
import ReportList from '@/components/common/ReportList/ReportList';
import getReports from '@/features/reports/api/getReports';
import Pagination from '@/components/common/Pagination/Pagination';

const PER_PAGE = 12;

export async function generateStaticParams() {
  // コンテンツのトータル件数を取得
  const totalCount = (await getReports({ limit: 0 })).totalCount;
  // 生成するページのトータル件数 (件数分だけページを生成する)
  return Array.from({ length: Math.ceil(totalCount / PER_PAGE) }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function Reports({
  params,
}: {
  params: { page: number };
}) {
  // ページ毎の開催報告一覧を取得
  const reports = await getReports({
    limit: PER_PAGE,
    offset: (params.page - 1) * PER_PAGE,
    orders: '-publishedAt,-originalCreatedAt',
  });

  // params.page が数値でない場合, コンテンツが存在しない場合
  if (isNaN(params.page) || reports.contents.length === 0) {
    notFound(); // 404 ページにリダイレクト
  }

  // ページ総数
  const totalPageCount = Math.ceil(reports.totalCount / PER_PAGE);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* 開催報告 */}
        <div className="pb-5">
          <PageHeading label="開催報告" />
        </div>

        {/* 開催報告一覧 */}
        <FadeInOnScrollContainer>
          <ReportList reports={reports.contents} className="mt-5" />
        </FadeInOnScrollContainer>

        {/* ページネーション */}
        <Pagination
          hrefPath="/reports/page/[page]"
          totalPageCount={totalPageCount}
          className={totalPageCount > 1 ? 'mt-16' : '!hidden'}
        />
      </div>
    </main>
  );
}
