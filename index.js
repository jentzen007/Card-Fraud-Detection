
function isValidCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\D/g, ''); 
    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10 === 0);
}


function isCardExpired(validTill) {
    const today = new Date();
    const [month, year] = validTill.split('/');
    const expiryDate = new Date(year, month - 1);

    return today > expiryDate;
}


document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('CardNumber').value;
    const validTill = document.getElementById('CardTill').value;
    const cardName = document.getElementById('CardHolderName').value;
    const validFrom = document.getElementById('CardFrom').value;
    const cardType = document.getElementById('CardType').value;
    const cvv = document.getElementById('cvv').value;
    

    

    const isValidNumber = isValidCardNumber(cardNumber);
    const isExpired = isCardExpired(validTill);

    let resultMessage;

    if (isValidNumber && !isExpired) {
        resultMessage = "The card is valid.";
    } else if (!isValidNumber) {
        resultMessage = "The card number is invalid.";
    } else if (isExpired) {
        resultMessage = "The card has expired.";
    }
    const data = {
        name: cardName,
        number: cardNumber,
        till: validTill,
        from: validFrom,
        type: cardType,
        cvv: cvv,
        validity: resultMessage
    };

    window.localStorage.setItem('Card Info', JSON.stringify(data));
    window.location.href = "display.html";
});
