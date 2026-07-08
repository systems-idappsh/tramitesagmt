(function () {
  function setActiveNavigation() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const target = href.split("#")[0] || "index.html";

      if (target === path) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupMobileNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }
    });
  }

  function setupBackButtons() {
    document.querySelectorAll("[data-back]").forEach((button) => {
      button.addEventListener("click", () => {
        if (window.history.length > 1) {
          window.history.back();
          return;
        }

        window.location.href = "index.html";
      });
    });
  }

  window.SagmtNavigation = {
    init() {
      setActiveNavigation();
      setupMobileNavigation();
      setupBackButtons();
    }
  };
})();
