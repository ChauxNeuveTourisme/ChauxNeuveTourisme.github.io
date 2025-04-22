import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scroll = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      // Wait a bit so the DOM loads
      setTimeout(scroll, 300);
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
