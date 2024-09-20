import PageHeading from '@/components/common/PageHeading/PageHeading';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import getMentors from '@/features/mentors/api/getMentors';
import MentorList from '@/components/common/MentorList/MentorList';
import FadeInOnScrollContainer from '@/components/common/FadeInOnScrollContainer/FadeInOnScrollContainer';

export default async function Mentors() {
  // サポートメンバー一覧を取得
  const mentors = await getMentors();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* サポートメンバー */}
        <div className="pb-5">
          <PageHeading label="サポートメンバー" className="mb-4" />
        </div>
        <FadeInOnScrollContainer>
          {/* チャンピオン（主催者）一覧 */}
          <SectionTitle title="チャンピオン（主催者）" className="mb-6" />
          <MentorList
            mentors={mentors.contents}
            position="champion"
            className="mt-5 mb-12 sm:mt-10 sm:mb-20 "
          />
        </FadeInOnScrollContainer>
        <FadeInOnScrollContainer>
          {/* メンター一覧 */}
          <SectionTitle title="メンター" className="mb-6" />
          <MentorList
            mentors={mentors.contents}
            position="mentor"
            className="my-5"
          />
        </FadeInOnScrollContainer>
      </div>
    </main>
  );
}
