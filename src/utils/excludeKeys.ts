/**
 * 指定したキーを除外して残りのキーをカンマ区切りの文字列として返す関数
 *
 * @template T - オブジェクトの型
 * @param keys - フィルタリング対象となるキーの配列
 * @param exclude - 除外したいキーをカンマ区切りの文字列で指定
 * @returns 除外されたキーを除いた、残りのキーをカンマ区切りにした文字列
 */
export function excludeKeys<T>(keys: Array<keyof T>, exclude: string): string {
  const excludedKeys = exclude.split(',');

  // 除外されたキー以外をフィルタリング
  const filteredKeys = keys.filter(
    (key) => !excludedKeys.includes(key as string),
  );

  // カンマ区切りで返却
  return filteredKeys.join(',');
}
