import { microCMS } from '@/libs/microCMSClient';

import type { Mentors } from '../types';

export default async function getMentors() {
  return await microCMS.getList<Mentors>({
    endpoint: 'mentors',
    customRequestInit: {
      next: { revalidate: 60 },
    },
    queries: { orders: 'order' },
  });
}
