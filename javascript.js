var button = document.getElementById("btn_fetch");
var text = document.getElementById("animal_info");
var Request = new XMLHttpRequest();
var urlCounter = 1;

button.addEventListener("click", fetchData);

function fetchData() {
  Request.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-"
     + urlCounter + ".json"
  );
  Request.onload = function() {
    var data = JSON.parse(Request.responseText);
        renderHTML(data);
  };
  Request.send();
  urlCounter++;
  if(urlCounter > 3){
    //button.classList.add("hide-me");  need css code
  }
}

function renderHTML(data){
  var htmlString = "";

  for (let index = 0; index < data.length; index++) {
    htmlString += "<p>" + data[index].name + " is a " +
     data[index].species + " and like " + data[index].foods.likes[0] +
      " and " + data[index].foods.likes[1] + " and dislike " +
      data[index].foods.dislikes[0] + " and " + data[index].foods.dislikes[1] + "</p>";
  }

  text.insertAdjacentHTML('beforeend' , htmlString)
}