// @ts-nocheck

const form = document.getElementById('MyForm');


function getRandomEightDigitNumberWithLeadingZeros() {
    const min = 0;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const randomNumberWithLeadingZeros = String(randomNumber).padStart(8, '0');
    return randomNumberWithLeadingZeros;
}
const randomEightDigitNumberWithLeadingZeros = getRandomEightDigitNumberWithLeadingZeros();

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}
const currentDate = new Date();

form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formNumber = randomEightDigitNumberWithLeadingZeros;

    const formData = formatDate(currentDate);

    const formReceiveLocation = 'Сайт';

    const formStatus = 'Новая';

    const formManager = '';

    const name = document.getElementById('name');
    const formName = name.value;

    const tel = document.getElementById('tel');
    const formTel = tel.value;

    const card = document.getElementById('card-number');
    const formCard = card.value;

    const give = document.getElementById("input-give-amount");
    const formGive = give.value;

    const get = document.getElementById("input-get-amount");
    const formGet = get.value;

    const giveCurr = document.getElementById("input-give__label");
    const formGiveCurr = giveCurr?.textContent;

    const getCurr = document.getElementById("input-get__label");
    const formGetCurr = getCurr?.textContent;

    const promocode = document.getElementById("promocode");
    if (!promocode.value) {
        promocode.value = ''
    }
    const formPromocode = promocode.value;

    const formTelegram = '';

    const commentary = document.getElementById("commentary");
    if (!commentary.value) {
        commentary.value = ''
    }
    const formCommentary = commentary.value;

    fetch('https://script.google.com/macros/s/AKfycbwu0Qhpv4tPUZSN4nGRpdD9W4xZdYk_R1tMz4_PhGA5z54hyNYub4Xjfk2KQujNMDFaBw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            formNumber: formNumber,
            formData: formData,
            formReceiveLocation: formReceiveLocation,
            formStatus: formStatus,
            formManager: formManager,
            formName: formName,
            formTel: formTel,
            formCard: formCard,
            formGive: formGive,
            formGet: formGet,
            formGiveCurr: formGiveCurr,
            formGetCurr: formGetCurr,
            formPromocode: formPromocode,
            formTelegram: formTelegram,
            formCommentary: formCommentary,
        })
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Ответ сервера:', result);
        })
        .catch((error) => {
            console.error('Ошибка при отправке данных:', error);
        })
});


