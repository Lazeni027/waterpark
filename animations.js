// ========== WATERPARK MODERN ANIMATIONS - MOBILE & TABLETTE ==========

// 1. EFFET VAGUE DYNAMIQUE AU TOUCHER
function createWaveEffect(x, y) {
  // Onde principale
  const wave = document.createElement('div');
  wave.style.position = 'fixed';
  wave.style.left = x + 'px';
  wave.style.top = y + 'px';
  wave.style.width = '0px';
  wave.style.height = '0px';
  wave.style.borderRadius = '50%';
  wave.style.background = 'radial-gradient(circle, rgba(0,119,190,0.4), rgba(46,189,110,0.2))';
  wave.style.transform = 'translate(-50%, -50%)';
  wave.style.pointerEvents = 'none';
  wave.style.zIndex = '9999';
  wave.style.animation = 'waterWave 0.6s ease-out forwards';
  document.body.appendChild(wave);
  
  // Petites gouttes qui éclaboussent
  for(let i = 0; i < 8; i++) {
    const drop = document.createElement('div');
    drop.style.position = 'fixed';
    drop.style.width = '4px';
    drop.style.height = '4px';
    drop.style.backgroundColor = '#0077BE';
    drop.style.borderRadius = '50%';
    drop.style.left = x + 'px';
    drop.style.top = y + 'px';
    drop.style.pointerEvents = 'none';
    drop.style.zIndex = '9999';
    const angle = (i * 45) * Math.PI / 180;
    const distance = 20 + Math.random() * 30;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    drop.style.animation = `splashDrop 0.5s ease-out forwards`;
    drop.style.setProperty('--dx', dx + 'px');
    drop.style.setProperty('--dy', dy + 'px');
    document.body.appendChild(drop);
    
    setTimeout(() => drop.remove(), 500);
  }
  
  setTimeout(() => wave.remove(), 600);
}

// Appliquer l'effet vague sur tous les éléments cliquables
document.querySelectorAll('.card, .pack-item, .btn-wa, .wa-float, .hero-simple').forEach(el => {
  el.addEventListener('click', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width/2);
    const y = e.clientY || (rect.top + rect.height/2);
    createWaveEffect(x, y);
  });
  
  // Pour le toucher mobile
  el.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    createWaveEffect(touch.clientX, touch.clientY);
  });
});

// 2. BULLES D'EAU QUI MONTENT (version améliorée)
function createWaterBubble() {
  const bubble = document.createElement('div');
  const size = 15 + Math.random() * 35;
  bubble.style.position = 'fixed';
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.borderRadius = '50%';
  bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(0,119,190,0.3))';
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.bottom = '-50px';
  bubble.style.pointerEvents = 'none';
  bubble.style.zIndex = '997';
  bubble.style.boxShadow = 'inset -2px -2px 5px rgba(0,0,0,0.1), 0 0 5px rgba(0,119,190,0.3)';
  bubble.style.animation = `bubbleRise ${3 + Math.random() * 4}s linear forwards`;
  document.body.appendChild(bubble);
  
  // Effet de brillance sur la bulle
  const shine = document.createElement('div');
  shine.style.position = 'absolute';
  shine.style.width = '30%';
  shine.style.height = '30%';
  shine.style.borderRadius = '50%';
  shine.style.backgroundColor = 'rgba(255,255,255,0.8)';
  shine.style.top = '20%';
  shine.style.left = '20%';
  bubble.appendChild(shine);
  
  setTimeout(() => bubble.remove(), 7000);
}

// Bulles fréquentes pour ambiance aquatique
setInterval(createWaterBubble, 800);

// 3. PARTICULES DE JOIE (couleurs du waterpark)
function createJoyParticle() {
  const colors = ['#0077BE', '#FFC107', '#2EBD6E', '#FF8C42', '#25D366'];
  const particle = document.createElement('div');
  const size = 6 + Math.random() * 12;
  particle.style.position = 'fixed';
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.borderRadius = '50%';
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = Math.random() * window.innerHeight + 'px';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '996';
  particle.style.animation = `joyFloat ${2 + Math.random() * 3}s ease-out forwards`;
  document.body.appendChild(particle);
  
  setTimeout(() => particle.remove(), 3000);
}

// Lancer des particules de joie régulièrement
setInterval(createJoyParticle, 500);

