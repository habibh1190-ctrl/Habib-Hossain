/**
 * @file script.js
 * @description Vanilla JavaScript functionality for Ad Solution BD website.
 * Clean, modular, well-commented, and zero-dependency.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA OBJECTS & SERVICE DETAILS
  // =========================================================================
  const servicesData = {
    'fb-insta': {
      title: 'Facebook & Instagram Ads',
      subtitle: 'Reach your ideal customers with targeted Facebook and Instagram advertising campaigns designed for awareness, leads and conversions.',
      deliverables: [
        'Complete Meta Business Manager & Ad Account Configuration',
        'In-depth Audience Research & Custom Lookalike Audience Creation',
        'High-Converting Ad Copywriting & Creative Direction',
        'A/B Testing on Audiences, Formats, and Placements (Reels, Feed, Stories)',
        'Meta Conversions API (CAPI) & Pixel Setup for iOS14+ tracking',
        'Weekly Performance Monitoring & Continuous Bid Optimization'
      ]
    },
    'google-ads': {
      title: 'Google Ads',
      subtitle: 'Reach customers actively searching for your products and services through highly targeted Google advertising campaigns.',
      deliverables: [
        'High-Intent Keyword Research & Negative Keyword Strategy',
        'Google Search, Display, and Performance Max (PMax) Campaigns',
        'Compelling Ad Headlines, Descriptions, and Callout Assets',
        'Landing Page Quality Score Optimization & Bid Adjustments',
        'Google Ads Enhanced Conversion Tracking Integration',
        'Transparent Cost-Per-Click (CPC) & ROAS Performance Reporting'
      ]
    },
    'tiktok-ads': {
      title: 'TikTok Ads',
      subtitle: 'Connect with new audiences through creative and engaging TikTok advertising campaigns.',
      deliverables: [
        'TikTok Ads Manager Setup & TikTok Pixel Integration',
        'Audience Behavior, Interest, and Demographic Targeting',
        'Native Video Creative Strategy Tailored for Viral Engagement',
        'In-Feed Video Ads, Spark Ads, and Lead Generation Ads',
        'Budget Pacing & Day-Parting Optimization',
        'Comprehensive Analytics on Engagement Rates, CTR, and CPA'
      ]
    },
    'web-dev': {
      title: 'Website Design & Development',
      subtitle: 'Build a professional, fast and conversion-focused website that represents your brand and turns visitors into customers.',
      deliverables: [
        'Custom Responsive Design Optimized for Mobile, Tablet & Desktop',
        'Conversion-Focused Layouts with Strategic CTA Placements',
        'Lightning-Fast Page Load Speeds (Sub-2s Core Web Vitals)',
        'SEO-Friendly Code Structure & Schema Markup Integration',
        'Interactive Contact Forms, WhatsApp Chat Integration & Lead Funnels',
        'Full Cross-Browser Compatibility and Clean Semantic Code'
      ]
    },
    'tracking': {
      title: 'Conversion Tracking & Analytics',
      subtitle: 'Understand where your customers come from and measure the actions that matter to your business.',
      deliverables: [
        'Google Tag Manager (GTM) Container Architecture & Deployment',
        'Google Analytics 4 (GA4) Custom Events & E-commerce Funnels',
        'Meta Pixel & TikTok Pixel Server-Side Tracking Integration',
        'Custom Conversion Event Setup (Purchases, Form Submits, Leads)',
        'Data Layer Troubleshooting & Cross-Domain Tracking',
        'Custom Google Looker Studio Dashboard for Real-Time ROI Tracking'
      ]
    }
  };

  // =========================================================================
  // 2. STICKY NAVBAR SCROLL EFFECT
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // =========================================================================
  // 3. MOBILE HAMBURGER MENU
  // =========================================================================
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerCloseBtn = document.getElementById('mobileDrawerCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !mobileNavDrawer.classList.contains('open');
    if (shouldOpen) {
      mobileNavDrawer.classList.add('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNavDrawer.classList.remove('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggleBtn && mobileNavDrawer) {
    mobileToggleBtn.addEventListener('click', () => toggleMobileMenu());

    if (mobileDrawerCloseBtn) {
      mobileDrawerCloseBtn.addEventListener('click', () => toggleMobileMenu(false));
    }

    // Close when clicking outside drawer content
    mobileNavDrawer.addEventListener('click', (e) => {
      if (e.target === mobileNavDrawer) {
        toggleMobileMenu(false);
      }
    });

    // Close when clicking any nav link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });
  }

  // =========================================================================
  // 4. ACTIVE NAVIGATION LINK ON SCROLL
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // =========================================================================
  // 5. SERVICE MODAL FUNCTIONALITY
  // =========================================================================
  const serviceModal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalBookBtn = document.getElementById('modalBookBtn');
  const serviceSelectInput = document.getElementById('contactService');

  let currentSelectedService = 'Facebook & Instagram Ads';

  const openServiceModal = (serviceKey) => {
    const data = servicesData[serviceKey];
    if (!data || !serviceModal) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    currentSelectedService = data.title;

    // Populate deliverables list
    modalFeaturesList.innerHTML = '';
    data.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.className = 'modal-feature-item';
      li.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${item}</span>
      `;
      modalFeaturesList.appendChild(li);
    });

    serviceModal.classList.add('active');
    serviceModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    if (!serviceModal) return;
    serviceModal.classList.remove('active');
    serviceModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach event listeners to all "Learn More" service buttons
  const serviceButtons = document.querySelectorAll('.service-cta');
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service');
      if (serviceKey) {
        openServiceModal(serviceKey);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeServiceModal);
  }

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });
  }

  // Handle ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal?.classList.contains('active')) {
      closeServiceModal();
    }
  });

  // Modal Book Button
  if (modalBookBtn) {
    modalBookBtn.addEventListener('click', () => {
      closeServiceModal();
      if (serviceSelectInput) {
        serviceSelectInput.value = currentSelectedService;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // 6. INTERACTIVE ROI ESTIMATOR CALCULATOR
  // =========================================================================
  const budgetSlider = document.getElementById('budgetSlider');
  const budgetDisplay = document.getElementById('budgetDisplay');
  const estReach = document.getElementById('estReach');
  const estClicks = document.getElementById('estClicks');
  const estLeads = document.getElementById('estLeads');

  const updateEstimates = (budget) => {
    // Calculation model based on standard high-performance digital ad metrics
    // Avg CPM: ~$2.80 | Avg CTR: 2.4% | Avg Conversion/Lead Rate: 4.8%
    const numericBudget = parseInt(budget, 10);
    const reach = Math.round((numericBudget / 2.8) * 1000);
    const clicks = Math.round(reach * 0.024);
    const leads = Math.round(clicks * 0.048);

    if (budgetDisplay) budgetDisplay.textContent = `$${numericBudget.toLocaleString()}/mo`;
    if (estReach) estReach.textContent = `${reach.toLocaleString()}+`;
    if (estClicks) estClicks.textContent = `${clicks.toLocaleString()}+`;
    if (estLeads) estLeads.textContent = `${leads.toLocaleString()}+`;
  };

  if (budgetSlider) {
    budgetSlider.addEventListener('input', (e) => {
      const target = e.target;
      updateEstimates(target.value);
    });
    // Initial run
    updateEstimates(budgetSlider.value || 500);
  }

  // =========================================================================
  // 7. CONTACT FORM SUBMISSION & CLIENT-SIDE VALIDATION
  // =========================================================================
  const contactForm = document.getElementById('agencyContactForm');
  const formStatusAlert = document.getElementById('formStatusAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const service = document.getElementById('contactService')?.value;
      const message = document.getElementById('contactMessage')?.value.trim();

      // Simple validation check
      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      /* 
       * ===================================================================
       * NOTE FOR DEVELOPERS / AGENCY OWNER:
       * -------------------------------------------------------------------
       * This is a static website. To receive submissions directly to your email
       * (habibh1190@gmail.com), you can easily plug in any static form backend:
       * 
       * 1. Formspree: change form action to:
       *    action="https://formspree.io/f/{your-id}" method="POST"
       * 
       * 2. Web3Forms: add an input with your access key:
       *    <input type="hidden" name="access_key" value="YOUR-KEY-HERE">
       * 
       * 3. EmailJS: initialize EmailJS SDK and call emailjs.sendForm(...)
       * ===================================================================
       */

      // Show user feedback
      if (formStatusAlert) {
        formStatusAlert.style.display = 'flex';
        formStatusAlert.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div>
            <strong>Thank you, ${name}!</strong> Your request has been received. Our team will contact you at <em>${email}</em> within 2 hours.
          </div>
        `;

        // Smoothly scroll alert into view
        formStatusAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset form fields
      contactForm.reset();
    });
  }

  // =========================================================================
  // 8. BACK TO TOP BUTTON
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
