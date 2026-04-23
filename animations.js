// Paradis Aquatique - Animations supplémentaires
document.addEventListener('DOMContentLoaded', function() {
  
  // Vérifier si on est sur la page avec les animations du paradis
  const paradiseSection = document.querySelector('.hero-paradis');
  if (!paradiseSection) return;
  
  // Fonction helper pour ajouter l'animation delay
  const setAnimationDelays = (selector, baseDelay = 0.1) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.style.animationDelay = (index * baseDelay) + 's';
    });
  };

  // Application des délais
  setAnimationDelays('.vine-segment', 0.1);
  setAnimationDelays('.flower-top-left, .flower-top-right, .flower-top-center, .flower-bottom-left, .flower-bottom-right, .flower-bottom-center, .flower-mid-left, .flower-mid-left-2, .flower-mid-right, .flower-mid-right-2', 0.15);
  setAnimationDelays('.floating-flower', 0.3);
  setAnimationDelays('.climbing-vine', 0.5);
  
  // Effet de brillance aléatoire sur les étoiles
  const stars = document.querySelector('.stars');
  if (stars) {
    const intervalId = setInterval(() => {
      stars.style.opacity = (Math.random() * 0.4 + 0.5).toString();
      setTimeout(() => {
        stars.style.opacity = '0.6';
      }, 500);
    }, 3000);
    
    // Nettoyage si la page est quittée (bonne pratique)
    window.addEventListener('beforeunload', () => {
      clearInterval(intervalId);
    });
  }
  
  // Clic sur le badge - effet magique
  const badge = document.querySelector('.badge');
  if (badge) {
    badge.addEventListener('click', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
      
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 1.5rem;
        pointer-events: none;
        animation: sparkleClick 0.6s ease-out forwards;
        z-index: 100;
      `;
      this.style.position = 'relative';
      this.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.remove();
        }
      }, 600);
    });
  }
  
  // Animation au survol du cadre (désactivée si réduction de mouvement préférée)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const frame = document.querySelector('.hand-drawn-frame');
  
  if (frame && !prefersReducedMotion.matches) {
    const birds = document.querySelectorAll('.bird');
    
    frame.addEventListener('mouseenter', function() {
      birds.forEach((bird, index) => {
        bird.style.animationDuration = (3 + index) + 's';
      });
    });
    
    frame.addEventListener('mouseleave', function() {
      birds.forEach((bird) => {
        bird.style.animationDuration = '5s';
      });
    });
  }
  
  console.log('🌟 Paradis Aquatique chargé ! Bienvenue au PORO WATERPARK 🌟');
});

// Ajout de l'animation sparkleClick
if (!document.querySelector('#sparkle-animation-style')) {
  const style = document.createElement('style');
  style.id = 'sparkle-animation-style';
  style.textContent = `
    @keyframes sparkleClick {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -80px) scale(1.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}