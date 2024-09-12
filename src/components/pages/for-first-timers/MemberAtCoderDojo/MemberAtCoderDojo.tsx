'use client';

import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

const MemberAtCoderDojo = () => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();
  const imageClasses =
    'flex items-center justify-center overflow-y-hidden py-5';

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        'translate-y-0 border-t border-gray-300 pb-5 pt-10 opacity-100 transition-opacity duration-1000',
        fadeInClass,
      )}
    >
      <h2 className="mb-3 text-left text-xl sm:text-2xl">
        CoderDojoにいるいろいろな人たち
      </h2>
      <p className="mb-2.5 text-left text-sm leading-6">
        CoderDojoには、プログラミングに挑戦する子供たちの他に、サポートする大人やボランティアの人たちが参加しています
      </p>
      <div className={imageClasses}>
        <Image
          src="/images/participant.jpg"
          alt="参加する若者たち"
          width="720"
          height="402"
          loading="lazy"
        />
      </div>
      <div className={imageClasses}>
        <Image
          src="/images/supporter.jpg"
          alt="参加者を支援する人たち"
          width="720"
          height="402"
          loading="lazy"
        />
      </div>
      <div className={imageClasses}>
        <Image
          src="/images/member.jpg"
          alt="メンバー"
          width="720"
          height="402"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MemberAtCoderDojo;
