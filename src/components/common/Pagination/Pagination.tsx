'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { HTMLAttributes, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type PaginationProps = {
  hrefPath:
    | `/${string}/page/[page]${string}`
    | `/${string}?page=[page]${string}`;
  totalPageCount: number;
} & HTMLAttributes<HTMLElement>;

const Pagination = ({
  hrefPath,
  totalPageCount,
  className,
}: PaginationProps) => {
  const { page } = useParams();
  const currentPage = Number(page) || 1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPageCount;

  const generatePageNumbers = () => {
    // 表示するページ数及びテキスト (...)
    const pageNumbers: (string | number)[] = [];
    // 現在のページの前後に表示するページ数
    const delta = 2;

    // 最初のページ
    if (currentPage > delta + 1) {
      pageNumbers.push(1);
      if (currentPage > delta + 2) {
        pageNumbers.push('...');
      }
    }

    // 中間のページ
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPageCount, currentPage + delta);
      i++
    ) {
      pageNumbers.push(i);
    }

    // 最後のページ
    if (currentPage < totalPageCount - delta) {
      if (currentPage < totalPageCount - delta - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPageCount);
    }

    return pageNumbers;
  };

  const linkTwClasses = useMemo(() => {
    return (renderNum: number) => {
      return twMerge(
        'inline-block px-2.5',
        `${currentPage === renderNum && 'text-gray-400 pointer-events-none'}`,
      );
    };
  }, [currentPage]);

  return (
    <nav className={twMerge('flex justify-center', className)}>
      <ul className="flex flex-row items-center gap-x-2.5">
        {/* 最初のページへ */}
        <li>
          <Link
            href={hrefPath.replace('[page]', '1')}
            className={twMerge(
              'inline-block px-2.5',
              isFirstPage && 'pointer-events-none text-gray-400',
            )}
          >
            {'<<'}
          </Link>
        </li>

        {/* 前のページ */}
        <li>
          <Link
            href={hrefPath.replace('[page]', (currentPage - 1).toString())}
            className={twMerge(
              'inline-block px-2.5',
              isFirstPage && 'pointer-events-none text-gray-400',
            )}
          >
            {'<'}
          </Link>
        </li>

        {/* ページ番号と省略記号 */}
        {generatePageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {typeof pageNumber === 'number' ? (
              <Link
                href={hrefPath.replace('[page]', pageNumber.toString())}
                className={linkTwClasses(pageNumber)}
              >
                {pageNumber}
              </Link>
            ) : (
              <span className="inline-block px-2.5 text-gray-400">...</span>
            )}
          </li>
        ))}

        {/* 次のページ */}
        <li>
          <Link
            href={hrefPath.replace('[page]', (currentPage + 1).toString())}
            className={twMerge(
              'inline-block px-2.5',
              isLastPage && 'pointer-events-none text-gray-400',
            )}
          >
            {'>'}
          </Link>
        </li>

        {/* 最後のページへ */}
        <li>
          <Link
            href={hrefPath.replace('[page]', totalPageCount.toString())}
            className={twMerge(
              'inline-block px-2.5',
              isLastPage && 'pointer-events-none text-gray-400',
            )}
          >
            {'>>'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
