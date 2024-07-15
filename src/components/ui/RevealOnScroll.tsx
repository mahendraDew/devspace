import React, { useEffect, useRef, useState, ReactNode } from 'react';


export default function RevealOnScroll({ children, duration}:{children:ReactNode, duration?:number}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-${duration} ease-in-out ${
    isVisible ? 'opacity-100' : 'opacity-0'
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

