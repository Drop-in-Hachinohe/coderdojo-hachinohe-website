import { useEffect, useRef, useState } from 'react';

const useFadeInOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

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
        threshold: 0.1, // 要素の 10% が表示されたら発火
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
  }, []);

  // Class を共通化
  const fadeInClass = isVisible
    ? 'transition-opacity duration-1000 translate-y-0 opacity-100'
    : 'transition-opacity duration-1000 translate-y-10 opacity-0';

  return { ref: elementRef, fadeInClass };
};

export default useFadeInOnScroll;
