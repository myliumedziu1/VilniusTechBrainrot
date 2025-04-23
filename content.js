// Canvas kvadratai

const canvas = document.createElement('canvas');

canvas.style.position = 'fixed';

canvas.style.top = 0;

canvas.style.left = 0;

canvas.style.width = '100vw';

canvas.style.height = '100vh';

canvas.style.pointerEvents = 'none';

canvas.style.zIndex = 9998;

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



// Žinutės

const messages = [

  "Įrašyta sistemoje, bet ne atminty.",

  "Mygtukas – šiuolaikinis pasitikėjimas.",

  "Kodas yra poezija be skaitytojo.",

  "Gal tu čia esi testuojamas?",

  "Naršymas – tai meditacija algoritmui.",

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

  msg.style.zIndex = 9999;

  msg.style.opacity = '0.8';

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);

}

setInterval(spawnMessage, 10000);



// Glitch text

function glitchText(element) {

  const original = element.innerText;

  const glitch = original.split('').map(c => {

    return Math.random() > 0.8 ? String.fromCharCode(33 + Math.random() * 94) : c;

  }).join('');

  element.innerText = glitch;

  setTimeout(() => { element.innerText = original; }, 500);

}

setInterval(() => {

  document.querySelectorAll('h1, h2, h3').forEach(h => {

    if (Math.random() > 0.7) glitchText(h);

  });

}, 3000);



// Cursor trail

document.addEventListener('mousemove', (e) => {

  const dot = document.createElement('div');

  dot.style.position = 'fixed';

  dot.style.left = `${e.pageX}px`;

  dot.style.top = `${e.pageY}px`;

  dot.style.width = '6px';

  dot.style.height = '6px';

  dot.style.background = 'black';

  dot.style.borderRadius = '2px';

  dot.style.zIndex = 9999;

  dot.style.pointerEvents = 'none';

  dot.style.opacity = '0.5';

  document.body.appendChild(dot);

  setTimeout(() => dot.remove(), 500);

});



// Minimalistiniai "meniniai bugai"

setInterval(() => {

  const all = document.querySelectorAll('div, section, article');

  if (Math.random() > 0.85) {

    const el = all[Math.floor(Math.random() * all.length)];

    if (el && el.style.visibility !== 'hidden') {

      el.style.transition = 'opacity 1s';

      el.style.opacity = '0';

      setTimeout(() => {

        el.style.opacity = '1';

      }, 4000);

    }

  }

}, 7000);



// Modulinis spalvų keitimas (pagal savaitės dieną)

const day = new Date().getDay();

const borderColors = ['black', 'red', 'blue', 'green', 'purple', 'orange', 'gray'];

document.querySelectorAll('button, a, input, div').forEach(el => {

  el.style.borderColor = borderColors[day];

  el.style.borderWidth = '1px';

  el.style.borderStyle = 'solid';

});



// Pelės ilgai laikymas -> blukimo efektas











// === NAUJIENŲ SEKCIJOS INTERVENCIJA ===



// Kasdieninės frazės naujienų antraštėms

const dailyWords = [

  "diena", "kava", "pietūs", "eismas", "langas", "oras", "nuotaika", 

  "paskaita", "susitikimas", "projektas", "tyla", "miestas", "ritmas", 

  "laikas", "rytas", "vakaras", "skambutis", "savaitgalis", "draugai", "tvarka"

];



// Funkcija keisti naujienų antraščių tekstą

function alterNewsHeadlines() {

  const headlines = document.querySelectorAll('.news_item .topic');

  headlines.forEach(headline => {

    const original = headline.innerText;

    const words = original.split(' ');

    const changed = words.map(word => {

      return Math.random() > 0.7 ? dailyWords[Math.floor(Math.random() * dailyWords.length)] : word;

    }).join(' ');

    headline.innerText = changed;

    headline.style.opacity = 0;

    headline.style.transition = 'opacity 2s';

    setTimeout(() => {

      headline.style.opacity = 1;

    }, 100);

  });

}



// Glitch efektas

