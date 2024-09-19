import getMentors from '@/features/mentors/api/getMentors';

export default async function Mentors() {
  // サポートメンバー一覧を取得
  const mentors = await getMentors();

  // @TODO: 一時的にサポートメンバー一覧をログに出力
  console.log(JSON.stringify(mentors, null, 2));
}
