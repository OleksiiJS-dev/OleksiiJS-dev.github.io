// // 1
// const formNumberOfApplication = 8888 8888;
// // 2
// const formData = new Date();
// // 3
// const formReceiveLocation = 'Сайт'
// // 4
// const formStatus = 'Новая'
// // 5 
// const formName = document
// // 6
// const formTel = document
// // 7
// const formCard = 
// // 8
// const formSell = 
// // 9
// const formBuy = 
// // 10
// const formSellCurrency = 
// // 11
// const formBuyCurrency = 
// // 12
// const formCurrencyRate = rates ...
// // 13
// const formTg = ''
// // 14
// const formMassenger = document
// // 15
// const formPromocode = document
// // 16
// const formCommentary = document
console.log("mmm")

const form = document.getElementById('myForm');

form?.addEventListener('submit', (event) => {
  event.preventDefault(); // Отмена отправки формы и изменения адреса


  console.log("asdll")

  // 1
const formNumber = 88888888;
// 2
const formData = new Date();
// 3
const formReceiveLocation = 'Сайт'
// 4
const formStatus = 'Новая'
// 5 
const formName = document
// 6
const formTel = document
// 7
// const formCard = 
// // 8
// const formSell = 
// // 9
// const formBuy = 
// // 10
// const formSellCurrency = 
// // 11
// const formBuyCurrency = 
// // 12
// const formCurrencyRate = rates ...
// // 13
// const formTg = ''
// // 14
// const formMassenger = document
// // 15
// const formPromocode = document
// // 16
// const formCommentary = document

  // Отправка данных на сервер с помощью AJAX (пример: использование Fetch API)
  fetch('https://script.google.com/macros/s/AKfycbyTNT0I1RTVo0ZR-X_hRoARu_5tqLrR2KHIiGFXWW17bBkyHM-wK0wqJYGArQi_TkJ_MQ/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: formNumber }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Ответ сервера:', result);
    })
    .catch((error) => {
      console.error('Ошибка при отправке данных:', error);
    });
});