import { Position } from '../';

// 順番込みでポジションキーの定義を一か所に集約 (API 側で追加編集があれば, 以下を修正)
export const PositionDefinitions = [
  {
    key: 'champion',
    label: 'チャンピオン（主催）',
  },
  {
    key: 'mentor',
    label: 'メンター',
  },
] as const;

// サポートページの position のソートで使用する Mentor.position に対応した key 配列
// PositionDefinitions の配列順序に依存した Position[] 配列変数を生成
export const sortingPositionsKeys: Position[] = PositionDefinitions.map(
  ({ key }) => key,
);
