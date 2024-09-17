export default function excludeKeys<T>(
  keys: Array<keyof T>,
  exclude: string,
): string {
  const excludedKeys = exclude.split(',');

  // 除外されたキー以外をフィルタリング
  const filteredKeys = keys.filter(
    (key) => !excludedKeys.includes(key as string),
  );

  // カンマ区切りで返却
  return filteredKeys.join(',');
}
