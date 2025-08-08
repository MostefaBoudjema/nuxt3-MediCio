export default defineNuxtPlugin(() => {
  console.log('[init plugin] Loaded ✅');
  if (process.server) return;

  // Apply .scrolled class to body on scroll
  const toggleScrolled = () => {
    const body = document.body;
    const header = document.querySelector<HTMLElement>('#header');
    if (
      !header ||
      (!header.classList.contains('scroll-up-sticky') &&
        !header.classList.contains('sticky-top') &&
        !header.classList.contains('fixed-top'))
    )
      return;

    if (window.scrollY > 100) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  };

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // Mobile nav toggle
  const mobileNavToggleBtn = document.querySelector<HTMLElement>('.mobile-nav-toggle');
  if (mobileNavToggleBtn) {
    const toggleMobileNav = () => {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    mobileNavToggleBtn.addEventListener('click', toggleMobileNav);

    document.querySelectorAll<HTMLAnchorElement>('#navmenu a').forEach((link) => {
      link.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          toggleMobileNav();
        }
      });
    });
  }

  // Toggle mobile nav dropdowns
  document.querySelectorAll<HTMLElement>('.navmenu .toggle-dropdown').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;
      const sibling = toggle.parentElement?.nextElementSibling as HTMLElement | null;
      if (parent) parent.classList.toggle('active');
      if (sibling) sibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  // Preloader
  const preloader = document.querySelector<HTMLElement>('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // Scroll to top
  const scrollTopBtn = document.querySelector<HTMLElement>('.scroll-top');
  if (scrollTopBtn) {
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    };

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  }

  // GLightbox
  if (typeof (window as any).GLightbox !== 'undefined') {
    (window as any).GLightbox({ selector: '.glightbox' });
  }

  // Pure Counter
  if (typeof (window as any).PureCounter !== 'undefined') {
    new (window as any).PureCounter();
  }

  // FAQ Toggle
  document.querySelectorAll<HTMLElement>('.faq-item h3, .faq-item .faq-toggle').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement?.classList.toggle('faq-active');
    });
  });

  // Swiper init
  const initSwiper = () => {
    document.querySelectorAll<HTMLElement>('.init-swiper').forEach((swiperEl) => {
      const configEl = swiperEl.querySelector<HTMLElement>('.swiper-config');
      if (!configEl) return;
      const config = JSON.parse(configEl.innerHTML.trim());

      if (swiperEl.classList.contains('swiper-tab')) {
        // custom logic if needed
      } else {
        new (window as any).Swiper(swiperEl, config);
      }
    });
  };
  window.addEventListener('load', initSwiper);

  // Scroll to hash on load with offset
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector<HTMLElement>(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop);
          window.scrollTo({
            top: section.offsetTop - scrollMarginTop,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  // Scrollspy
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navmenu a');
  const scrollSpy = () => {
    const position = window.scrollY + 200;
    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector<HTMLElement>(link.hash);
      if (!section) return;

      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll<HTMLAnchorElement>('.navmenu a.active').forEach((el) =>
          el.classList.remove('active')
        );
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('load', scrollSpy);
  document.addEventListener('scroll', scrollSpy);
});
