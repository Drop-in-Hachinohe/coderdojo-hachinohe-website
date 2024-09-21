import { type MicroCMSDate } from 'microcms-js-sdk';

export type Mentor = {
  id: string;
  position: ('champion' | 'mentor')[];
  name: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  order?: number;
} & MicroCMSDate;
