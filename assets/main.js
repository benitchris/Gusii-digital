(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const header = document.querySelector(".site-header");

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    const navLinks = header.querySelectorAll(".nav-list a");
    const background = [
      document.querySelector("main"),
      document.querySelector(".site-footer"),
      document.querySelector(".wa-fab"),
    ].filter(Boolean);

    const setBackgroundInert = (isInert) => {
      background.forEach((el) => {
        el.inert = isInert;
      });
    };

    const closeNav = (returnFocus = false) => {
      if (!header.classList.contains("nav-open")) {
        return;
      }
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("nav-locked");
      setBackgroundInert(false);
      if (returnFocus) {
        toggle.focus();
      }
    };

    const openNav = () => {
      header.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      document.body.classList.add("nav-locked");
      setBackgroundInert(true);
      if (navLinks.length) {
        window.setTimeout(() => navLinks[0].focus(), 120);
      }
    };

    toggle.addEventListener("click", () => {
      if (header.classList.contains("nav-open")) {
        closeNav(true);
      } else {
        openNav();
      }
    });

    header.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });

    document.addEventListener("click", (event) => {
      if (header.classList.contains("nav-open") && !header.contains(event.target)) {
        closeNav();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav(true);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960) {
        closeNav();
      }
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    document.body.classList.add("js-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const business = String(data.get("business") || "").trim();
      const type = String(data.get("business-type") || "").trim();
      const message = String(data.get("message") || "").trim();

      const text =
        `Hi Gusii Digital, I'm ${name} from ${business}. ` +
        `Our business is: ${type}. ` +
        `I'd like help with: ${message}`;

      const url = `https://wa.me/254182800321?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
    });
  }
})();
