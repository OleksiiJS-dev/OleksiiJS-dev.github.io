// @ts-nocheck
const giveCurrencyList = document.getElementById('converter-give-currency');
const getCurrencyList = document.getElementById('converter-get-currency');
const giveCurrencyLabel = document.getElementById('input-give__label');
const getCurrencyLabel = document.getElementById('input-get__label');
let giveCurrency = "USDT"
let getCurrency = "USDT"
let exchangeRateApi = `${giveCurrency}/${getCurrency}`;


//доступные валюты
const symbols = [
  {
    name: 'USDT',
    image: './images/1. USDT.svg'
  },
  {
    name: 'EUR',
    image: './images/2. EUR.svg'
  },
  {
    name: 'UAH',
    image: './images/3. UAH.svg'
  },
  {
    name: 'RUB',
    image: './images/4. RUB.svg'
  },
  {
    name: 'KZT',
    image: './images/5. KZT.svg'
  },
  {
    name: 'BYN',
    image: './images/6. BYN.svg'
  },
  {
    name: 'KGS',
    image: './images/7. KGS.svg'
  },
  {
    name: 'TJS',
    image: './images/8. TJS.svg'
  },
  {
    name: 'GEL',
    image: './images/9. GEL.svg'
  },
  {
    name: 'USD',
    image: './images/10. USD.svg'
  }
];

// добавление класса :active для элементов списка
giveCurrencyList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    for (const item of this.children) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    console.log(event.target.textContent, exchangeRateApi);  // Присваиваем текстовый контент переменной giveCurrency
    giveCurrency = event.target.textContent;
    giveCurrencyLabel.innerText = giveCurrency
  }
});
getCurrencyList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    for (const item of this.children) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    console.log(event.target.textContent, exchangeRateApi);   // Присваиваем текстовый контент переменной getCurrency
    getCurrency = event.target.textContent;
    getCurrencyLabel.innerText = getCurrency

  }
});

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


const giveCurrencyAmount = document.getElementById('input-give-amount');
const getCurrencyAmount = document.getElementById('input-get-amount');

const currencyFunction = (a, b, c) => {
  (exchangeRateApi === a) ? input2.value = input1.value * c : (exchangeRateApi === b) ? input2.value = input1.value / c : input1.value = input2.value;
}

giveCurrencyAmount.addEventListener('blur', () => {
  const input = parseFloat(giveCurrencyAmount.value)

  getCurrencyAmount.value = input * exchangeRateApi
  converter()

})

getCurrencyAmount.addEventListener('blur', () => {
  const input = parseFloat(getCurrencyAmount.value)

  giveCurrencyAmount.value = input / exchangeRateApi
  converter()

})


const currencyFunctionInput = (a, b, c) => {
  (exchangeRateApi === a) ? input2.value = input1.value * c : (exchangeRateApi === b) ? input2.value = input1.value / c : input1.value = input2.value;
}
const currencyFunctionOutput = (a, b, c) => {
  (exchangeRateApi === a) ? input2.value = input1.value * c : (exchangeRateApi === b) ? input2.value = input1.value / c : input1.value = input2.value;
}

giveCurrencyAmount.addEventListener('blur', function () {
  const input = parseFloat(input1.value);

  console.log(exchangeRateApi)

  switch (true) {
    case exchangeRateApi === 'USD/EUR' || 'EUR/USD':
      if (input === 0) {
        input1.value = 1;
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 500) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[1]);
      }
      else if (input <= 4999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[2]);
      }
      else if (input <= 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[3]);
      }
      else if (input > 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[4]);
      }
      else if (input < 0) {
        input2.value = input2.placeholder
      }
      break;
    case exchangeRateApi === 'USD/UAH' | 'UAH/USD':

      break;
    case exchangeRateApi === 'USD/RUB' | 'RUB/USD':

      break;
    case exchangeRateApi === 'USD/KZT' | 'KZT/USD':

      break;

    default:
      break;
  }
});
getCurrencyAmount.addEventListener('blur', function () {
  const input = parseFloat(input1.value);

  console.log(exchangeRateApi)

  switch (true) {
    case exchangeRateApi === 'USD/EUR' || 'EUR/USD':
      if (input === 0) {
        input1.value = 1;
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 500) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[1]);
      }
      else if (input <= 4999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[2]);
      }
      else if (input <= 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[3]);
      }
      else if (input > 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[4]);
      }
      else if (input < 0) {
        input2.value = input2.placeholder
      }
      break;
    case exchangeRateApi === 'USD/UAH' | 'UAH/USD':

      break;
    case exchangeRateApi === 'USD/RUB' | 'RUB/USD':

      break;
    case exchangeRateApi === 'USD/KZT' | 'KZT/USD':

      break;

    default:
      break;
  }
});

const onclickLeft = () => {
  giveCurrency = textContent 
  console.log(exchangeRateApi)
  switch (true) {
    case exchangeRateApi === 'USD/EUR' || 'EUR/USD':
      if (input === 0) {
        input1.value = 1;
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 500) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[1]);
      }
      else if (input <= 4999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[2]);
      }
      else if (input <= 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[3]);
      }
      else if (input > 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[4]);
      }
      else if (input < 0) {
        input2.value = input2.placeholder
      }
      break;
    case exchangeRateApi === 'USD/UAH' | 'UAH/USD':

      break;
    case exchangeRateApi === 'USD/RUB' | 'RUB/USD':

      break;
    case exchangeRateApi === 'USD/KZT' | 'KZT/USD':

      break;

    default:
      break;
  }
};
const onclickRight = () => {
  giveCurrency = textContent 
  console.log(exchangeRateApi)
  switch (true) {
    case exchangeRateApi === 'USD/EUR' || 'EUR/USD':
      if (input === 0) {
        input1.value = 1;
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 500) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
      }
      else if (input <= 999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[1]);
      }
      else if (input <= 4999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[2]);
      }
      else if (input <= 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[3]);
      }
      else if (input > 9999) {
        currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[4]);
      }
      else if (input < 0) {
        input2.value = input2.placeholder
      }
      break;
    case exchangeRateApi === 'USD/UAH' | 'UAH/USD':

      break;
    case exchangeRateApi === 'USD/RUB' | 'RUB/USD':

      break;
    case exchangeRateApi === 'USD/KZT' | 'KZT/USD':

      break;

    default:
      break;
  }
};


