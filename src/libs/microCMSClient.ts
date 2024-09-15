import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
export const microCMS = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
  // retry: true // Retry attempts up to a maximum of two times.
});
