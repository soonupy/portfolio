import { useCallback } from 'react';

interface ScrollToTopOptions {
  behavior?: 'smooth' | 'instant';
  top?: number;
}

export const useScrollToTop = () => {
  const scrollToTop = useCallback((options: ScrollToTopOptions = {}) => {
    const { behavior = 'smooth', top = 0 } = options;
    
    window.scrollTo({
      top,
      left: 0,
      behavior,
    });
  }, []);

  return { scrollToTop };
};


export default useScrollToTop;