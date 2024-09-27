'use client';

import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';
import { parseToNextJSX } from '@/helpers/parseToNextJSX';

import type { Report } from '@/features/report/types';

type ReportContentProps = {
  report: Report;
} & HTMLAttributes<HTMLElement>;

const ReportContent = ({ report, className }: ReportContentProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll(
    {
      additionalClasses: 'py-4',
    },
    undefined,
  );

  return (
    <section ref={sectionRef} className={twMerge(fadeInClass, className)}>
      {/* コンテンツ */}
      <div>{parseToNextJSX(report.content)}</div>
    </section>
  );
};

export default ReportContent;
