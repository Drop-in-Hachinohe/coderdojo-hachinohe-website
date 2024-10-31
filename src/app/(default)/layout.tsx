import TheHeader from '@/components/layouts/TheHeader/TheHeader';
import TheFooter from '@/components/layouts/TheFooter/TheFooter';

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TheHeader />
      <div className="max-sm:pt-[54px]">{children}</div>
      <TheFooter />
    </>
  );
}
