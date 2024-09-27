import { Metadata } from 'next';

export function createMeta(
  title: string = '',
  description: string = '',
  path: string = '',
  imageUrl?: string,
): Metadata {
  console.log(imageUrl);
  return {
    viewport: 'width=device-width, initial-scale=1.0',
    title:
      title === ''
        ? process.env.NEXT_PUBLIC_SITE_TITLE
        : `${title} | ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
    description:
      description === ''
        ? process.env.NEXT_PUBLIC_SITE_DESCRIPTION
        : description,
    keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${path}`,
    },
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      title: title === '' ? process.env.NEXT_PUBLIC_SITE_TITLE : title,
      siteName: process.env.NEXT_PUBLIC_SITE_TITLE,
      description:
        description === ''
          ? process.env.NEXT_PUBLIC_SITE_DESCRIPTION
          : description,
      type: 'website',
      locale: 'ja_JP',
      images:
        imageUrl ||
        `${process.env.NEXT_PUBLIC_SITE_URL || ''}/opengraph-image.jpg`,
    },
    twitter: {
      title:
        title === ''
          ? process.env.NEXT_PUBLIC_SITE_TITLE
          : `${title} | ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
      card: 'summary',
      site: process.env.NEXT_PUBLIC_TWITTER_SITE_URL,
    },
  };
}
