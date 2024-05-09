import { debounce } from './../utils/throttle';
import { useEffect, useState } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.visualViewport?.width || window.innerWidth,
        height: window.visualViewport?.height || window.innerHeight,
      });
    };

    const debouncedHandleResize = debounce(handleResize, 100);

    window.addEventListener('resize', debouncedHandleResize);
    debouncedHandleResize();

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return windowSize;
};
