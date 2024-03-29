const bars = document.querySelector(".bars");
const menu = document.querySelector(".top__menu__inner");
const profile = document.querySelectorAll(".auth__user__profile");

if (profile != undefined) {
  profile.forEach((p) => {
    p.addEventListener("click", () => {
      document.location = "/user/profile";
    });
  });
}

let exit = false;

bars.addEventListener("click", () => {
  if (!exit) {
    bars.classList.add("active");
    menu.classList.add("active");
    exit = true;
  } else {
    bars.classList.remove("active");
    menu.classList.remove("active");
    exit = false;
  }
});
$(".image__logo").click(() => {
  document.location = "/";
});
////Animation
$(".login__open__form").hide();

$(".login_btn").on("click", () => {
  $(".login__open__form").toggle("fast");
});

$(".content__anime__page").hide();

$(".top__menu__link").on("click", () => {
  $(".content__anime__page").toggle("slow");
});
