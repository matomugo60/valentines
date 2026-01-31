const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

let noClicks = 0;
let noScale = 1;
let yesScale = 1;

yesBtn.addEventListener('click', () => {
  // Show message
  message.style.display = 'block';

  // Remove NO button completely
  noBtn.style.display = 'none';

  // Celebration
  launchFireworks();
});

noBtn.addEventListener('click', () => {
  noClicks++;

  // NO button shrinks
  noScale -= 0.15;
  noBtn.style.transform = `scale(${noScale})`;

  // YES button grows confidently
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  // NO button gives up after 5 clicks
  if (noClicks >= 5) {
    noBtn.style.display = 'none';
  }
});

function launchFireworks() {
  for (let i = 0; i < 18; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }
}

// Floating hearts (unchanged, still doing the most)
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 400);
