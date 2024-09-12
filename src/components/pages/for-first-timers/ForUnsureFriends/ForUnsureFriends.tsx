'use client';

import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

const ForUnsureFriends = () => {
  const { ref: sectionRef, fadeInClass } = useFadeInOnScroll();

  const overviewTextClasses = 'mb-2.5 text-left text-sm leading-6';
  const externalLinkClasses = 'text-blue-500 hover:text-blue-700';
  const appDescriptionClasses = 'flex flex-col gap-10 sm:py-5 md:flex-row';
  const appNameTextClasses =
    'mb-2.5 text-left text-base font-bold leading-6 underline"';

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        'translate-y-0 border-t border-gray-300 pb-5 pt-10 opacity-100 transition-opacity duration-1000',
        fadeInClass,
      )}
    >
      <h2 className="mb-3 text-left text-xl sm:text-2xl">
        初めてだから、何をしたら良いかわからない！というお友達へ
      </h2>
      <p className={overviewTextClasses}>
        「自分で作りたいものを作る」と言っても、何をどうしていいかわからないですよね。
      </p>
      <p className={overviewTextClasses}>でも大丈夫。</p>
      <p className={overviewTextClasses}>
        初めてのお友達は、まずは簡単なゲームをしながらプログラミングの考え方を学べるアプリケーションに挑戦してみましょう。慣れてきたら、自分でゲームを作ってみましょう。
      </p>

      {/* ブロックリー・ゲーム : 迷路 */}
      <div className={appDescriptionClasses}>
        {/* 画像 */}
        <div className="flex-1">
          <Image
            src="/images/blockly-games.jpg"
            alt="blockly-games"
            width="340"
            height="202"
            className="!w-full md:w-[340px]"
            loading="lazy"
          />
        </div>
        {/* 説明テキスト */}
        <div className="flex-1">
          <p className={appNameTextClasses}>ブロックリー・ゲーム : 迷路</p>
          <p className={overviewTextClasses}>
            ピンを動かして迷路をクリアするゲームです！ピンを動かすためのプログラムを自分で考えて組んでみます。レベル１は簡単だけど、、どんどん難しくなっていきますよ！レベル10をクリアできるかな!?
          </p>
          <p className={overviewTextClasses}>
            <a
              href="https://blockly.games/maze?lang=ja"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClasses}
            >
              ブロックリー・ゲームはこちら
            </a>
          </p>
        </div>
      </div>

      {/* Scratch */}
      <div className={appDescriptionClasses}>
        {/* 画像 */}
        <div className="flex-1">
          <Image
            src="/images/scratch.jpg"
            alt="scratch"
            width="340"
            height="202"
            className="!w-full md:w-[340px]"
            loading="lazy"
          />
        </div>
        {/* 説明テキスト */}
        <div className="flex-1">
          <p className={appNameTextClasses}>Scratch</p>
          <p className={overviewTextClasses}>
            ブロックを組み合わせて、キャラクターを自在に動かしてみよう！色々な条件を組み合わせることでゲームなどをつくることができます。「こんなゲームを作りたい！」を実現してみよう！
          </p>
          <p className={overviewTextClasses}>
            <a
              href="https://scratch.mit.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClasses}
            >
              Scratchはこちら
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForUnsureFriends;
