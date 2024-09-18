'use client';

import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import ButtonLink from '@/components/common/ButtonLink/ButtonLink';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';
import ReportList from '@/components/common/ReportList/ReportList';

import type { Report } from '@/features/reports/types';

type EventReportProps = {
  reports: Report[];
} & HTMLAttributes<HTMLElement>;

const EventReport = ({ reports, className }: EventReportProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  return (
    <section ref={sectionRef} className={twMerge(fadeInClass, className)}>
      <SectionTitle title="開催報告" className="mb-6" />

      <ReportList reports={reports} className="mb-10" />

      <div className="flex justify-center">
        <ButtonLink href="/reports" className="!w-64">
          もっと見る
        </ButtonLink>
      </div>
    </section>
  );
};

export default EventReport;
