import React from 'react';

const Noscript = () => {
  return (
    <noscript>
      <style>{`
        .visible-on-noscript {
          opacity: 100 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </noscript>
  );
};

export default Noscript;
