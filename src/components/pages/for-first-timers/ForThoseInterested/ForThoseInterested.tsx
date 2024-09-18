'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';
import useRuntimeConfig from '@/hooks/useRuntimeConfig';

const ForThoseInterested = () => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const runtimeConfig = useRuntimeConfig();

  const overviewTextClasses = 'mb-2.5 text-left text-sm leading-6';
  const studentCategoryTextClasses =
    'mb-3 text-left text-base font-bold sm:text-base';

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        'translate-y-0 border-t border-gray-300 pt-10 opacity-100 transition-opacity duration-1000',
        fadeInClass,
      )}
    >
      <div className="pb-4">
        <h2 className="mb-3 text-left text-xl sm:text-2xl">ご参加希望の方へ</h2>
        <p className={overviewTextClasses}>
          基本的にはご自身のノートパソコンで作業していただきますので、ご持参をお願いします。
        </p>
        <p className={overviewTextClasses}>
          貸し出しの用意もございます。事前にお問い合わせください。
        </p>
        <p className={overviewTextClasses}>
          {runtimeConfig.public.contactEmail}
        </p>
      </div>
      <div className="py-4">
        <h3 className={studentCategoryTextClasses}>小学生の方</h3>
        <p className={overviewTextClasses}>
          初めてのお友達も、ニンジャとしてプログラミングにチャレンジしてみよう！保護者の方の同伴が必要になります！
        </p>
      </div>
      <div className="py-4">
        <h3 className={studentCategoryTextClasses}>中学生の方</h3>
        <p className={overviewTextClasses}>
          保護者の同伴は不要です！小学生ニンジャがあっと驚くゲームを作ってみませんか？
        </p>
      </div>
      <div className="pt-4">
        <h3 className={studentCategoryTextClasses}>高校生以上の方</h3>
        <p className={overviewTextClasses}>
          ニンジャとしての参加はもちろん、メンターとしてちびっこニンジャのサポート役をしてみませんか？
        </p>
        <p className="text-left text-sm leading-6">
          また運営ボランティアとしてのご参加大歓迎です！
        </p>
      </div>
    </section>
  );
};

export default ForThoseInterested;
