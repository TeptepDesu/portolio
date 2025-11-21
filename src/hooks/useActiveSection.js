import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(sectionIds[0] || null);

  useEffect(() => {
    const observers = [];
    const options = { root: null, rootMargin: '0px', threshold: 0.6 };

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id);
      }, options);
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds]);

  return active;
}
