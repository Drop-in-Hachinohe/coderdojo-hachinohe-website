/* eslint-disable tailwindcss/classnames-order */
import ButtonLink from '@/components/common/ButtonLink/ButtonLink';

export default function NotFound() {
  const mainTwClasses = `relative z-10 flex h-screen items-center justify-center bg-404-image bg-cover bg-center bg-no-repeat before:absolute before:left-0 before:top-0 before:z-[11] before:h-screen before:w-screen before:bg-404-gradient after:absolute after:left-0 after:top-0 after:z-[12] after:h-screen after:w-screen after:bg-[#4D6B6B]/15`;

  return (
    <main className={mainTwClasses}>
      <div className="relative z-20 flex h-screen flex-col items-center justify-center">
        <p className="mb-8 text-xl text-white">
          お探しのページは見つかりませんでした。
        </p>
        <ButtonLink href="/" className="!w-64 bg-[#4D6B6B]/15 text-white">
          ホームへ戻る
        </ButtonLink>
      </div>
    </main>
  );
}
