$("#blah").on("click", () => {
  $("#imgInp").trigger("click");
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imgInp").change(function () {
  readURL(this);
});

$("#video_send").click(() => {
  var Check = true;
  var AllInputs = document.querySelectorAll(".important_inputs");
  AllInputs.forEach((elem) => {
    if (elem.value == "") {
      Check = false;
      console.log(elem.id + ' false');
    }
  });
  if (Check) {
    data = {
      title: $("#title").val(),
      status: $("#status").val(),
      rating: $("#rating").val(),
      studio: $("#studio").val(),
      type: $("#type").val(),
      series: $("#series").val(),
    };
    $.ajax({
      url: "/video/new",
      type: "POST",
      dataType: "json",
      data: data,
    }).done((newData) => {
      console.log(newData);
    });
  }
});
