function getCellValue() {
    var spreadsheetId = "list1";
    var range = "list1!D4"; // название листа и диапазон ячейки
    var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + range + "?key=Ваш_API_ключ";
  
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function(response) {
        var value = response.values[0][0]; // получаем значение ячейки
        console.log(value); // выводим значение в консоль
      }
    });
  }