function glitchEffect(element) {

  const original = element.innerText;

  const glitch = original.split('').map(c => {

    return Math.random() > 0.9 ? String.fromCharCode(33 + Math.random() * 94) : c;

  }).join('');

  element.innerText = glitch;

  setTimeout(() => {

    element.innerText = original;

  }, 500);

}



setInterval(() => {

  alterNewsHeadlines();

  const topics = document.querySelectorAll('.news_item .topic');

  topics.forEach(t => {

    if (Math.random() > 0.85) glitchEffect(t);

  });

}, 12000); // kas 12 sekundžių – nauja interpretacija



// Išlikusios kitos funkcijos

// (čia galima būtų prijungti jau esamą content.js turinį, bet čia tik papildymas)





// === BENDRO TEKSTO PERMŪŠIMAS IR DINGIMO EFEKTAS ===



// Teksto transformacija: žodžių raidžių maišymas

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

setInterval(shuffleTextContent, 15000); // kas 15s



// Ilgo pelės laikymo efektas: blunka ir dingsta











// === PATAISYTAS BLUKIMO IR DINGIMO EFEKTAS ===



// Ilgo pelės laikymo efektas: blunka ir dingsta (atnaujintas, be dubliavimo)



  if (!window._hoverTimeout) window._hoverTimeout = null;



  const el = e.target;

  if (window._hoverTarget !== el) {

    clearTimeout(window._hoverTimeout);

    window._hoverTarget = el;



    window._hoverTimeout = setTimeout(() => {

      el.style.transition = 'opacity 2s';

      el.style.opacity = '0.05';

      setTimeout(() => {

        el.style.display = 'none';

      }, 4000); // visiškai išnyksta

    }, 4000); // 2s laikymo efektas

  }

});





});











// === BRAINROT VIDEO EFEKTAS NAUDOJANT SĄRAŠĄ ===

const randomVideo = () => {

  const vids = window.brainrotVideos || [];

  return vids.length ? vids[Math.floor(Math.random() * vids.length)] : '';

};



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







// === PATAISYTAS ILGO LAIKYMO EFEKTAS SU DINGIMU ===

if (!window._hoverTarget) window._hoverTarget = null;

if (!window._hoverTimeout) window._hoverTimeout = null;



document.body.addEventListener('mouseover', (e) => {

  const el = e.target;

  if (window._hoverTarget !== el) {

    clearTimeout(window._hoverTimeout);

    window._hoverTarget = el;



    window._hoverTimeout = setTimeout(() => {

      el.style.transition = 'opacity 2s';

      el.style.opacity = '0.05';

      setTimeout(() => {

        el.style.display = 'none';

      }, 4000);

    }, 4000);

  }

});



document.body.addEventListener('mouseout', () => {

  clearTimeout(window._hoverTimeout);

  window._hoverTarget = null;

});



// === MODULINIS SPALVŲ KEITIMAS IR BRAINROT VIDEO ===



// === MODULINIS SPALVŲ KEITIMAS PAGAL DIENĄ ===

const day = new Date().getDay();

const borderColors = ['black', 'green', 'blue', 'orange', 'purple', 'red', 'gray'];

document.querySelectorAll('button, a, input, div').forEach(el => {

  el.style.borderColor = borderColors[day];

  el.style.borderWidth = '1px';

  el.style.borderStyle = 'solid';

});



// === BRAINROT VIDEO IŠ brainrot_videos.js ===

const randomVideo = () => {

  const vids = window.brainrotVideos || [];

  return vids.length ? vids[Math.floor(Math.random() * vids.length)] : '';

};



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





// === IŠNYKIMAS + COUNTDOWN ===



// === VISŲ ELEMENTŲ IŠNYKIMAS IR PUSLAPIO PERSIKROVIMAS ===

setTimeout(() => {

  document.body.querySelectorAll('*').forEach(el => {

    if (el !== document.body && el !== document.documentElement) {

      el.style.transition = 'opacity 10s';

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

  }, 3500); // kai elementai išnyksta

}, 15000); // paleidimas po 15 sekundžių
