import { useEffect, useState } from 'react';

export type DeviceType = 'desktop' | 'mobile';

const MOBILE_BREAKPOINT = 1024;

function detectDeviceType(): DeviceType {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  // Allow explicit URL query parameter override for testing/previewing (?device=mobile or ?device=desktop)
  const params = new URLSearchParams(window.location.search);
  const forcedDevice = params.get('device');
  if (forcedDevice === 'mobile') return 'mobile';
  if (forcedDevice === 'desktop') return 'desktop';

  const width = window.innerWidth;
  if (width < MOBILE_BREAKPOINT) {
    return 'mobile';
  }

  // Also check mobile handset user agents when screen width is compact
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  if (isMobileUA && width < 1200) {
    return 'mobile';
  }

  return 'desktop';
}

/**
 * Detects whether the application should render the Desktop Presentation Stage
 * or the dedicated Mobile-Friendly Showcase Display.
 */
export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => detectDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(detectDeviceType());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('popstate', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('popstate', handleResize);
    };
  }, []);

  return deviceType;
}
