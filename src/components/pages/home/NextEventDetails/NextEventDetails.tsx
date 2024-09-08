'use client';

import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import ButtonLink from '@/components/common/ButtonLink/ButtonLink';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

type NextEventDetailsProps = Record<string, unknown> &
  HTMLAttributes<HTMLElement>;

const NextEventDetails = ({ className }: NextEventDetailsProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const titleClasses = 'mb-4 text-center text-2xl sm:text-3xl';
  const detailClasses = 'mb-10 text-center text-xl sm:text-2xl';
  const linkContainerClasses = 'flex justify-center';

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        'flex flex-col gap-y-12 sm:gap-y-16',
        fadeInClass,
        className,
      )}
    >
      <div>
        <h2 className={titleClasses}>【CoderDojo八戸: 次回開催】</h2>
        <p className={detailClasses}>
          <strong>8/11(日)10:00~12:00@鮫のゲストハウスDrop in</strong>
        </p>
        <div className={linkContainerClasses}>
          <ButtonLink
            href="https://coderdojo-hachinohe.doorkeeper.jp/events/175630"
            isExternalLink
          >
            CoderDojo八戸 お申し込み
          </ButtonLink>
        </div>
      </div>
      <div>
        <h2 className={titleClasses}>【マイクラ部: 次回開催】</h2>
        <p className={detailClasses}>
          <strong>8/25(日)10:00~12:00@鮫のゲストハウスDrop in</strong>
        </p>
        <div className={linkContainerClasses}>
          <ButtonLink
            href="https://coderdojo-hachinohe.doorkeeper.jp/events/175630"
            isExternalLink
          >
            マイクラ部 お申し込み
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default NextEventDetails;
