'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

const NotAProgrammingSchool = () => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const overviewTextClasses = 'mb-2.5 text-left text-sm leading-6';

  return (
    <section ref={sectionRef} className={twMerge(fadeInClass, 'pb-10 pt-5')}>
      <h2 className="mb-3 text-left text-xl sm:text-2xl">
        CoderDojoはプログラミング教室ではありません
      </h2>
      <p className={overviewTextClasses}>
        CoderDojoは17歳くらいまでの若者を対象にした、自主的なプログラミングクラブです。非営利で運営されており、自主的な学びをサポートするコミュニティですので、いわゆるプログラミングを教える「教室」ではありません。
      </p>
      <p className={overviewTextClasses}>
        参加する子供達自身が、自分の作りたいものを考えてつくっていきます。一緒に参加している他の子供達と一緒に考えても良いですし、子供達をサポートするメンターもいます。
      </p>
      <p className={overviewTextClasses}>
        CoderDojoは全国にたくさんありますが、保育園や幼稚園の子どもたちも多く参加しています！
      </p>
      <p className={twMerge(overviewTextClasses, 'font-bold')}>
        自分で考えて作るから楽しい！嬉しい！
      </p>
      <p className="text-left text-sm">
        そんな気持ちになって欲しいと思っています。
      </p>
    </section>
  );
};

export default NotAProgrammingSchool;
