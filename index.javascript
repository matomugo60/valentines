const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

let noClicks = 0;
let scale = 1;

yesBtn.addEventListener('click', () => {
  message.style.display = 'block';
  launchFireworks();
});

noBtn.addEventListener('click', () => {
  noClicks++;
  scale -= 0.15;
  noBtn.style.transform = `scale(${scale})`;

  if (noClicks >= 5) {
    noBtn.style.display = 'none';
  }
});

function launchFireworks() {
  for (let i = 0; i < 15; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }
}

// Floating hearts generator
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 400);
