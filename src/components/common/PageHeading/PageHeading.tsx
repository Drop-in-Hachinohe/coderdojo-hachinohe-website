import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type PageHeadingProps = {
  label: string;
} & HTMLAttributes<HTMLHeadingElement>;

const PageHeading = ({ label, className }: PageHeadingProps) => {
  return (
    <h2 className={twMerge('text-center text-2xl font-bold', className)}>
      {label}
    </h2>
  );
};

export default PageHeading;
