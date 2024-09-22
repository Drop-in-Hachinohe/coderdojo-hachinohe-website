import PageHeading from '@/components/common/PageHeading/PageHeading';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import getMentors from '@/features/mentor/api/getMentors';
import MentorList from '@/components/common/MentorList/MentorList';
import FadeInOnScrollContainer from '@/components/common/FadeInOnScrollContainer/FadeInOnScrollContainer';
import {
  PositionDefinitions,
  sortingPositionsKeys,
} from '@/features/mentor/types/keys';

import type {
  Position,
  MentorByPosition,
  Mentor,
} from '@/features/mentor/types';

export default async function Mentors() {
  // サポートメンバー一覧を取得
  const mentors = await getMentors();

  // position でグルーピングした mentors 配列を生成する
  const arrayOfMentorsByPosition: MentorByPosition[] = (() => {
    // position を key とした (グルーピング) Object 配列を生成
    const groupedByPosition = mentors.contents.reduce(
      (acc, mentor) => {
        const mentorPosition = mentor.position[0];
        if (!acc[mentorPosition]) {
          acc[mentorPosition] = [];
        }
        acc[mentorPosition].push(mentor);
        return acc;
      },
      {} as Record<Position, Mentor[]>,
    );

    // 更に sortingPositionsKeys の順序でソート mentors 配列を生成
    const result = Object.entries(groupedByPosition)
      // sortingPositionsKeys の順序で配列をソートする
      .sort(
        ([a], [b]) =>
          sortingPositionsKeys.indexOf(a as Position) -
          sortingPositionsKeys.indexOf(b as Position),
      )
      // MentorByPosition に変換
      .map(([position, mentors]) => ({
        position: position as Position,
        mentors,
      }));

    return result;
  })();

  // MentorListSections JSX の定義
  const MentorListSections = arrayOfMentorsByPosition.map(
    (mentorsByPosition, index) => {
      const mentorListTwClasses =
        index === arrayOfMentorsByPosition.length - 1
          ? 'my-5' // 最後の MentorList に当てる TW Class 群
          : 'mb-12 mt-5 sm:mb-20 sm:mt-10'; // 最後以外の MentorList に当てる TW Class 群

      return (
        <FadeInOnScrollContainer key={index}>
          <section>
            <SectionTitle
              title={PositionDefinitions[index].label}
              className="mb-6"
            />
            <MentorList
              mentors={mentorsByPosition.mentors}
              className={mentorListTwClasses}
            />
          </section>
        </FadeInOnScrollContainer>
      );
    },
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* サポートメンバー */}
        <div className="pb-5">
          <PageHeading label="サポートメンバー" className="mb-4" />
        </div>

        {/* サポートメンバー一覧 */}
        {MentorListSections}
      </div>
    </main>
  );
}
