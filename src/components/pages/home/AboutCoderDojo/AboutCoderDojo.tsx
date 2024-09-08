'use client';

import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import ButtonLink from '@/components/common/ButtonLink/ButtonLink';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

type AboutCoderDojoProps = Record<string, unknown> &
  HTMLAttributes<HTMLElement>;

const AboutCoderDojo = ({ className }: AboutCoderDojoProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const overviewTextClasses = 'text-sm leading-6 text-left mb-2.5 last:mb-0';

  return (
    <section ref={sectionRef} className={twMerge(fadeInClass, className)}>
      <SectionTitle title="CoderDojoとは？" className="mb-6" />
      <div className="mb-8 flex flex-col gap-8 md:flex-row">
        {/* 説明テキスト */}
        <div className="flex-1">
          <p className={overviewTextClasses}>
            CoderDojo
            は17歳くらいまでを対象とした非営利のプログラミング道場です。2011年にアイルランドで始まり、世界では110カ国・2,000の道場、日本には226以上の道場があります。
          </p>
          <p className={overviewTextClasses}>
            プログラミング教室ではなく、子供達が自主的に学ぶためのコミュニティです。子供達やそのご家族の方があつまり、作りたいものを自分で考えたり、一緒に参加しているメンバーと協力したりして作っていきます。
          </p>
          <p className={overviewTextClasses}>
            CoderDojoについてのより詳しい情報は、
            <a
              href="https://coderdojo.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoderDojo Japan
            </a>
            のWebサイトを御覧ください。
          </p>
        </div>
        {/* バナー */}
        <div className="flex-1">
          <Image
            src="/images/coderdojo-japan.jpg"
            alt="CoderDojo Japan"
            width="340"
            height="260"
            className="!w-full md:w-[340px]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonLink href="/for-first-timers" className="!w-64">
          初めて参加される方へ
        </ButtonLink>
      </div>
    </section>
  );
};

export default AboutCoderDojo;
