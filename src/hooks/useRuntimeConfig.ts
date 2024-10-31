const useRuntimeConfig = () => {
  return {
    public: {
      // Contact & Access
      contactAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '',
      contactPerson: process.env.NEXT_PUBLIC_CONTACT_PERSON || '',
      contactPhoneNumber: process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER || '',
      googleMapEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || '',
      contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
      // OG
      siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || '',
      siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '',
      siteKeywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS || '',
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
      twitterSiteUrl: process.env.NEXT_PUBLIC_TWITTER_SITE_URL || '',
    },
  };
};

export default useRuntimeConfig;
