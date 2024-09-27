import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ClassConfig = {
  additionalClasses?: string;
  classNameAttr?: string;
};

const useFadeInOnScroll = <T extends HTMLElement = HTMLElement>(
  { additionalClasses = '', classNameAttr = '' }: ClassConfig = {},
  threshold: number = 0.1,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null, // ビューポートを監視
        threshold, // 要素の 10% が表示されたら発火
      },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Class を共通化
  const animationClass = isVisible
    ? 'transition-opacity duration-1000 translate-y-0 opacity-100'
    : 'transition-opacity duration-1000 translate-y-10 opacity-0';

  const fadeInClass = `visible-on-noscript ${twMerge(
    additionalClasses,
    animationClass,
    classNameAttr,
  )}`;

  return { ref: elementRef, fadeInClass };
};

export default useFadeInOnScroll;
