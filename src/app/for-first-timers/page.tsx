import NotAProgrammingSchool from '@/components/pages/for-first-timers/NotAProgrammingSchool/NotAProgrammingSchool';
import MemberAtCoderDojo from '@/components/pages/for-first-timers/MemberAtCoderDojo/MemberAtCoderDojo';
import ForUnsureFriends from '@/components/pages/for-first-timers/ForUnsureFriends/ForUnsureFriends';
import ForThoseInterested from '@/components/pages/for-first-timers/ForThoseInterested/ForThoseInterested';

export default function ForFirstTimers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl p-8 py-20 sm:p-12 sm:py-20 md:p-24">
        {/* 初めて参加される方へ */}
        <div className="pb-5 sm:pb-5">
          <h2 className="text-center text-2xl font-bold">
            初めて参加される方へ
          </h2>
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
