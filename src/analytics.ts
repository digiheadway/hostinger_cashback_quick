declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackClick = (buttonName: string, destination?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    destination: destination || 'unknown'
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_name: pageName
  });
};

export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_click', {
    link_url: url,
    link_text: linkText
  });
};
