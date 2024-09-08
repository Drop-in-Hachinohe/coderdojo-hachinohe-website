import Image from 'next/image';
import React from 'react';

const KeyVisual = () => {
  return (
    <div className="flex max-h-[36rem] items-center justify-center overflow-y-hidden">
      <Image
        src="/images/kv.jpg"
        alt="たくさん考えよう たくさん話そう みんなのプログラミング道場"
        width="1420"
        height="616"
        loading="lazy"
      />
    </div>
  );
};

export default KeyVisual;
