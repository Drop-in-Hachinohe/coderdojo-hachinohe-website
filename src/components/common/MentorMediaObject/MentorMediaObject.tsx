import Image from 'next/image';

import React, { HTMLAttributes } from 'react';

import type { Mentors } from '@/features/mentors/types';
import { twMerge } from 'tailwind-merge';

type MentorMediaObjectProps = {
  mentor: Mentors;
} & HTMLAttributes<HTMLElement>;

const MentorMediaObject = ({ mentor, className }: MentorMediaObjectProps) => {
  const overviewTextClasses = 'text-sm leading-6 text-left mb-2.5 last:mb-0';

  return (
    <div className="mb-8 flex flex-col gap-8 md:flex-row">
      {/* バナー */}
      <div className="flex-1">
        <Image
          src={mentor.image.url}
          alt={mentor.name}
          width={mentor.image.width}
          height={mentor.image.height}
          className="!w-full md:w-[340px]"
          loading="lazy"
        />
      </div>
      {/* 説明テキスト */}
      <div className="flex-1">
        <p className={twMerge(overviewTextClasses, 'font-bold')}>
          {mentor.name}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: mentor.description
          }}
          className={overviewTextClasses}
        />
      </div>
    </div>
  );
};

export default MentorMediaObject;
