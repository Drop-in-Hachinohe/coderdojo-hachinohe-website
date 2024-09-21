import { microCMS } from '@/libs/microCMSClient';

import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { Report } from '../types';

export default async function getNextEvents(queries?: MicroCMSQueries) {
  return await microCMS.getList<Report>({
    endpoint: 'reports',
    customRequestInit: {
      next: { revalidate: 60 },
    },
    queries,
  });
}
