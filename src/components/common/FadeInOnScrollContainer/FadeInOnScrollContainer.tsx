'use client';

import React, { HTMLAttributes } from 'react';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

type FadeInOnScrollContainerProps = HTMLAttributes<HTMLElement>;

const FadeInOnScrollContainer = ({
  children,
}: FadeInOnScrollContainerProps) => {
  const { ref: divRef, fadeInClass } = useFadeInOnScroll<HTMLDivElement>();

  return (
    <div ref={divRef} className={fadeInClass}>
      {children}
    </div>
  );
};

export default FadeInOnScrollContainer;
