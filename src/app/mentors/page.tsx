import getMentors from '@/features/mentors/api/getMentors';

export default async function Mentors() {
  // サポートメンバー一覧を取得
  const mentors = await getMentors();

}
