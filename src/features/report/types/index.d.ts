import { type MicroCMSDate } from 'microcms-js-sdk';

export type Report = {
  id: string;
  title: string;
  content: string;
  summary: string;
  originalCreatedAt?: string;
} & MicroCMSDate;
