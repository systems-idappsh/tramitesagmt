(function () {
  async function init() {
    if (window.SagmtLayoutReady) {
      await window.SagmtLayoutReady();
    }

    window.SagmtNavigation?.init();
    window.SagmtContact?.init();
    window.SagmtSlider?.init();
    window.SagmtAnalytics?.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
    return;
  }

  init();
})();
