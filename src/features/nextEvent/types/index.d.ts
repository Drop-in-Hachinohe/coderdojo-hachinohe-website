import { type MicroCMSDate } from 'microcms-js-sdk';

export type NextEvent = {
  id: string;
  title: string;
  detail: string;
  applicationLink?: string;
  linkText?: string;
  order?: number;
} & MicroCMSDate;
