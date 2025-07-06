import { useEffect, useRef } from 'react';

interface UseIframePreloadOptions {
  src: string;
  title?: string;
  attributes?: Record<string, string>;
  preloadDelay?: number;
  cleanupDelay?: number;
}

export const useIframePreload = ({
  src,
  title = "Preloaded iframe",
  attributes = {},
  preloadDelay = 0,
  cleanupDelay = 5000
}: UseIframePreloadOptions) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const preloadIframe = () => {
      try {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.title = title;
        iframe.style.display = 'none';
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        
        // Set default attributes
        iframe.setAttribute('mozallowfullscreen', 'true');
        iframe.setAttribute('webkitallowfullscreen', 'true');
        iframe.setAttribute('allow', 'autoplay; fullscreen; xr-spatial-tracking');
        iframe.setAttribute('xr-spatial-tracking', '');
        iframe.setAttribute('execution-while-out-of-viewport', '');
        iframe.setAttribute('execution-while-not-rendered', '');
        iframe.setAttribute('web-share', '');
        
        // Set custom attributes
        Object.entries(attributes).forEach(([key, value]) => {
          iframe.setAttribute(key, value);
        });
        
        document.body.appendChild(iframe);
        iframeRef.current = iframe;
        
        // Cleanup after specified delay
        setTimeout(() => {
          if (iframeRef.current && document.body.contains(iframeRef.current)) {
            document.body.removeChild(iframeRef.current);
            iframeRef.current = null;
          }
        }, cleanupDelay);
        
      } catch (error) {
        console.warn('Failed to preload iframe:', error);
      }
    };

    // Preload with optional delay
    const timeoutId = setTimeout(preloadIframe, preloadDelay);

    return () => {
      clearTimeout(timeoutId);
      if (iframeRef.current && document.body.contains(iframeRef.current)) {
        document.body.removeChild(iframeRef.current);
        iframeRef.current = null;
      }
    };
  }, [src, title, attributes, preloadDelay, cleanupDelay]);

  return iframeRef;
}; 