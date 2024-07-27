export const GA_TRACKING_ID = 'G-ND19WTM8HM';
export const shouldIncludeGA = process.env.NODE_ENV === 'production';

export const pageview = (url) => {
  if (shouldIncludeGA) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
