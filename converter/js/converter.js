// @ts-nocheck
const giveCurrencyList = document.getElementById('converter-give-currency');
const getCurrencyList = document.getElementById('converter-get-currency');
const giveCurrencyLabel = document.getElementById('input-give__label');
const getCurrencyLabel = document.getElementById('input-get__label');
let giveCurrency = 'USDT';
let getCurrency = 'USDT';
let exchangeRateApi = `${giveCurrency}${getCurrency}`;
let rates = '';

console.log(giveCurrency, getCurrency, exchangeRateApi);   // Присваиваем текстовый контент переменной getCurrency

const giveCurrencyAmount = document.getElementById('input-give-amount');
const getCurrencyAmount = document.getElementById('input-get-amount');

giveCurrencyAmount.placeholder = 1;
giveCurrencyAmount.value = giveCurrencyAmount.placeholder;
getCurrencyAmount.placeholder = 1;
getCurrencyAmount.value = getCurrencyAmount.placeholder;

//доступные валюты
const symbols = [
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

// добавляем список на страницу html
for (let i = 0; i < symbols.length; i++) {
  const li = document.createElement('li');
  li.value = symbols[i].name
  li.innerHTML = `<span class="converter-give-currency__icon"><img src="${symbols[i].image}" alt="${symbols[i].name}"></span><span class="converter-give-currency__name">${symbols[i].name}</span>`;
  if (li.innerHTML === `<span class="converter-give-currency__icon"><img src="${symbols[i].image}" alt="USDT"></span><span class="converter-give-currency__name">USDT</span>`) {
    li.classList.add("active")
  }

  giveCurrencyList.appendChild(li.cloneNode(true));
  getCurrencyList.appendChild(li.cloneNode(true));
};

const url = "https://script.google.com/macros/s/AKfycbxvOrKWfSO_lx81ekFy9jAy1V3R-zHH3m1WGHEaSSidfQ8e2YIMAgZTYPqXwjaatWY0YA/exec";

fetch(url)
  .then(response => response.json())
  .then(data => rates = data)
  .then(data => console.log(data))
  .catch(error => console.error(error));

const currencyFunctionInput = (a, b) => {
  const input1 = document.getElementById("input-give-amount")
  const input2 = document.getElementById('input-get-amount');
  
  if (input1.value < 500) {
    input2.value = input1.value * rates[`${b}`][0];
  } else if (input1.value < 999) {
    input2.value = input1.value * rates[`${b}`][1];
  } else if (input1.value < 4999) {
    input2.value = input1.value * rates[`${b}`][2];
  } else if (input1.value < 9999) {
    input2.value = input1.value * rates[`${b}`][3];
  } else if (input1.value >= 10000) {
    input2.value = input1.value * rates[`${b}`][4];
  }
}

const currencyFunctionOutput = (a, b) => {
  const input1 = document.getElementById("input-give-amount");
  const input2 = document.getElementById('input-get-amount');
  if (input2.value < 500) {
    input1.value = input2.value / rates[`${b}`][0];
  } else if (input2.value < 999) {
    input1.value = input2.value / rates[`${b}`][1];
  } else if (input2.value < 4999) {
    input1.value = input2.value / rates[`${b}`][2];
  } else if (input2.value < 9999) {
    input1.value = input2.value / rates[`${b}`][3];
  } else if (input2.value >= 10000) {
    input1.value = input2.value / rates[`${b}`][4];
  }
}

// добавление класса :active для элементов списка
giveCurrencyList.addEventListener("click", function (event) {

  if (event.target.tagName === "LI") {
    for (const item of this.children) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    giveCurrency = event.target.textContent
    giveCurrencyLabel.innerText = giveCurrency;
    exchangeRateApi = `${event.target.textContent}${getCurrency}`
    console.log(giveCurrency, getCurrency, exchangeRateApi);
  }
  currencyFunctionInput(rates, exchangeRateApi)
});

getCurrencyList.addEventListener("click", function (event) {

  if (event.target.tagName === "LI") {
    for (const item of this.children) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    getCurrency = event.target.textContent;
    getCurrencyLabel.innerText = getCurrency;
    exchangeRateApi = `${giveCurrency}${event.target.textContent}`
    console.log(giveCurrency, getCurrency, exchangeRateApi);   // Присваиваем текстовый контент переменной getCurrency
  }
  currencyFunctionOutput(rates, exchangeRateApi)
});

giveCurrencyAmount.addEventListener('blur', function () {
  currencyFunctionInput(rates, exchangeRateApi);
});
getCurrencyAmount.addEventListener('blur', function () {
  currencyFunctionOutput(rates, exchangeRateApi);
});


// else if (event.target.tagName === "SPAN") {
//   const parentLI = event.target.closest('li');
//   for (const item of parentLI.parentNode.children) {
//     item.classList.remove("active");
//   }
//   console.log(`вы нажали на ${event.target.tagName}`)
//   parentLI.classList.add("active");
//   giveCurrency = event.target.textContent;
//   giveCurrencyLabel.innerText = giveCurrency
//   exchangeRateApi = `${event.target.textContent}${getCurrency}`
//   console.log(event.target.textContent, exchangeRateApi);
// } else if (event.target.tagName === "IMG") {
//   const parentLI = event.target.closest('li');
//   for (const item of parentLI.parentNode.children) {
//     item.classList.remove("active");
//   }
//   console.log(`вы нажали на ${event.target.tagName}`)
//   parentLI.classList.add("active");
//   giveCurrency = parentLI.textContent;
//   giveCurrencyLabel.innerText = giveCurrency
//   exchangeRateApi = `${parentLI.textContent}${getCurrency}`
//   console.log(parentLI.textContent, exchangeRateApi);
// }