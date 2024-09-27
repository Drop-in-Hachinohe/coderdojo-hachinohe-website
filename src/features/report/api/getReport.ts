import { microCMS } from '@/libs/microCMSClient';

import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { Report } from '../types';

export default async function getReport(
  contentId: string,
  queries?: MicroCMSQueries,
) {
  return await microCMS.get<Report>({
    endpoint: 'reports',
    contentId,
    customRequestInit: {
      next: { revalidate: 60 },
    },
    queries,
  });
}
