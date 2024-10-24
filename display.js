const cardData = JSON.parse(localStorage.getItem('Card Info'));

document.getElementById('card-name').textContent = cardData.name;
document.getElementById('card-number').textContent = cardData.number;
document.getElementById('valid-from').textContent = cardData.from;
document.getElementById('valid-till').textContent = cardData.till;
document.getElementById('card-type').textContent = cardData.type;
document.getElementById('CVV').textContent = cardData.cvv;
document.getElementById('validation-status').textContent = cardData.validity;