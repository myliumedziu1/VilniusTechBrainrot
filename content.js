// === CANVAS kvadratai ===
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9998';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawSquares() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(x, y, 10, 10);
  }
}
setInterval(drawSquares, 700);

// === Žinutės ekrane ===
const messages = [
  "Įrašyta sistemoje, bet ne atminty.",
  "Mygtukas – šiuolaikinis pasitikėjimas.",
  "Kodas yra poezija be skaitytojo.",
  "Gal tu čia esi testuojamas?",
  "Naršymas – tai meditacija algoritmui."
];

function spawnMessage() {
  const msg = document.createElement('div');
  msg.innerText = messages[Math.floor(Math.random() * messages.length)];
  msg.style.position = 'fixed';
  msg.style.top = `${Math.random() * 80 + 10}%`;
  msg.style.left = `${Math.random() * 80 + 10}%`;
  msg.style.background = 'white';
  msg.style.border = '1px solid black';
  msg.style.padding = '5px 10px';
  msg.style.fontFamily = 'monospace';
  msg.style.fontSize = '0.9rem';
  msg.style.zIndex = '9999';
  msg.style.opacity = '0.8';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 4000);
}
setInterval(spawnMessage, 10000);

// === Glitch tekstas ===
function glitchText(element) {
  const original = element.innerText;
  const glitch = original.split('').map(c => {
    return Math.random() > 0.8 ? String.fromCharCode(33 + Math.random() * 94) : c;
  }).join('');
  element.innerText = glitch;
  setTimeout(() => {
    element.innerText = original;
  }, 500);
}
setInterval(() => {
  document.querySelectorAll('h1, h2, h3').forEach(el => {
    if (Math.random() > 0.7) glitchText(el);
  });
}, 3000);

// === Pelės taškai ===
document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.style.position = 'fixed';
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
  dot.style.width = '6px';
  dot.style.height = '6px';
  dot.style.background = 'black';
  dot.style.borderRadius = '2px';
  dot.style.zIndex = '9999';
  dot.style.pointerEvents = 'none';
  dot.style.opacity = '0.5';
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 500);
});

// === Teksto maišymas ===
function shuffleTextContent() {
  const allElements = document.querySelectorAll('p, span, h1, h2, h3, li, a');
  allElements.forEach(el => {
    if (el.innerText && el.innerText.length > 3) {
      const words = el.innerText.split(' ');
      const shuffled = words.map(word => {
        if (word.length < 4) return word;
        const chars = word.split('');
        for (let i = chars.length - 2; i > 0; i--) {
          const j = Math.floor(Math.random() * (i - 1)) + 1;
          [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
      }).join(' ');
      el.innerText = shuffled;
    }
  });
}
setInterval(shuffleTextContent, 15000);

// === Ilgo laikymo išnykimas ===
let hoverTarget = null;
let hoverTimeout = null;

document.body.addEventListener('mouseover', (e) => {
  const el = e.target;
  if (hoverTarget !== el) {
    clearTimeout(hoverTimeout);
    hoverTarget = el;

    hoverTimeout = setTimeout(() => {
      el.style.transition = 'opacity 4s';
      el.style.opacity = '0.05';
      setTimeout(() => {
        el.style.display = 'none';
      }, 4000);
    }, 2000);
  }
});

document.body.addEventListener('mouseout', () => {
  clearTimeout(hoverTimeout);
  hoverTarget = null;
});

// === Spalvų keitimas pagal dieną ===
const day = new Date().getDay();
const borderColors = ['black', 'green', 'blue', 'orange', 'purple', 'red', 'gray'];
document.querySelectorAll('button, a, input, div').forEach(el => {
  el.style.borderColor = borderColors[day];
  el.style.borderWidth = '1px';
  el.style.borderStyle = 'solid';
});

// === Brainrot video ===
function randomVideo() {
  const vids = window.brainrotVideos || [];
  return vids.length ? vids[Math.floor(Math.random() * vids.length)] : '';
}

setTimeout(() => {
  const targets = document.querySelectorAll('div, section, article, aside');
  targets.forEach((el, index) => {
    if (index % 5 === 0) {
      const video = document.createElement('video');
      video.src = randomVideo();
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.style.position = 'absolute';
      video.style.top = '0';
      video.style.left = '0';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      video.style.zIndex = '100000';
      video.style.opacity = '1';
      el.style.position = 'relative';
      el.appendChild(video);
    }
  });
}, 3000);

// === Galutinis išnykimas + countdown + reload ===
setTimeout(() => {
  document.body.querySelectorAll('*').forEach(el => {
    if (el !== document.body && el !== document.documentElement) {
      el.style.transition = 'opacity 120s';
      el.style.opacity = '0';
    }
  });

  setTimeout(() => {
    const countdownEl = document.createElement('div');
    countdownEl.style.position = 'fixed';
    countdownEl.style.top = '50%';
    countdownEl.style.left = '50%';
    countdownEl.style.transform = 'translate(-50%, -50%)';
    countdownEl.style.fontSize = '4rem';
    countdownEl.style.fontFamily = 'monospace';
    countdownEl.style.color = 'black';
    countdownEl.style.zIndex = '99999';
    countdownEl.style.background = 'white';
    countdownEl.style.padding = '20px 40px';
    countdownEl.style.borderRadius = '12px';
    countdownEl.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
    document.body.appendChild(countdownEl);

    let count = 3;
    countdownEl.innerText = count;
    const countdown = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(countdown);
        location.reload();
      } else {
        countdownEl.innerText = count;
      }
    }, 1000);
  }, 122000); // 2 minutes fade + 2s pause
}, 15000); // start after 15s
