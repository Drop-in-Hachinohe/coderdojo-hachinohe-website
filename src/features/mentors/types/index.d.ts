import { type MicroCMSDate } from 'microcms-js-sdk';

export type Mentors = {
  id: string;
  position: ('champion' | 'mentor')[];
  name: string;
  description: string;
  image: string;
  order?: number;
} & MicroCMSDate;
