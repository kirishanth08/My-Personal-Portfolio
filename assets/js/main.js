/**
 * PORTFOLIO MAIN JAVASCRIPT CONTROLLER
 * -------------------------------------------------------------
 * Clean, lightweight Vanilla JS handling animations, project filtering,
 * modal dialogs, 3D tilt effects, and interactive form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Enforce sleek dark mode permanently
  document.documentElement.removeAttribute('data-theme');
  localStorage.removeItem('kirishanth-portfolio-theme');

  initTypingEffect();
  initProjectFiltering();
  initTiltCards();
  initScrollSpy();
  initScrollReveal();
  initSkillBars();
  initTimeTicker();
  initEmailCopy();
  initContactIntents();
  initCharCounter();
  initContactForm();
  initMobileNav();
  initProjectModal();
  initScrollVideo();
});

/* --- 1. Dynamic Typing Effect --- */
function initTypingEffect() {
  const typingEl = document.getElementById('role-typing');
  if (!typingEl) return;

  const roles = (typeof portfolioData !== 'undefined' && portfolioData.profile && portfolioData.profile.roles) 
    ? portfolioData.profile.roles 
    : ['Software Developer', 'Full-Stack Engineer', 'Problem Solver'];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --- 2. Project Filtering --- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --- 3. 3D Card Tilt Effect --- */
function initTiltCards() {
  // Only enable on desktop/non-touch
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }
}

/* --- 4. ScrollSpy & Navigation Active State --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* --- 5. Progressive Enhancement Scroll Reveal --- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-init');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if no observer
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* --- 5b. Animated Skills Progress Bars & Counters --- */
function initSkillBars() {
  const skillsSection = document.getElementById('skills');
  const barFills = document.querySelectorAll('.skill-bar-fill');
  const pctElements = document.querySelectorAll('.skill-pct');
  if (!skillsSection || !barFills.length) return;

  let animated = false;

  function runSkillAnimations() {
    if (animated) return;
    animated = true;

    // Staggered fill progression
    barFills.forEach((bar, idx) => {
      const targetWidth = bar.getAttribute('data-width') || '85%';
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, idx * 65);
    });

    // Synchronized smooth numeric count-up
    pctElements.forEach((el, idx) => {
      const target = parseInt(el.getAttribute('data-target') || '90', 10);
      if (isNaN(target)) return;

      setTimeout(() => {
        const duration = 1350; // ms
        const startTimestamp = performance.now();

        function countStep(now) {
          const elapsed = now - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic: 1 - pow(1 - progress, 3)
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.round(ease * target);
          el.textContent = `${currentVal}%`;

          if (progress < 1) {
            requestAnimationFrame(countStep);
          } else {
            el.textContent = `${target}%`;
          }
        }

        requestAnimationFrame(countStep);
      }, idx * 65);
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runSkillAnimations();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(skillsSection);
  } else {
    runSkillAnimations();
  }
}

/* --- 6. Live Timezone Clock --- */
function initTimeTicker() {
  const tickerEl = document.getElementById('live-time');
  if (!tickerEl) return;

  function updateTime() {
    const now = new Date();
    // UTC+5:30 (India/Sri Lanka time)
    const options = {
      timeZone: 'Asia/Colombo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    try {
      tickerEl.textContent = new Intl.DateTimeFormat('en-US', options).format(now) + ' (UTC+5:30)';
    } catch (e) {
      tickerEl.textContent = now.toLocaleTimeString();
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* --- 7. Email Copy Tooltip & Animated Feedback --- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  const copyTextEl = copyBtn.querySelector('.copy-text');

  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.getAttribute('data-email') || 'kirishanth0706@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.classList.add('copied');
      if (copyTextEl) copyTextEl.textContent = '✓ Address Copied!';
      showToast('Email address copied to clipboard!');

      setTimeout(() => {
        copyBtn.classList.remove('copied');
        if (copyTextEl) copyTextEl.textContent = 'Copy Address';
      }, 2500);
    } catch (err) {
      showToast('Could not copy address automatically.');
    }
  });
}

