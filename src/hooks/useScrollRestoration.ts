import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Store scroll positions for each route
const scrollPositions: { [key: string]: number } = {};

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Save current scroll position when leaving the page
    const saveScrollPosition = () => {
      scrollPositions[location.pathname] = window.scrollY;
    };

    // Restore scroll position when entering the page
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions[location.pathname];
      if (savedPosition !== undefined) {
        // Use setTimeout to ensure the page is fully rendered
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 100);
      } else {
        // If no saved position, scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Save scroll position before leaving
    window.addEventListener('beforeunload', saveScrollPosition);
    
    // Restore scroll position on mount
    restoreScrollPosition();

    return () => {
      // Save scroll position when component unmounts (route change)
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [location.pathname]);
};
