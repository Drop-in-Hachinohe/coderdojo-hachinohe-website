/**
 * HTML 文字列から最初の画像の URL を抽出する関数
 *
 * @param html - 画像を含む HTML 文字列
 * @returns 最初の画像の URL。画像が存在しない場合は undefined を返す
 */
export function extractFirstImageUrl(html: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match ? match[1] : undefined;
}
