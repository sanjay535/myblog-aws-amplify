import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
  isXtraSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXtraLarge: boolean;
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isXtraSmall: false,
    isSmall: false,
    isMedium: false,
    isLarge: false,
    isXtraLarge: false,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({
        width,
        height,
        isXtraSmall: width < 576,
        isSmall: width >= 576 && width < 768,
        isMedium: width >= 768 && width < 992,
        isLarge: width >= 992 && width < 1200,
        isXtraLarge: width >= 1200,
      });
    }

    // Initial call to set the size on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
