

fetch('https://sheets.googleapis.com/v4/spreadsheets/12DK_qOwgj0zlnw1lUz0w2pcYts6I05UbHkXL1kR9Bu4', {
  headers: {
    'key': 'AIzaSyBH-Pjo1VnclFM8SivTNgqKdvgVztLn--s'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));