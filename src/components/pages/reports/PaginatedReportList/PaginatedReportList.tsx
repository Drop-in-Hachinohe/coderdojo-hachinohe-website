import FadeInOnScrollContainer from '@/components/common/FadeInOnScrollContainer/FadeInOnScrollContainer';
import ReportList from '@/components/common/ReportList/ReportList';
import Pagination from '@/components/common/Pagination/Pagination';

import type { Report } from '@/features/report/types';

type PaginatedReportListProps = {
  reports: Report[];
  totalPageCount: number;
  hrefPath: `/${string}/page/[page]${string}`;
};

export default function PaginatedReportList({
  reports,
  totalPageCount,
  hrefPath,
}: PaginatedReportListProps) {
  return (
    <>
      {/* 開催報告一覧 */}
      <FadeInOnScrollContainer>
        <ReportList reports={reports} className="mt-5" />
      </FadeInOnScrollContainer>

      {/* ページネーション */}
      <Pagination
        hrefPath={hrefPath}
        totalPageCount={totalPageCount}
        className={totalPageCount > 1 ? 'mt-16' : '!hidden'}
      />
    </>
  );
}
