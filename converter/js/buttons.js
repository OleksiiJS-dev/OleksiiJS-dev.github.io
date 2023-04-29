const symbolsІecond = [
    {
        name: 'USDT',
        image: './converter/images/1. USDT.svg'
    },
    {
        name: 'EUR',
        image: './converter/images/2. EUR.svg'
    },
    {
        name: 'UAH',
        image: './converter/images/3. UAH.svg'
    },
    {
        name: 'RUB',
        image: './converter/images/4. RUB.svg'
    },
    {
        name: 'KZT', 
        image: './converter/images/5. KZT.svg'
    },
    {
        name: 'BYN',
        image: './converter/images/6. BYN.svg'
    },
    {
        name: 'KGS',
        image: './converter/images/7. KGS.svg'
    },
    {
        name: 'TJS',
        image: './converter/images/8. TJS.svg'
    },
    {
        name: 'GEL',
        image: './converter/images/9. GEL.svg'
    },
    {
        name: 'USD',
        image: './converter/images/10. USD.svg'
    }
];
const converterActionButton = document.querySelector(".converter-button");
const converterBlockSide = document.querySelector(".converter-block-side");
const converterGet = document.querySelector(".converter-get");
const converterGiveCurrency = document.querySelector("#converter-give-currency");
const converterGetCurrency = document.querySelector("#converter-get-currency");
const inputGiveAmount = document.querySelector("#input-give-amount");
const inputGetAmount = document.querySelector("#input-get-amount");
const converterGiveAmount = document.querySelector(".converter-give-title");
const converterGetAmount = document.querySelector(".converter-get-title");
const inputGetLabel = document.getElementById("input-get__label");
const inputGiveLabel = document.getElementById("input-give__label");
const sideTitleGet = document.querySelector(".converter-get-title");
const sideTitleGive = document.querySelector(".converter-give-title");
const formBlock = document.querySelector(".form-block");
converterActionButton?.addEventListener('click', () => {
    converterActionButton.classList.add("display");
    converterBlockSide?.classList.add("small");
    converterGet?.classList.add("small");
    converterGiveCurrency?.classList.add('small-ul');
    converterGetCurrency?.classList.add('small-ul');
    inputGiveAmount?.classList.add("input-second-block");
    inputGetAmount?.classList.add("input-second-block");
    sideTitleGet?.classList.add("title-get-second-block");
    sideTitleGive?.classList.add("title-give-second-block");
    formBlock?.classList.add("visible")
    if (inputGetLabel) {
        inputGetLabel.textContent = '';
    };
    if (inputGiveLabel) {
        inputGiveLabel.textContent = '';
    };
    const activeElementGive = document.querySelector('#converter-give-currency li.active');
    const activeElementGet = document.querySelector('#converter-get-currency li.active');
    if (activeElementGive) {
        const secondSpanGive = activeElementGive.children[1];
        const firstSpanGive = activeElementGive.children[0];
        if (secondSpanGive && firstSpanGive) {
            sideTitleGive.innerHTML = secondSpanGive.textContent;
            inputGiveLabel.innerHTML = firstSpanGive.innerHTML;
        }
        if (activeElementGet) {
            const secondSpanGet = activeElementGet.querySelectorAll('span')[1];
            const firstSpanGet = activeElementGet.querySelectorAll('span')[0];
            if (secondSpanGet && firstSpanGet) {
                sideTitleGet.innerHTML = secondSpanGet.textContent;
                inputGetLabel.innerHTML = firstSpanGet.innerHTML;
            }
        }
    }
    const messengerCheckboxes = document.querySelectorAll('input[name="messenger"]');
    messengerCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                messengerCheckboxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox && otherCheckbox !== document.getElementById("myCheckboxOther")) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
    const checkbox = document.querySelector('.form-block__checkbox input');
    const submitButton = document.querySelector('.form-block__button');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            submitButton.classList.remove('disabled');
        } else {
            submitButton.classList.add('disabled');
        }
    });
})

