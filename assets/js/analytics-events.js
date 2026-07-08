(function () {
  const eventMap = {
    whatsapp: "click_whatsapp",
    call: "click_call",
    email: "click_email",
    service: "click_service_card",
    social_facebook: "click_social_facebook",
    social_instagram: "click_social_instagram",
    social_tiktok: "click_social_tiktok",
    social_youtube: "click_social_youtube",
    social_x: "click_social_x",
    map: "click_map",
    main_cta: "click_main_cta",
    internal: "click_internal_link"
  };

  function pushEvent(name, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  }

  function setupEvents() {
    document.addEventListener("click", (event) => {
      const tracked = event.target.closest("[data-track]");

      if (!tracked) {
        return;
      }

      const key = tracked.getAttribute("data-track");
      const name = eventMap[key] || key;
      pushEvent(name, {
        label: tracked.getAttribute("aria-label") || tracked.textContent.trim().slice(0, 80),
        href: tracked.getAttribute("href") || ""
      });
    });
  }

  window.SagmtAnalytics = {
    init: setupEvents,
    pushEvent
  };
})();
