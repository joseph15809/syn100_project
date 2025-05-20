// script.js

// Grab the Documentation button
const docBtn = document.querySelector('.btn-get-started');

// When glow should start/end (px from button center)
const START_AT = 200;
const FULL_AT  = 600;

function syncPointer(e) {
  // 1Update position vars
  const x  = e.clientX.toFixed(2);
  const y  = e.clientY.toFixed(2);
  const xp = (e.clientX / window.innerWidth).toFixed(2);
  const yp = (e.clientY / window.innerHeight).toFixed(2);

  document.documentElement.style.setProperty('--x',  x);
  document.documentElement.style.setProperty('--y',  y);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--yp', yp);

  // 2Compute distance from pointer to button center
  const rect = docBtn.getBoundingClientRect();
  const dx   = e.clientX - (rect.left + rect.width  * 0.5);
  const dy   = e.clientY - (rect.top  + rect.height * 0.5);
  const dist = Math.hypot(dx, dy);

  // 3Map [START_AT → FULL_AT] to [0 → 1], clamp outside
  let t = (dist - START_AT) / (FULL_AT - START_AT);
  t = Math.max(0, Math.min(1, t));

  // 4Write the glow opacity
  document.documentElement.style.setProperty('--glow-opacity', t.toFixed(2));
}

// listen globally for pointer moves
document.addEventListener('pointermove', syncPointer);
