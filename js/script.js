/**
 * Hindustan Electricals Winding Works - Client Scripts
 * Pure Vanilla JavaScript: Navigation, FAQ accordion, Lead Generation Form & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      
      // Update hamburger icon
      const icon = menuToggle.querySelector('svg');
      if (icon) {
        if (isOpen) {
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
        } else {
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
        }
      }
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          const icon = menuToggle.querySelector('svg');
          if (icon) {
            icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
          }
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector('svg');
        if (icon) {
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
        }
      }
    });
  }

  // 2. FAQ Accordion
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const questionBtn = card.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        
        // Optional: close other open items for clean accordion effect
        faqCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
            const otherBtn = otherCard.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        card.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', !isActive);
      });
    }
  });

  // 3. Lead Generation / Quotation Form with WhatsApp Fallback
  const quoteForms = document.querySelectorAll('.quote-form');
  quoteForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : 'Submit';
      
      // Extract form values
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const serviceInput = form.querySelector('[name="service"]');
      const motorTypeInput = form.querySelector('[name="motor_type"]');
      const messageInput = form.querySelector('[name="message"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : 'Motor Rewinding';
      const motorType = motorTypeInput ? motorTypeInput.value.trim() : 'Standard Motor';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !phone) {
        alert('Please fill in your name and contact phone number.');
        return;
      }

      // Provide UI loading feedback
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Connecting...';
      }

      // Construct WhatsApp prefilled message
      const textMessage = `*New Inquiry via Website - Hindustan Electricals*%0A` +
        `👤 *Name:* ${encodeURIComponent(name)}%0A` +
        `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
        `⚙️ *Service Required:* ${encodeURIComponent(service)}%0A` +
        `⚡ *Motor Type / HP:* ${encodeURIComponent(motorType || 'Not specified')}%0A` +
        `📝 *Problem / Details:* ${encodeURIComponent(message || 'Please contact me with a quote.')}`;

      const whatsappUrl = `https://wa.me/919825272547?text=${textMessage}`;

      // Simulate quick processing and redirect to WhatsApp
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerText = 'Redirecting to WhatsApp...';
        }
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }
      }, 600);
    });
  });

  // 4. Header Shadow on Scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
      }
    });
  }
});
