var button = document.getElementById("btn_translate");
var edtDictionary = document.getElementById("edt_Dictionary");
var Translated = document.getElementById("txt_translate");
var selectFrom = document.getElementById("select_from");
var selectTo = document.getElementById("select_to");

button.addEventListener("click", Translate);

console.log(selectFrom.options[selectFrom.selectedIndex].value);
var Request = new XMLHttpRequest();

function Translate() {
  button.disabled = true;
  Request.open(
    "GET",
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190722T062110Z.5f5465fc8ae5efb9.4218583f102455773fa9f2e8146c8928e25a37f6&lang="
        + selectFrom.options[selectFrom.selectedIndex].value + "-" + 
        selectTo.options[selectTo.selectedIndex].value + "&text=" +
        edtDictionary.value
  );
  Request.onload = function() {
    var data = JSON.parse(Request.responseText);
    Translated.innerHTML = data.text;
    button.disabled = false;
  };
  Request.send();
}