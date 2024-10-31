import PageHeading from '@/components/common/PageHeading/PageHeading';
import Scroll from '@/components/layouts/Scroll/Scroll';

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 不具合対策 (https://github.com/vercel/next.js/discussions/64435) */}
      <Scroll />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
          {/* 開催報告 */}
          <div className="pb-5">
            <PageHeading label="開催報告" />
          </div>

          {/*
            @/app/reports/(list)/page.tsx
            @/app/reports/(list)/page/[page]/page.tsx
          */}
          {children}
        </div>
      </main>
    </>
  );
}
