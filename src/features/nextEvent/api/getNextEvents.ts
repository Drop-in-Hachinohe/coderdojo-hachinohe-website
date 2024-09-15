import { microCMS } from '@/libs/microCMSClient';

import type { NextEvent } from '../types';

export default async function getNextEvents() {
  return await microCMS.getList<NextEvent>({
    endpoint: 'next_events',
    customRequestInit: {
      next: { revalidate: 60 },
    },
    queries: { orders: 'order' },
  });
}
