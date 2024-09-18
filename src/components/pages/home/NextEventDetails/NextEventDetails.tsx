'use client';

import React, { HTMLAttributes } from 'react';

import ButtonLink from '@/components/common/ButtonLink/ButtonLink';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

import type { NextEvent } from '@/features/nextEvent/types';

type NextEventDetailsProps = {
  nextEvents: NextEvent[];
} & HTMLAttributes<HTMLElement>;

const NextEventDetails = ({ nextEvents, className }: NextEventDetailsProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll({
    additionalClasses: 'flex flex-col gap-y-12 sm:gap-y-16',
    classNameAttr: className,
  });

  const titleClasses = 'mb-4 text-center text-2xl sm:text-3xl';
  const detailClasses = 'mb-10 text-center text-xl sm:text-2xl';
  const linkContainerClasses = 'flex justify-center';

  return (
    <section ref={sectionRef} className={fadeInClass}>
      {nextEvents.map((nextEvent) => (
        <div key={nextEvent.id}>
          <h2 className={titleClasses}>{nextEvent.title}</h2>
          <p className={detailClasses}>
            <strong>{nextEvent.detail}</strong>
          </p>
          {nextEvent.applicationLink && (
            <div className={linkContainerClasses}>
              <ButtonLink href={nextEvent.applicationLink} isExternalLink>
                {nextEvent.linkText || 'お申し込み'}
              </ButtonLink>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default NextEventDetails;
