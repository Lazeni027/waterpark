// Numéro WhatsApp international (Côte d'Ivoire)
const phoneNumber = "225759877030";
const defaultMsg = "Bonjour PORO WATERPARK ! 👋 Je souhaite des informations sur les activités, les packs ou réserver une journée. Merci.";

function openWhatsApp() {
  const encoded = encodeURIComponent(defaultMsg);
  const waLink = `https://wa.me/${phoneNumber}?text=${encoded}`;
  window.open(waLink, '_blank');
}

// Initialisation des boutons WhatsApp
const mainBtn = document.getElementById('whatsappMainBtn');
const floatBtn = document.getElementById('whatsappFloatBtn');
if (mainBtn) mainBtn.addEventListener('click', openWhatsApp);
if (floatBtn) floatBtn.addEventListener('click', openWhatsApp);

// Animation des cartes au chargement
const cards = document.querySelectorAll('.card');
cards.forEach((card, idx) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(12px)';
  setTimeout(() => {
    card.style.transition = 'all 0.4s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, idx * 80);
});








// Paradis Aquatique - Animations supplémentaires
document.addEventListener('DOMContentLoaded', function() {
  
  // Animation des lianes extérieures
  const vineSegments = document.querySelectorAll('.vine-segment');
  vineSegments.forEach((segment, index) => {
    segment.style.animationDelay = (index * 0.1) + 's';
  });
  
  // Animation des fleurs intérieures
  const flowers = document.querySelectorAll('.flower-top-left, .flower-top-right, .flower-top-center, .flower-bottom-left, .flower-bottom-right, .flower-bottom-center, .flower-mid-left, .flower-mid-left-2, .flower-mid-right, .flower-mid-right-2');
  flowers.forEach((flower, index) => {
    flower.style.animationDelay = (index * 0.15) + 's';
  });
  
  // Animation des fleurs flottantes
  const floatingFlowers = document.querySelectorAll('.floating-flower');
  floatingFlowers.forEach((flower, index) => {
    flower.style.animationDelay = (index * 0.3) + 's';
  });
  
  // Animation des lianes grimpantes
  const climbingVines = document.querySelectorAll('.climbing-vine');
  climbingVines.forEach((vine, index) => {
    vine.style.animationDelay = (index * 0.5) + 's';
  });
  
  // Effet de brillance aléatoire sur les étoiles
  const stars = document.querySelector('.stars');
  if (stars) {
    setInterval(() => {
      stars.style.opacity = (Math.random() * 0.4 + 0.5);
      setTimeout(() => {
        stars.style.opacity = '0.6';
      }, 500);
    }, 3000);
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
      
      // Créer une petite étincelle
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.style.position = 'absolute';
      sparkle.style.left = '50%';
      sparkle.style.top = '50%';
      sparkle.style.fontSize = '1.5rem';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.animation = 'sparkleClick 0.6s ease-out forwards';
      this.style.position = 'relative';
      this.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 600);
    });
  }
  
  // Animation au survol du cadre
  const frame = document.querySelector('.hand-drawn-frame');
  if (frame) {
    frame.addEventListener('mouseenter', function() {
      const birds = document.querySelectorAll('.bird');
      birds.forEach((bird, index) => {
        bird.style.animationDuration = (3 + index) + 's';
      });
    });
    
    frame.addEventListener('mouseleave', function() {
      const birds = document.querySelectorAll('.bird');
      birds.forEach((bird, index) => {
        bird.style.animationDuration = (5 + index) + 's';
      });
    });
  }
  
  console.log('🌟 Paradis Aquatique chargé ! Bienvenue au PORO WATERPARK 🌟');
});

// Ajout de l'animation sparkleClick
const style = document.createElement('style');
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