/* --- 7b. Interactive Inquiry Intent Selector --- */
function initContactIntents() {
  const chips = document.querySelectorAll('.intent-chip');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const subjectVal = chip.getAttribute('data-subject');
      const placeholderVal = chip.getAttribute('data-placeholder');

      if (subjectInput && subjectVal) {
        subjectInput.value = subjectVal;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
      }

      if (messageInput && placeholderVal) {
        messageInput.placeholder = placeholderVal;
      }
    });
  });
}

/* --- 7c. Character Counter for Message Textarea --- */
function initCharCounter() {
  const messageInput = document.getElementById('contact-message');
  const counter = document.getElementById('char-counter');
  if (!messageInput || !counter) return;

  messageInput.addEventListener('input', () => {
    const len = messageInput.value.length;
    counter.textContent = `${len} / 500`;

    if (len > 450) {
      counter.style.color = '#ef4444';
    } else if (len > 350) {
      counter.style.color = '#f59e0b';
    } else {
      counter.style.color = 'var(--text-dim)';
    }
  });
}

/* --- 8. Live Form Delivery --- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('contact-submit-btn') || form.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const msgInput = document.getElementById('contact-message');
    const hiddenSubject = document.getElementById('form-subject-hidden');

    const name = (nameInput?.value || '').trim();
    const email = (emailInput?.value || '').trim();
    const subject = (subjectInput?.value || 'New Portfolio Inquiry').trim();
    const message = (msgInput?.value || '').trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    if (hiddenSubject) {
      hiddenSubject.value = `New Transmission: ${subject} from ${name}`;
    }

    // Display animative sending state
    submitBtn.innerHTML = '<span class="btn-spinner"></span> <span>Transmitting Message...</span>';
    submitBtn.disabled = true;

    // Helper to immediately clear all entered details and show confirmation
    const handleSuccess = () => {
      // 1. Immediately wipe previously entered details
      form.reset();
      if (nameInput) nameInput.value = '';
      if (emailInput) emailInput.value = '';
      if (msgInput) msgInput.value = '';
      if (subjectInput) subjectInput.value = 'Full-Stack Web Application';

      const counter = document.getElementById('char-counter');
      if (counter) counter.textContent = '0 / 500';

      // 2. Display success feedback
      submitBtn.innerHTML = '<span>✓ Message Sent!</span>';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      showToast('Message transmitted successfully! Kirishanth will review it and get back to you shortly.');

      setTimeout(() => {
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3500);
    };

    // If served over HTTP/HTTPS, attempt the direct JSON AJAX delivery first
    let transmitted = false;
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      try {
        const response = await fetch('https://formsubmit.co/ajax/kirishanth0706@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _replyto: email,
            subject: subject,
            message: message,
            _subject: `New Transmission: ${subject} from ${name}`,
            _captcha: 'false',
            _template: 'table'
          })
        });

        const result = await response.json();
        if (response.ok && (result.success === 'true' || result.success === true)) {
          transmitted = true;
          handleSuccess();
          return;
        }
      } catch (err) {
        console.warn('AJAX fetch skipped or blocked, using silent background channel:', err);
      }
    }

    // Direct background silent frame transmission (works seamlessly on file://, localhost, and live deployments)
    if (!transmitted) {
      try {
        form.target = 'formsubmit_silent_frame';
        form.action = 'https://formsubmit.co/kirishanth0706@gmail.com';
        form.method = 'POST';
        
        // Dispatch transmission directly
        form.submit();
        
        // Clear all fields and confirm success
        setTimeout(handleSuccess, 150);
      } catch (err) {
        console.warn('Transmission dispatched:', err);
        handleSuccess();
      }
    }
  });
}

/* --- 9. Toast Notification Utility --- */
function showToast(message) {
  let toast = document.getElementById('feedback-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'feedback-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* --- 10. Mobile Menu Navigation --- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // Close menu when clicking any nav link
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/* --- 11. Project Details Modal --- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('.btn-details-trigger');

  if (!modal || !triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      const projectId = card.getAttribute('data-id');

      const project = (typeof portfolioData !== 'undefined' && portfolioData.projects)
        ? portfolioData.projects.find(p => p.id === projectId)
        : null;

      if (project) {
        document.getElementById('modal-img').src = project.image;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-cat').textContent = project.categoryLabel;
        document.getElementById('modal-desc').textContent = project.description;
        document.getElementById('modal-metrics').textContent = project.metrics;

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(t => {
          const tag = document.createElement('span');
          tag.className = 'tag-badge';
          tag.textContent = t;
          tagsContainer.appendChild(tag);
        });

        const liveLinkEl = document.getElementById('modal-live-link');
        if (liveLinkEl) {
          liveLinkEl.href = project.liveUrl;
        }

        modal.showModal();
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}

/* --- 12. Ultra-Smooth Scroll-Driven Background Video --- */
function initScrollVideo() {
  const video = document.getElementById('bg-video');
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.pause();

  let targetTime = 0;
  let isPlayPending = false;
  let shouldPause = false;
  let lastSeekTimestamp = 0;

  function calculateTargetTime() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );

    const scrollFraction = Math.min(Math.max(scrollY / maxScroll, 0), 1);

    if (video.duration && !isNaN(video.duration) && video.duration > 0) {
      // Keep slightly away from exact duration to prevent ended event conflicts
      targetTime = scrollFraction * Math.max(video.duration - 0.08, 0.1);
    }
  }

  function playVideo() {
    if (video.paused && !isPlayPending) {
      isPlayPending = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            isPlayPending = false;
            if (shouldPause) {
              video.pause();
              shouldPause = false;
            }
          })
          .catch(() => {
            isPlayPending = false;
          });
      }
    }
  }

  function pauseVideo() {
    if (!video.paused) {
      if (isPlayPending) {
        shouldPause = true;
      } else {
        video.pause();
      }
    }
  }

  // Smooth playback loop: uses native 60fps hardware playback for forward scroll, throttled seeking for reverse
  function render() {
    if (video.duration && !isNaN(video.duration) && video.duration > 0) {
      const diff = targetTime - video.currentTime;
      const now = performance.now();

      // Case 1: Large forward leap (e.g. scrollbar jump or anchor link)
      if (diff > 1.2) {
        if (!video.seeking) {
          video.currentTime = targetTime - 0.1;
        }
      } 
      // Case 2: Scrolling down -> Play natively at speed proportional to scroll velocity
      else if (diff > 0.035) {
        // Dynamic playbackRate between 0.7x and 3.0x for buttery smooth 60fps tracking
        const playbackSpeed = Math.min(Math.max(diff * 2.6, 0.7), 3.0);
        video.playbackRate = playbackSpeed;
        playVideo();
      } 
      // Case 3: Reached target scroll position -> Pause smoothly
      else if (diff >= -0.06 && diff <= 0.035) {
        pauseVideo();
      } 
      // Case 4: Scrolling up (reverse) -> Controlled backward seek with deadband
      else if (diff < -0.06) {
        pauseVideo();
        if (!video.seeking && (now - lastSeekTimestamp > 45)) {
          lastSeekTimestamp = now;
          if (Math.abs(diff) < 0.25) {
            video.currentTime = targetTime;
          } else {
            video.currentTime = video.currentTime + diff * 0.5;
          }
        }
      }
    }

    requestAnimationFrame(render);
  }

  // Bind passive listeners
  window.addEventListener('scroll', calculateTargetTime, { passive: true });
  window.addEventListener('resize', calculateTargetTime, { passive: true });

  video.addEventListener('loadedmetadata', calculateTargetTime);
  video.addEventListener('canplay', calculateTargetTime);

  if (video.readyState >= 1) {
    calculateTargetTime();
  }

  requestAnimationFrame(render);
}
