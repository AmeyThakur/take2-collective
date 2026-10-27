(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const scenes = document.querySelectorAll('[data-therapy-animation]');
  if (!scenes.length) return;

  const start = (scene) => {
    const layers = scene.querySelectorAll('.therapy-base, .therapy-thought');
    Promise.all(Array.from(layers, (image) => image.decode().catch(() => {})))
      .then(() => {
        scene.classList.add('motion-ready');
        requestAnimationFrame(() => scene.classList.add('is-playing'));
      });
  };

  if (!('IntersectionObserver' in window)) {
    scenes.forEach(start);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      start(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  scenes.forEach((scene) => observer.observe(scene));
})();
