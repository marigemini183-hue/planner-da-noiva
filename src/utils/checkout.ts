import { trackPixelEvent } from './pixel';

export const KIWIFY_CHECKOUT_BASIC = 'https://pay.kiwify.com.br/YaAUHlD?utm_source=chatgpt.com';
export const KIWIFY_CHECKOUT_PREMIUM = 'https://pay.kiwify.com.br/jayJUhp?utm_source=chatgpt.com';

export const trackInitiateCheckout = (kit: 'basic' | 'premium') => {
  const isPremium = kit === 'premium';
  trackPixelEvent('InitiateCheckout', {
    content_name: isPremium ? 'Kit Noiva: do Chá à Lua de Mel — Premium' : 'Planner da Noiva — Kit Básico',
    value: isPremium ? 19.99 : 9.99,
    currency: 'BRL',
  });
};
