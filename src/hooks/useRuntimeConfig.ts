const useRuntimeConfig = () => {
  return {
    public: {
      contactAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '',
      contactPerson: process.env.NEXT_PUBLIC_CONTACT_PERSON || '',
      contactPhoneNumber: process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER || '',
      googleMapEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || '',
    },
  };
};

export default useRuntimeConfig;