// 4. EFFET TAPOTEZ POUR JOUER (message ludique)
function showTapMessage() {
  const message = document.createElement('div');
  const messages = [
    '💧 TAPOTEZ POUR ÉCLABOUSSER !',
    '🏊 PLONGEZ DANS LE FUN !',
    '🎉 JOIE GARANTIE !',
    '💦 FAITES DES VAGUES !',
    '⭐ VOUS AIMEZ ? TAPOTEZ !'
  ];
  message.innerHTML = messages[Math.floor(Math.random() * messages.length)];
  message.style.position = 'fixed';
  message.style.bottom = '100px';
  message.style.left = '50%';
  message.style.transform = 'translateX(-50%)';
  message.style.backgroundColor = '#0077BE';
  message.style.color = '#FFC107';
  message.style.padding = '12px 24px';
  message.style.borderRadius = '50px';
  message.style.fontSize = '14px';
  message.style.fontWeight = 'bold';
  message.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
  message.style.zIndex = '10000';
  message.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
  message.style.animation = 'floatMessage 3s ease-out forwards';
  message.style.whiteSpace = 'nowrap';
  document.body.appendChild(message);
  
  setTimeout(() => message.remove(), 3000);
}

// Afficher un message après quelques secondes
setTimeout(showTapMessage, 3000);
setInterval(() => {
  if(Math.random() > 0.7) showTapMessage();
}, 20000);

// 5. SURVOL/CLIC SUR LES CARTES - EFFET ÉCLAT
document.querySelectorAll('.card').forEach(card => {
  const originalTransform = card.style.transform;
  
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.98)';
    card.style.transition = 'transform 0.1s ease';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 100);
    
    // Ajouter des étoiles autour
    for(let i = 0; i < 6; i++) {
      const star = document.createElement('div');
      star.innerHTML = '✦';
      star.style.position = 'fixed';
      star.style.color = '#FFC107';
      star.style.fontSize = '16px';
      star.style.left = (event.clientX || window.innerWidth/2) + 'px';
      star.style.top = (event.clientY || window.innerHeight/2) + 'px';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '10000';
      const angle = (i * 60) * Math.PI / 180;
      star.style.animation = `starBurst 0.6s ease-out forwards`;
      star.style.setProperty('--dx', Math.cos(angle) * 50 + 'px');
      star.style.setProperty('--dy', Math.sin(angle) * 50 + 'px');
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 600);
    }
  });
});

// 6. COMPTEUR DE BONHEUR INTERACTIF
let happinessLevel = 0;
const happinessBar = document.createElement('div');
happinessBar.style.position = 'fixed';
happinessBar.style.bottom = '20px';
happinessBar.style.left = '20px';
happinessBar.style.right = '20px';
happinessBar.style.height = '8px';
happinessBar.style.backgroundColor = 'rgba(0,0,0,0.1)';
happinessBar.style.borderRadius = '10px';
happinessBar.style.zIndex = '1000';
happinessBar.style.backdropFilter = 'blur(10px)';
document.body.appendChild(happinessBar);

const happinessFill = document.createElement('div');
happinessFill.style.height = '100%';
happinessFill.style.width = '0%';
happinessFill.style.backgroundColor = '#2EBD6E';
happinessFill.style.borderRadius = '10px';
happinessFill.style.transition = 'width 0.5s ease';
happinessBar.appendChild(happinessFill);

const happinessText = document.createElement('div');
happinessText.style.position = 'fixed';
happinessText.style.bottom = '35px';
happinessText.style.left = '20px';
happinessText.style.color = '#1A2C3E';
happinessText.style.fontSize = '12px';
happinessText.style.fontWeight = 'bold';
happinessText.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
happinessText.style.zIndex = '1001';
happinessText.innerHTML = '😊 BONHEUR';
document.body.appendChild(happinessText);

function increaseHappiness(amount = 5) {
  happinessLevel = Math.min(100, happinessLevel + amount);
  happinessFill.style.width = happinessLevel + '%';
  
  if(happinessLevel === 100) {
    happinessFill.style.backgroundColor = '#FFC107';
    happinessText.innerHTML = '🎉 BONHEUR MAXIMUM ! 🎉';
    happinessText.style.animation = 'bounce 0.5s ease';
    
    // Feu d'artifice de particules
    for(let i = 0; i < 30; i++) {
      setTimeout(() => createJoyParticle(), i * 50);
    }
  } else if(happinessLevel > 0 && happinessLevel % 20 === 0) {
    happinessText.style.transform = 'scale(1.1)';
    setTimeout(() => {
      happinessText.style.transform = 'scale(1)';
    }, 200);
  }
}

