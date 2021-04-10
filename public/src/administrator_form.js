$("#blah").on("click", () => {
  $("#imgInp").trigger("click");
});

//Установка только добавленной картинки

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

// Функции ниже отвечают за отправление нового аниме на сервер

function EmptyInputsCheck() {
  var AllInputs = document.querySelectorAll(".important_inputs");
  AllInputs.forEach((elem) => {
    if (elem.value == "") {
      console.log(elem.id + " false");
      return false;
    }
  });
  return true;
}

function SetupFormData() {
  var form = new FormData();
  form.append("title", $("#title").val());
  form.append("status", $("#status").val());
  form.append("rating", $("#rating").val());
  form.append("studio", $("#studio").val());
  form.append("type", $("#type").val());
  form.append("series", $("#series").val());
  form.append("upload", $("#imgInp")[0].files[0]);
  return form;
}

$("#video_send").click(() => {
  if (!EmptyInputsCheck) {
    return;
  }

  var form = SetupFormData();

  $.ajax({
    url: "/user/upload/title",
    data: form,
    method: "POST",
    processData: false,
    contentType: false,
  }).done((Data) => {
    console.log(data);
  });
});
