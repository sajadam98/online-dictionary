var count = 0;
var text = document.getElementById("text");
var down = document.getElementById("down");
var up = document.getElementById("up");
down.addEventListener("click", down_f);
up.addEventListener("click", up_f);
function up_f() {
  count++;
  text.innerHTML = count;
}
function down_f() {
  count--;
  text.innerHTML = count;
}
