import * as React from 'react';

export type WindowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const breakpoints = {} as Record<WindowSize, number>;

export function getBreakpoint(size: WindowSize) {
  if (!breakpoints[size]) {
    const documentStyle = getComputedStyle(document.documentElement);
    breakpoints[size] = Number(documentStyle.getPropertyValue(`--breakpoint-${size}`).replace('px', '').trim());
  }
  return breakpoints[size];
}

export function useWindowSize(): WindowSize {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = React.useState<WindowSize>('xl');

  React.useLayoutEffect(() => {
    if (!isClient) {
      return;
    }
    
    function handleResize() {
      const width = window.innerWidth;

      let newWindowSize: WindowSize = 'xl';
      if (width <  getBreakpoint('xl')) {
        newWindowSize = 'lg';
      }
      if (width <  getBreakpoint('lg')) {
        newWindowSize = 'md';
      }
      if (width <  getBreakpoint('md')) {
        newWindowSize = 'sm';
      }
      if (width <  getBreakpoint('sm')) {
        newWindowSize = 'xs';
      }
     
      setWindowSize(newWindowSize);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
