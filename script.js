// Numéro WhatsApp international (Côte d'Ivoire)
const phoneNumber = "+2250759877030";
const defaultMsg = " ";

// Fonction utilitaire pour ajouter un écouteur d'événement de manière sécurisée
function safeAddEventListener(id, event, handler) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener(event, handler);
  } else {
    console.warn(`Élément avec l'ID '${id}' non trouvé.`);
  }
}

// Fonction d'ouverture WhatsApp
function openWhatsApp() {
  const encoded = encodeURIComponent(defaultMsg);
  const waLink = `https://wa.me/${phoneNumber}?text=${encoded}`;
  window.open(waLink, '_blank', 'noopener,noreferrer');
}

// Initialisation des boutons WhatsApp
safeAddEventListener('whatsappMainBtn', 'click', openWhatsApp);
safeAddEventListener('whatsappFloatBtn', 'click', openWhatsApp);

// Animation des cartes au chargement
const cards = document.querySelectorAll('.card');
if (cards.length > 0) {
  cards.forEach((card, idx) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, idx * 80);
  });
}

// Gestion du smooth scroll pour les ancres internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Mettre le focus sur l'élément pour l'accessibilité clavier
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});

// Gestion du lien "skip-link" pour le focus
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
}