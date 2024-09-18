import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/utils/formatDate';
import { extractFirstImageUrl } from '@/utils/extractFirstImageUrl';

import type { Report } from '@/features/reports/types';

const DEFAULT_LOGO_IMAGE = '/images/logo.jpg';

type ReportCardProps = {
  report: Report;
} & HTMLAttributes<HTMLElement>;

const ReportCard = ({ report, className }: ReportCardProps) => {
  // サムネイル
  const thumbnailUrl =
    extractFirstImageUrl(report.content) || DEFAULT_LOGO_IMAGE;
  // サムネイルが存在しない場合の Class
  const noThumbnailTwClasses =
    thumbnailUrl === DEFAULT_LOGO_IMAGE ? 'w-3/4 h-auto object-contain' : '';
  // 投稿日時
  const publishedAt = report.originalCreatedAt || report.publishedAt;

  return (
    <article className={twMerge('', className)}>
      <Link href={`/reports/${report.id}`}>
        {/* サムネイル画像 */}
        {/* PC高さ最大値: 138.331px */}
        <div className="relative mb-3 flex aspect-[4/3] w-full justify-center overflow-hidden border border-gray-200 md:max-h-[165.998px]">
          <Image
            src={thumbnailUrl}
            alt={`${report.title} thumbnail`}
            width="720"
            height="480"
            className={twMerge(
              'block h-auto w-full object-cover md:max-h-[165.998px]',
              noThumbnailTwClasses,
            )}
            loading="lazy"
          />
        </div>

        {/* 投稿概要 */}
        <div>
          {/* 投稿日時 */}
          <time dateTime={publishedAt} className="text-xs text-gray-400">
            {formatDate(publishedAt || '')}
          </time>
          {/* タイトル */}
          <h3 className="mb-2 mt-1.5 line-clamp-2 text-[0.94rem]">
            {report.title}
          </h3>
          {/* サマリー */}
          <p className="line-clamp-2 text-[0.8rem] max-sm:leading-[1.05rem] sm:text-sm">
            {report.summary}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ReportCard;
