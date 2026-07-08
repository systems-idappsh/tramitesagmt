(function () {
  const phoneDigits = "51977786260";
  const defaultMessage = "Hola SAGMT, quiero informacion sobre sus servicios de tramites.";

  function buildWhatsappUrl(message) {
    return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message || defaultMessage)}`;
  }

  function hydrateContactLinks() {
    document.querySelectorAll("[data-whatsapp]").forEach((link) => {
      const message = link.getAttribute("data-message") || defaultMessage;
      link.href = buildWhatsappUrl(message);
      link.rel = "noopener";
      link.target = "_blank";
    });

    document.querySelectorAll("[data-call]").forEach((link) => {
      link.href = "tel:+51977786260";
    });

    document.querySelectorAll("[data-email]").forEach((link) => {
      const email = link.getAttribute("data-email") || "tramitesagmt@gmail.com";
      link.href = `mailto:${email}`;
    });
  }

  window.SagmtContact = {
    init: hydrateContactLinks
  };
})();
