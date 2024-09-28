import NotAProgrammingSchool from '@/components/pages/for-first-timers/NotAProgrammingSchool/NotAProgrammingSchool';
import MemberAtCoderDojo from '@/components/pages/for-first-timers/MemberAtCoderDojo/MemberAtCoderDojo';
import ForUnsureFriends from '@/components/pages/for-first-timers/ForUnsureFriends/ForUnsureFriends';
import ForThoseInterested from '@/components/pages/for-first-timers/ForThoseInterested/ForThoseInterested';
import PageHeading from '@/components/common/PageHeading/PageHeading';
import { Metadata } from 'next';
import { createMeta } from '@/helpers/meta';

export const metadata: Metadata = {
  ...createMeta(
    '初めて参加される方へ',
    '初めて参加される方へ - CoderDojoは17歳くらいまでの若者を対象にした、自主的なプログラミングクラブです。非営利で運営されており、自主的な学びをサポートするコミュニティですので、いわゆるプログラミングを教える「教室」ではありません。',
    '/for-first-timers',
    `${process.env.NEXT_PUBLIC_SITE_URL}/images/participant.jpg`,
  ),
};

export default function ForFirstTimers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* 初めて参加される方へ */}
        <div className="pb-5">
          <PageHeading label="初めて参加される方へ" />
        </div>

        {/* CoderDojoはプログラミング教室ではありません */}
        <NotAProgrammingSchool />

        {/* CoderDojoにいるいろいろな人たち */}
        <MemberAtCoderDojo />

        {/* 何をしたら良いかわからないお友達へ */}
        <ForUnsureFriends />

        {/* ご参加希望の方へ */}
        <ForThoseInterested />
      </div>
    </main>
  );
}
