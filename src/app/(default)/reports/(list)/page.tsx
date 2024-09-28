import { Metadata } from 'next';

import getReports from '@/features/report/api/getReports';
import PaginatedReportList from '@/components/pages/reports/PaginatedReportList/PaginatedReportList';
import constants from '@/utils/constants';
import { createMeta } from '@/helpers/meta';

const PER_PAGE = constants.report.PER_PAGE;

export const metadata: Metadata = {
  ...createMeta('開催報告', '', '/reports'),
};

export default async function Reports() {
  // 開催報告一覧を取得
  const reports = await getReports({
    limit: PER_PAGE,
    orders: '-publishedAt,-originalCreatedAt',
  });
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
