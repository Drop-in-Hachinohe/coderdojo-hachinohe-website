import KeyVisual from '@/components/pages/home/KeyVisual/KeyVisual';
import NextEventDetails from '@/components/pages/home/NextEventDetails/NextEventDetails';
import OurDojoOverview from '@/components/pages/home/OurDojoOverview/OurDojoOverview';
import AboutCoderDojo from '@/components/pages/home/AboutCoderDojo/AboutCoderDojo';
import Access from '@/components/pages/home/Access/Access';
import EventReport from '@/components/pages/home/EventReport/EventReport';

export default function ForFirstTimers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* KV */}
      <KeyVisual />

      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl p-8 py-20 sm:p-12 sm:py-20 md:p-24">
        {/* マイクラ部お知らせ */}
        <section className="mb-12 sm:mb-20">
          <h2 className="mb-4 text-center text-2xl font-bold">
            CoderDojo八戸に「マイクラ部」ができました!!
          </h2>
          <p className="mb-2.5 text-left text-sm leading-6">
            マイクラ大好きなみんな!マイクラだけをやる「マイクラ部」に参加してみませんか!?
          </p>
          <p className="mb-2.5 text-left text-sm leading-6">
            CoderDojo八戸では今まで毎月第2日曜日の開催でしたが、マイクラに特化した会を毎月第4日曜日(予定)に開催することになりました!!
          </p>
          <p className="mb-2.5 text-left text-sm leading-6">
            マイクラ部では、ひたすら自分のワールドを作ったり、集まった仲間と一緒のワールドで遊んだり、とにかくマイクラをトコトン楽しむ会です😆
          </p>
          <p className="mb-2.5 text-left text-sm leading-6">
            マイクラだけやりたいよ〜というみんなはぜひ遊びにきてね！
          </p>
          <p className="text-left text-sm leading-6">
            ※通常のCoderDojo八戸（毎週第2日曜日）でマイクラやってももちろんOKです🙆‍♀️（マイクラに詳しいメンターが不在のことが多いので、質問に答えられないことがあるのでご了承ください🙇‍♀️）
          </p>
        </section>

        {/* 次回開催 */}
        <NextEventDetails className="mb-12" />

        {/* CoderDojoは無料で学び合うプログラミング道場です。 */}
        <OurDojoOverview />

        {/* CoderDojoとは？ */}
        <AboutCoderDojo className="mb-16" />

        {/* 開催場所  */}
        <Access className="mb-16" />

        {/* 開催報告 */}
        <EventReport />
      </div>
    </main>
  );
}
