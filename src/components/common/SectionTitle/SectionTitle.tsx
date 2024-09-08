import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionTitleProps = {
  title: string;
} & HTMLAttributes<HTMLHeadingElement>;

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h2 className={twMerge('border-t border-gray-300 text-center', className)}>
      <span className="inline-block border-t-2 border-blue-400 py-3">
        {title}
      </span>
    </h2>
  );
};

export default SectionTitle;
