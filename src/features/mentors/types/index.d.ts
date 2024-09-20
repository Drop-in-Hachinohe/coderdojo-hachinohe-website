import { type MicroCMSDate } from 'microcms-js-sdk';

import { PositionDefinitions } from './keys';

// PositionDefinitions 内 Object の key に依存する文字列が定義される
export type Position = (typeof PositionDefinitions)[number]['key'];

export type Mentor = {
  id: string;
  position: Position[];
  name: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  order?: number;
} & MicroCMSDate;

export type MentorByPosition = {
  position: Position;
  mentors: Mentor[];
};
