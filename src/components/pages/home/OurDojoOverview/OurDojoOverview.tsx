'use client';

import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

type OurDojoOverviewProps = Record<string, unknown> &
  HTMLAttributes<HTMLElement>;

const OurDojoOverview = ({ className }: OurDojoOverviewProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const textLargeClasses = 'text-center text-xl sm:text-2xl';

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        'flex flex-col gap-y-4 border-t border-gray-300 py-12',
        fadeInClass,
        className,
      )}
    >
      <p className={textLargeClasses}>
        CoderDojo八戸はものづくりを楽しむ場所です！
      </p>
      <p className={textLargeClasses}>
        自分の頭の中にあるモノをカタチにしてみよう！
      </p>
      {/* 注釈, 必要であれば */}
      {/* <p className="text-center text-sm">
        ※2022年6月より、第2日曜日に変更になりましたm(_ _)m
      </p> */}
    </section>
  );
};

export default OurDojoOverview;