// Chaque interaction augmente le bonheur
document.querySelectorAll('.card, .pack-item, .btn-wa, .wa-float').forEach(el => {
  el.addEventListener('click', () => increaseHappiness(3));
  el.addEventListener('touchstart', () => increaseHappiness(3));
});

// 7. EFFET DE BRILLANCE SUR LES PACKS
document.querySelectorAll('.pack-item').forEach(pack => {
  pack.addEventListener('click', () => {
    pack.style.backgroundColor = '#FFF6E5';
    setTimeout(() => {
      pack.style.backgroundColor = 'white';
    }, 200);
  });
});

// 8. ONDES DE COULEUR SUR LE HEADER
const header = document.querySelector('.header-classic');
if(header) {
  setInterval(() => {
    header.style.transition = 'box-shadow 0.5s ease';
    header.style.boxShadow = '0 4px 20px rgba(0,119,190,0.3)';
    setTimeout(() => {
      header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
    }, 500);
  }, 4000);
}

// 9. EFFET "SPLASH" SUR LE BOUTON WHATSAPP FLOATING
const floatBtnWA = document.querySelector('.wa-float');
if(floatBtnWA) {
  setInterval(() => {
    floatBtnWA.style.animation = 'bubblePop 1s ease-in-out';
    setTimeout(() => {
      floatBtnWA.style.animation = '';
    }, 1000);
  }, 5000);
}

// 10. MESSAGE SECRET WATERPARK
let secretTyped = '';
document.addEventListener('keydown', (e) => {
  secretTyped += e.key.toLowerCase();
  if(secretTyped.includes('wave') || secretTyped.includes('vague')) {
    for(let i = 0; i < 20; i++) {
      setTimeout(() => createWaterBubble(), i * 100);
    }
    secretTyped = '';
  }
  if(secretTyped.length > 10) secretTyped = '';
});

// Pour mobile - détecter le shake (secouer le téléphone)
let lastShake = 0;
window.addEventListener('devicemotion', (e) => {
  const acceleration = e.accelerationIncludingGravity;
  const shake = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);
  const now = Date.now();
  if(shake > 25 && now - lastShake > 3000) {
    lastShake = now;
    // Secouer le téléphone = vague géante !
    for(let i = 0; i < 15; i++) {
      setTimeout(() => createWaterBubble(), i * 50);
    }
    increaseHappiness(10);
    
    const shakeMsg = document.createElement('div');
    shakeMsg.innerHTML = '🌊 SUPER VAGUE ! +10 BONHEUR 🌊';
    shakeMsg.style.position = 'fixed';
    shakeMsg.style.top = '50%';
    shakeMsg.style.left = '50%';
    shakeMsg.style.transform = 'translate(-50%, -50%)';
    shakeMsg.style.backgroundColor = '#0077BE';
    shakeMsg.style.color = '#FFC107';
    shakeMsg.style.padding = '15px 30px';
    shakeMsg.style.borderRadius = '50px';
    shakeMsg.style.fontWeight = 'bold';
    shakeMsg.style.zIndex = '10001';
    shakeMsg.style.animation = 'floatMessage 2s ease-out forwards';
    document.body.appendChild(shakeMsg);
    setTimeout(() => shakeMsg.remove(), 2000);
  }
});

