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