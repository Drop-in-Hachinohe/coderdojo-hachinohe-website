import { microCMS } from '@/libs/microCMSClient';

import type { Mentor } from '../types';

export default async function getMentors() {
  return await microCMS.getList<Mentor>({
    endpoint: 'mentors',
    customRequestInit: {
      next: { revalidate: 60 },
    },
    queries: { orders: 'order' },
  });
}
