import { notFound } from 'next/navigation';

import getReports from '@/features/report/api/getReports';
import PaginatedReportList from '@/components/pages/reports/PaginatedReportList/PaginatedReportList';
import constants from '@/utils/constants';
import { createMeta } from '@/helpers/meta';

const PER_PAGE = constants.report.PER_PAGE;

export function generateMetadata({ params }: { params: { page: number } }) {
  return createMeta('開催報告', '', `/reports/page/${params.page}`);
}

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
    <PaginatedReportList
      reports={reports.contents}
      totalPageCount={totalPageCount}
      hrefPath="/reports/page/[page]"
    />
  );
}
