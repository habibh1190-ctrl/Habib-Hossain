/**
 * Tracking & Analytics Configuration
 * Ad Solution BD
 */
export const trackingConfig = {
  metaPixelId: 'YOUR_META_PIXEL_ID',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  googleTagManagerId: 'GTM-XXXXXXX',
  tiktokPixelId: 'YOUR_TIKTOK_PIXEL_ID',
  conversionsApiEnabled: true,
  debugMode: false,
  events: {
    pageView: 'PageView',
    lead: 'Lead',
    contact: 'Contact',
    consultationBooking: 'Schedule',
    viewService: 'ViewContent'
  }
};

export default trackingConfig;
