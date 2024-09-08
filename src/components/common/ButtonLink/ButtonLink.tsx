import Link from 'next/link';
import React, { LinkHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonLinkProps = {
  href: string;
  isExternalLink?: boolean;
  children: ReactNode;
} & LinkHTMLAttributes<HTMLLinkElement>;

const ButtonLink = ({
  href,
  isExternalLink,
  children,
  className,
}: ButtonLinkProps) => {
  const buttonLinkTwClasses = `
    inline-block
    w-80
    border border-gray-300
    px-4 py-3
    text-center text-gray-400
    transition-opacity duration-300
    hover:opacity-75
  `;

  return (
    <>
      {isExternalLink ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(buttonLinkTwClasses, className)}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={twMerge(buttonLinkTwClasses, className)}>
          {children}
        </Link>
      )}
    </>
  );
};

export default ButtonLink;
