'use client';

import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import useRuntimeConfig from '@/hooks/useRuntimeConfig';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

type AccessProps = Record<string, unknown> & HTMLAttributes<HTMLElement>;

const Access = ({ className }: AccessProps) => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const runtimeConfig = useRuntimeConfig();

  return (
    <section ref={sectionRef} className={twMerge(fadeInClass, className)}>
      <SectionTitle title="開催場所" className="mb-6" />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          {/* アクセス */}
          <dl className="flex flex-col gap-y-2 text-sm leading-6">
            <dt className="font-bold">住所</dt>
            {/* 以下は住所に改行を含むため, dangerouslySetInnerHTML を使用しています。 */}
            <dd
              dangerouslySetInnerHTML={{
                __html: runtimeConfig.public.contactAddress,
              }}
            ></dd>
            <dt className="font-bold">
              連絡先 ({runtimeConfig.public.contactPerson})
            </dt>
            <dd>{runtimeConfig.public.contactPhoneNumber}</dd>
          </dl>
        </div>
        {/* MAP */}
        <div className="flex-1">
          <iframe
            src={runtimeConfig.public.googleMapEmbedUrl}
            width="340"
            height="400"
            style={{
              border: 0,
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="!w-full md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Access;
