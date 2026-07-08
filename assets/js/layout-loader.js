(function () {
  const componentMap = {
    header: "components/header.html",
    footer: "components/footer.html",
    "whatsapp-float": "components/whatsapp-float.html",
    "cta-contact": "components/cta-contact.html"
  };

  async function loadComponent(slot) {
    const name = slot.getAttribute("data-component");
    const src = componentMap[name];

    if (!src) {
      return;
    }

    try {
      const response = await fetch(src, { cache: "no-cache" });

      if (!response.ok) {
        throw new Error(`Component ${name} failed: ${response.status}`);
      }

      slot.innerHTML = await response.text();
    } catch (error) {
      console.warn("[SAGMT] component fallback", error);
      slot.hidden = true;
    }
  }

  window.SagmtLayoutReady = async function SagmtLayoutReady() {
    const slots = Array.from(document.querySelectorAll("[data-component]"));
    await Promise.all(slots.map(loadComponent));
    document.dispatchEvent(new CustomEvent("sagmt:layout-ready"));
  };
})();
