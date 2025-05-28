document.addEventListener("DOMContentLoaded", () => {
    // STARFIELD SETUP
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');
  let stars    = [];

  // resize & initialize star positions
  function initStars() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 8000); 
    for (let i = 0; i < count; i++) {
      stars.push({
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height,
        r:      Math.random() * 1.2 + 0.3,            // radius
        alpha:  Math.random(),                        // initial opacity
        dAlpha: (Math.random() * 0.02) + 0.005         // fade speed
      });
    }
  }

  // draw & twinkle
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.dAlpha;
      if (s.alpha <= 0 || s.alpha >= 1) s.dAlpha *= -1;  // reverse fade
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  // handle resize
  window.addEventListener('resize', () => {
    initStars();
  });

  // go!
  initStars();
  drawStars();
});