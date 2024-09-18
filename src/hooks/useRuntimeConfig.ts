const useRuntimeConfig = () => {
  return {
    public: {
      contactAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '',
      contactPerson: process.env.NEXT_PUBLIC_CONTACT_PERSON || '',
      contactPhoneNumber: process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER || '',
      googleMapEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || '',
      contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
    },
  };
};

export default useRuntimeConfig;
