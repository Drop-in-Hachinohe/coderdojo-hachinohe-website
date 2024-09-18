import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import ReportCard from '../ReportCard/ReportCard';

import type { Report } from '@/features/reports/types';

type ReportListProps = {
  reports: Report[];
} & HTMLAttributes<HTMLUListElement>;

const ReportList = ({ reports, className }: ReportListProps) => {
  return (
    <ul
      className={twMerge(
        'grid grid-cols-1 gap-5 max-sm:gap-10 sm:grid-cols-2 md:grid-cols-3',
        className,
      )}
    >
      {reports.map((report) => (
        <li key={report.id}>
          <ReportCard report={report} />
        </li>
      ))}
    </ul>
  );
};

export default ReportList;
