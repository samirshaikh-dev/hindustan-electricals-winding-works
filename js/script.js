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

  // 3. Lead Generation / Quotation Form with WhatsApp Fallback (supports .quote-form and .quote-form-v2)
  const quoteForms = document.querySelectorAll('.quote-form, .quote-form-v2');
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
      const service = serviceInput ? serviceInput.value.trim() : '';
      const motorType = motorTypeInput ? motorTypeInput.value.trim() : '';
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
      const lines = ['*New Inquiry via Website - Hindustan Electricals*'];
      lines.push('👤 *Name:* ' + name);
      lines.push('📞 *Phone:* ' + phone);
      if (service) lines.push('⚙️ *Service Required:* ' + service);
      if (motorType) lines.push('⚡ *Motor HP / Capacity:* ' + motorType);
      lines.push('📝 *Problem / Notes:* ' + (message || 'Please contact me with a service quote.'));

      const textMessage = lines.map(line => encodeURIComponent(line)).join('%0A');
      const whatsappUrl = `https://wa.me/919825272547?text=${textMessage}`;

      // Quick processing feedback then open WhatsApp
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
      }, 500);
    });
  });

  // 4. Photo Slots: show the real workshop photo when available, branded panel otherwise
  document.querySelectorAll('.photo-slot img[data-photo-slot]').forEach(img => {
    const slot = img.closest('.photo-slot');
    if (!slot) return;

    const markReady = () => slot.classList.add('is-ready');

    if (img.complete && img.naturalWidth > 0) {
      markReady();
    } else {
      img.addEventListener('load', markReady, { once: true });
      img.addEventListener('error', () => slot.classList.add('is-fallback'), { once: true });
    }
  });

  // 5. Header Shadow on Scroll
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

  // 6. Gallery Lightbox Modal
  const galleryCards = document.querySelectorAll('.gallery-v2-card');
  const galleryModal = document.querySelector('.gallery-modal');
  const modalImg = galleryModal ? galleryModal.querySelector('.gallery-modal-img') : null;
  const modalCaption = galleryModal ? galleryModal.querySelector('.gallery-modal-title') : null;
  const modalClose = galleryModal ? galleryModal.querySelector('.gallery-modal-close') : null;

  if (galleryCards.length && galleryModal && modalImg) {
    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const caption = card.getAttribute('data-caption') || (img ? img.getAttribute('alt') : 'Workshop Work');
        if (img) {
          modalImg.src = img.src;
          modalImg.alt = caption;
          if (modalCaption) modalCaption.textContent = caption;
          galleryModal.classList.add('is-active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeModal = () => {
      galleryModal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    galleryModal.addEventListener('click', (e) => {
      if (e.target === galleryModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && galleryModal.classList.contains('is-active')) {
        closeModal();
      }
    });
  }
});
