/**
 * ISO 8601形式の文字列を YYYY/MM/DD HH:MM:SS にフォーマットする関数
 *
 * @param isoString - ISO 8601形式の日付文字列
 * @returns フォーマットされた日付文字列
 * @throws Error - 無効な日付が入力された場合にエラーをスロー
 */
export function formatDate(
  isoString: string,
  isSecondsVisible = false,
): string {
  if (typeof isoString !== 'string') {
    throw new Error('無効な日付形式です');
  }
  const date: Date = new Date(isoString);

  if (isNaN(date.getTime())) {
    throw new Error('無効な日付形式です');
  }

  const year: string = date.getFullYear().toString();
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const day: string = date.getDate().toString().padStart(2, '0');

  const hours: string = date.getHours().toString().padStart(2, '0');
  const minutes: string = date.getMinutes().toString().padStart(2, '0');
  const seconds: string = date.getSeconds().toString().padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}${isSecondsVisible ? `:${seconds}` : ''}`;
}
