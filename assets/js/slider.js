(function () {
  function createSlider(root) {
    const track = root.querySelector("[data-slider-track]");
    const slides = Array.from(root.querySelectorAll("[data-slider-slide]"));
    const dots = Array.from(root.querySelectorAll("[data-slider-dot]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;
    let timer = null;

    if (!track || slides.length < 2) {
      return;
    }

    function goTo(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = `translateX(calc(-${index * 100}% - ${index}rem))`;
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-current", String(dotIndex === index));
      });
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      if (prefersReducedMotion || timer) {
        return;
      }

      timer = window.setInterval(() => goTo(index + 1), 2000);
    }

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        stop();
        goTo(dotIndex);
      });
    });

    root.addEventListener("pointerenter", stop);
    root.addEventListener("focusin", stop);
    root.addEventListener("pointerleave", start);
    goTo(0);
    start();
  }

  window.SagmtSlider = {
    init() {
      document.querySelectorAll("[data-slider]").forEach(createSlider);
    }
  };
})();
