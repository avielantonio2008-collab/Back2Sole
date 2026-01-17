function selectPackage(element) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');
}

function orderWhatsApp() {
  const message = encodeURIComponent(
    "Hi Back2Sole, I would like to order a shoe cleaning service."
  );
  window.open(`https://wa.me/62XXXXXXXXXX?text=${message}`, '_blank');
}
