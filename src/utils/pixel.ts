/**
 * Meta Pixel helper for safe client-side tracking.
 * Ensures fbq calls never fail even if blocked by ad-blockers or when running tests.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const trackPixelEvent = (
  eventName: 'PageView' | 'ViewContent' | 'InitiateCheckout' | 'Purchase',
  params?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (err) {
      console.warn(`[Meta Pixel] Could not track ${eventName}:`, err);
    }
  }
};
