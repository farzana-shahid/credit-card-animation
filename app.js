
    const cardNumberInput = document.getElementById('card-number');
    const displayCardNumber = document.getElementById('display-card-number');



cardNumberInput.addEventListener('input', () => {
  let cardNumber = cardNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters

  // Add spaces after every 4 digits
  cardNumber = cardNumber.match(/.{1,4}/g).join(' ') || '';

  // Update the card number display on the card
  displayCardNumber.textContent = cardNumber;
  console.log(cardNumber)
