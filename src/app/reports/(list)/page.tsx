import getReports from '@/features/reports/api/getReports';
import PaginatedReportList from '@/components/pages/reports/PaginatedReportList/PaginatedReportList';

const PER_PAGE = 12;

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
