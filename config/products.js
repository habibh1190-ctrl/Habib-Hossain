/**
 * Agency Services & Product Packages Configuration
 * Ad Solution BD
 */
export const productsConfig = {
  services: [
    {
      id: 'fb-insta',
      name: 'Facebook & Instagram Ads',
      category: 'Paid Social Advertising',
      description: 'Reach your ideal customers with targeted Facebook and Instagram advertising campaigns designed for awareness, leads and conversions.',
      features: [
        'Campaign Setup',
        'Audience Targeting',
        'Ad Creative Strategy',
        'Campaign Optimization',
        'Performance Monitoring'
      ]
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      category: 'Search & Intent Marketing',
      description: 'Reach customers actively searching for your products and services through highly targeted Google advertising campaigns.',
      features: [
        'Search Ads',
        'Display Ads',
        'Keyword Targeting',
        'Campaign Optimization',
        'Conversion Tracking'
      ]
    },
    {
      id: 'tiktok-ads',
      name: 'TikTok Ads',
      category: 'Short-Form Video Ads',
      description: 'Connect with new audiences through creative and engaging TikTok advertising campaigns.',
      features: [
        'Campaign Setup',
        'Audience Research',
        'Creative Strategy',
        'Ad Optimization',
        'Performance Tracking'
      ]
    },
    {
      id: 'web-dev',
      name: 'Website Design & Development',
      category: 'Web Solutions',
      description: 'Build a professional, fast and conversion-focused website that represents your brand and turns visitors into customers.',
      features: [
        'Business Website',
        'Landing Page',
        'Responsive Design',
        'SEO-Friendly Structure',
        'Conversion-Focused Layout'
      ]
    },
    {
      id: 'tracking',
      name: 'Conversion Tracking & Analytics',
      category: 'Measurement & Attribution',
      description: 'Understand where your customers come from and measure the actions that matter to your business.',
      features: [
        'Google Analytics (GA4)',
        'Google Tag Manager',
        'Meta Pixel & CAPI',
        'Conversion Tracking',
        'Event Tracking',
        'Performance Reporting'
      ]
    }
  ],
  packages: [
    {
      id: 'starter',
      name: 'Growth Starter Package',
      price: '$450/month',
      bestFor: 'Small businesses & local startups'
    },
    {
      id: 'pro-scale',
      name: 'Performance Scale Suite',
      price: '$850/month',
      bestFor: 'Growing e-commerce & service brands'
    },
    {
      id: 'enterprise',
      name: 'Full Ecosystem Retainer',
      price: '$1,500/month',
      bestFor: 'Omnichannel multi-market enterprises'
    }
  ]
};

export default productsConfig;