// 11. AJOUTER TOUTES LES ANIMATIONS CSS
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  @keyframes waterWave {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.8;
    }
    100% {
      width: 120px;
      height: 120px;
      opacity: 0;
    }
  }
  
  @keyframes splashDrop {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    100% {
      transform: translate(var(--dx), var(--dy));
      opacity: 0;
    }
  }
  
  @keyframes bubbleRise {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-120vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes joyFloat {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotate(180deg);
      opacity: 0;
    }
  }
  
  @keyframes floatMessage {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    20% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    80% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
  
  @keyframes starBurst {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(var(--dx), var(--dy)) scale(0);
      opacity: 0;
    }
  }
  
  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  
  @keyframes bubblePop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); box-shadow: 0 0 20px rgba(37,211,102,0.5); }
  }
  
  /* Animations d'entrée pour les cartes */
  .card {
    animation: cardEntry 0.6s ease-out backwards;
    animation-delay: calc(var(--order, 0) * 0.1s);
  }
  
  @keyframes cardEntry {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Assigner des délais différents aux cartes */
  .card:nth-child(1) { --order: 1; }
  .card:nth-child(2) { --order: 2; }
  .card:nth-child(3) { --order: 3; }
  .card:nth-child(4) { --order: 4; }
  .card:nth-child(5) { --order: 5; }
  
  /* Animation de pulsation pour les prix */
  .price {
    animation: pricePulse 2s ease-in-out infinite;
  }
  
  @keyframes pricePulse {
    0%, 100% { transform: scale(1); background: #FFF2CC; }
    50% { transform: scale(1.05); background: #FFE484; }
  }
  
  /* Effet de brillance sur les boutons au toucher */
  .btn-wa, .wa-float {
    transition: all 0.3s ease;
  }
  
  .btn-wa:active, .wa-float:active {
    transform: scale(0.95);
  }
  
  /* Améliorations tactiles mobiles */
  @media (max-width: 780px) {
    .card, .pack-item, .btn-wa {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }
    
    .card:active {
      transform: scale(0.98);
      transition: transform 0.05s;
    }
  }
`;
document.head.appendChild(animationStyles);

console.log('🌊 WATERPARK MODERN ANIMATIONS ACTIVÉES ! Amusez-vous bien sur mobile ! 💧🎉');







// ========== JEU WATERPARK : ATTRAPE LES GOUTTES ! ==========

// 1. CRÉER LE BOUTON DU JEU
const gameButton = document.createElement('button');
gameButton.innerHTML = '🎮 JOUER 🎮';
gameButton.style.position = 'fixed';
gameButton.style.bottom = '20px';
gameButton.style.left = '50%';
gameButton.style.transform = 'translateX(-50%)';
gameButton.style.backgroundColor = '#FF8C42';
gameButton.style.color = 'white';
gameButton.style.border = 'none';
gameButton.style.padding = '12px 25px';
gameButton.style.borderRadius = '50px';
gameButton.style.fontSize = '16px';
gameButton.style.fontWeight = 'bold';
gameButton.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
gameButton.style.zIndex = '1000';
gameButton.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
gameButton.style.cursor = 'pointer';
gameButton.style.animation = 'pulse 2s infinite';
document.body.appendChild(gameButton);

// 2. VARIABLES DU JEU
let gameActive = false;
let score = 0;
let drops = [];
let gameInterval;

// 3. CRÉER L'INTERFACE DU JEU
function createGameUI() {
  // Masquer le bouton jouer
  gameButton.style.display = 'none';
  
  // Créer le conteneur du jeu
  const gameContainer = document.createElement('div');
  gameContainer.id = 'waterGame';
  gameContainer.style.position = 'fixed';
  gameContainer.style.top = '0';
  gameContainer.style.left = '0';
  gameContainer.style.width = '100%';
  gameContainer.style.height = '100%';
  gameContainer.style.backgroundColor = 'rgba(0, 119, 190, 0.9)';
  gameContainer.style.zIndex = '10000';
  gameContainer.style.display = 'flex';
  gameContainer.style.flexDirection = 'column';
  gameContainer.style.alignItems = 'center';
  gameContainer.style.justifyContent = 'center';
  gameContainer.style.backdropFilter = 'blur(5px)';
  document.body.appendChild(gameContainer);
  
  // Score
  const scoreDisplay = document.createElement('div');
  scoreDisplay.id = 'gameScore';
  scoreDisplay.innerHTML = '💧 SCORE: 0 💧';
  scoreDisplay.style.position = 'absolute';
  scoreDisplay.style.top = '50px';
  scoreDisplay.style.left = '20px';
  scoreDisplay.style.backgroundColor = 'white';
  scoreDisplay.style.padding = '10px 20px';
  scoreDisplay.style.borderRadius = '50px';
  scoreDisplay.style.fontWeight = 'bold';
  scoreDisplay.style.fontSize = '18px';
  scoreDisplay.style.color = '#0077BE';
  scoreDisplay.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  gameContainer.appendChild(scoreDisplay);
  
  // Timer
  const timerDisplay = document.createElement('div');
  timerDisplay.id = 'gameTimer';
  timerDisplay.innerHTML = '⏱️ TEMPS: 30s ⏱️';
  timerDisplay.style.position = 'absolute';
  timerDisplay.style.top = '50px';
  timerDisplay.style.right = '20px';
  timerDisplay.style.backgroundColor = 'white';
  timerDisplay.style.padding = '10px 20px';
  timerDisplay.style.borderRadius = '50px';
  timerDisplay.style.fontWeight = 'bold';
  timerDisplay.style.fontSize = '18px';
  timerDisplay.style.color = '#0077BE';
  timerDisplay.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  gameContainer.appendChild(timerDisplay);
  
  // Instructions
  const instructions = document.createElement('div');
  instructions.innerHTML = '👆 TAPOTE SUR LES GOUTTES BLEUES ! 👆';
  instructions.style.position = 'absolute';
  instructions.style.bottom = '50px';
  instructions.style.left = '50%';
  instructions.style.transform = 'translateX(-50%)';
  instructions.style.backgroundColor = '#FFC107';
  instructions.style.padding = '10px 20px';
  instructions.style.borderRadius = '50px';
  instructions.style.fontWeight = 'bold';
  instructions.style.fontSize = '14px';
  instructions.style.color = '#1A2C3E';
  instructions.style.whiteSpace = 'nowrap';
  gameContainer.appendChild(instructions);
  
  // Bouton quitter
  const quitButton = document.createElement('button');
  quitButton.innerHTML = '❌ QUITTER';
  quitButton.style.position = 'absolute';
  quitButton.style.bottom = '20px';
  quitButton.style.right = '20px';
  quitButton.style.backgroundColor = '#FF4444';
  quitButton.style.color = 'white';
  quitButton.style.border = 'none';
  quitButton.style.padding = '10px 20px';
  quitButton.style.borderRadius = '50px';
  quitButton.style.fontWeight = 'bold';
  quitButton.style.cursor = 'pointer';
  quitButton.addEventListener('click', endGame);
  gameContainer.appendChild(quitButton);
  
  return gameContainer;
}

// 4. CRÉER UNE GOUTTE À ATTRAPER
function createGameDrop() {
  const drop = document.createElement('div');
  drop.className = 'gameDrop';
  const size = 30 + Math.random() * 20;
  drop.style.position = 'absolute';
  drop.style.width = size + 'px';
  drop.style.height = size + 'px';
  drop.style.background = 'radial-gradient(circle at 30% 30%, #0077BE, #2EBD6E)';
  drop.style.borderRadius = '50%';
  drop.style.left = Math.random() * (window.innerWidth - 80) + 'px';
  drop.style.top = '-50px';
  drop.style.cursor = 'pointer';
  drop.style.zIndex = '10001';
  drop.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
  drop.style.transition = 'transform 0.1s ease';
  
  // Ajouter un emoji eau à l'intérieur
  const emoji = document.createElement('div');
  emoji.innerHTML = '💧';
  emoji.style.fontSize = (size * 0.6) + 'px';
  emoji.style.position = 'absolute';
  emoji.style.top = '50%';
  emoji.style.left = '50%';
  emoji.style.transform = 'translate(-50%, -50%)';
  drop.appendChild(emoji);
  
  // Animation de chute
  const duration = 2 + Math.random() * 2;
  drop.style.animation = `dropFall ${duration}s linear forwards`;
  
  // Au clic sur la goutte
  drop.addEventListener('click', (e) => {
    e.stopPropagation();
    catchDrop(drop);
  });
  
  drop.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    catchDrop(drop);
  });
  
  return drop;
}

// 5. ATTRAper UNE GOUTTE
function catchDrop(drop) {
  if(!gameActive) return;
  
  score++;
  const scoreDisplay = document.getElementById('gameScore');
  scoreDisplay.innerHTML = `💧 SCORE: ${score} 💧`;
  
  // Effet visuel
  drop.style.transform = 'scale(0)';
  drop.style.transition = 'transform 0.1s ease';
  
  // Effet d'éclaboussure
  createSplashEffect(drop.getBoundingClientRect().left, drop.getBoundingClientRect().top);
  
  setTimeout(() => {
    if(drop.parentNode) drop.remove();
  }, 100);
  
  // Ajouter +1 bonheur au jeu principal
  if(typeof increaseHappiness === 'function') {
    increaseHappiness(1);
  }
}

// 6. EFFET D'ÉCLABOUSSURE
function createSplashEffect(x, y) {
  for(let i = 0; i < 8; i++) {
    const splash = document.createElement('div');
    splash.style.position = 'fixed';
    splash.style.left = x + 15 + 'px';
    splash.style.top = y + 15 + 'px';
    splash.style.width = '4px';
    splash.style.height = '4px';
    splash.style.backgroundColor = '#0077BE';
    splash.style.borderRadius = '50%';
    splash.style.pointerEvents = 'none';
    splash.style.zIndex = '10002';
    const angle = (i * 45) * Math.PI / 180;
    const distance = 30;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    splash.style.animation = `splashOut 0.5s ease-out forwards`;
    splash.style.setProperty('--dx', dx + 'px');
    splash.style.setProperty('--dy', dy + 'px');
    document.getElementById('waterGame')?.appendChild(splash);
    setTimeout(() => splash.remove(), 500);
  }
}

// 7. LANCER LE JEU
function startGame() {
  gameActive = true;
  score = 0;
  const gameContainer = createGameUI();
  
  let timeLeft = 30;
  const timerDisplay = document.getElementById('gameTimer');
  
  // Créer des gouttes toutes les 0.8 secondes
  gameInterval = setInterval(() => {
    if(gameActive) {
      const drop = createGameDrop();
      gameContainer.appendChild(drop);
      drops.push(drop);
      
      // Nettoyer les gouttes qui sont sorties
      setTimeout(() => {
        if(drop.parentNode) drop.remove();
        drops = drops.filter(d => d.parentNode);
      }, 3000);
    }
  }, 800);
  
  // Timer
  const timerInterval = setInterval(() => {
    if(gameActive) {
      timeLeft--;
      timerDisplay.innerHTML = `⏱️ TEMPS: ${timeLeft}s ⏱️`;
      
      if(timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// 8. FIN DU JEU
function endGame() {
  gameActive = false;
  clearInterval(gameInterval);
  
  const gameContainer = document.getElementById('waterGame');
  if(gameContainer) {
    // Afficher le score final
    gameContainer.innerHTML = '';
    gameContainer.style.justifyContent = 'center';
    gameContainer.style.alignItems = 'center';
    
    const finalScore = document.createElement('div');
    finalScore.innerHTML = `
      <div style="text-align: center; background: white; padding: 40px; border-radius: 30px; margin: 20px;">
        <div style="font-size: 64px; margin-bottom: 20px;">💧</div>
        <div style="font-size: 32px; font-weight: bold; color: #0077BE; margin-bottom: 10px;">SCORE FINAL</div>
        <div style="font-size: 48px; font-weight: bold; color: #FF8C42;">${score}</div>
        <div style="font-size: 18px; color: #1A2C3E; margin: 20px 0;">
          ${score >= 30 ? '🏆 CHAMPION ! 🏆' : (score >= 20 ? '⭐ SUPER ! ⭐' : (score >= 10 ? '👍 BIEN JOUE ! 👍' : '💪 ENCORE UN ESSAI ? 💪'))}
        </div>
        <button id="replayGame" style="background: #2EBD6E; color: white; border: none; padding: 12px 30px; border-radius: 50px; font-size: 18px; font-weight: bold; margin: 10px; cursor: pointer;">🎮 REJOUER</button>
        <button id="closeGame" style="background: #FF8C42; color: white; border: none; padding: 12px 30px; border-radius: 50px; font-size: 18px; font-weight: bold; margin: 10px; cursor: pointer;">❌ FERMER</button>
      </div>
    `;
    gameContainer.appendChild(finalScore);
    
    document.getElementById('replayGame')?.addEventListener('click', () => {
      gameContainer.remove();
      startGame();
    });
    
    document.getElementById('closeGame')?.addEventListener('click', () => {
      gameContainer.remove();
      gameButton.style.display = 'block';
    });
  }
  
  gameButton.style.display = 'block';
}

// 9. AJOUTER LES ANIMATIONS CSS
const gameStyles = document.createElement('style');
gameStyles.textContent = `
  @keyframes dropFall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes splashOut {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(var(--dx), var(--dy)) scale(0);
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.1);
    }
  }
  
  .gameDrop {
    animation: dropFall linear forwards;
  }
  
  .gameDrop:hover {
    transform: scale(1.1);
  }
  
  .gameDrop:active {
    transform: scale(0.9);
  }
`;
document.head.appendChild(gameStyles);

// 10. LANCER LE JEU AU CLIC
gameButton.addEventListener('click', startGame);
gameButton.addEventListener('touchstart', (e) => {
  e.preventDefault();
  startGame();
});

console.log('🎮 JEU WATERPARK PRÊT ! Cliquez sur JOUER !');