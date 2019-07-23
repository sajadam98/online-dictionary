$(".text-center").hide();

$("#select_from").click(function() {
  if ($("#select_from option:selected").val() == "fa") {
    $("#edt_translator").css("text-align", "right");
  } else {
    $("#edt_translator").css("text-align", "left");
  }
});

$("#btn_translator").click(Translate);

function Translate() {
  $("#btn_translator").hide();
  $(".text-center").show();
  $.ajax({
    url:
      "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190722T062110Z.5f5465fc8ae5efb9.4218583f102455773fa9f2e8146c8928e25a37f6&lang=" +
      $("#select_from option:selected").val() +
      "-" +
      $("#select_to option:selected").val() +
      "&text=" +
      $("#edt_translator").val(),
    success: function(result) {
      console.log(result.text[0]);

      $("#txt_translate").text(result.text[0]);
      if ($("#select_to option:selected").val() == "fa") {
        $("#txt_translate").css("text-align", "right");
      } else {
        $("#txt_translate").css("text-align", "left");
      }
      $("#btn_translator").show();
      $(".text-center").hide();
    }
  });
}
