import type { Report } from '../';

export const reportKeys: Array<keyof Report> = [
  'id',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'revisedAt',
  'title',
  'content',
  'summary',
  'originalCreatedAt',
];
