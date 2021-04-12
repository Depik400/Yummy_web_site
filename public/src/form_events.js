

//Вход
$(".sumbit__login").on('click',()=>{
  $.ajax({
      url: '/user/auth',
      type: 'POST',
      dataType: 'html',
      data:$('#login__form').serialize()
  }).done((d) => {
    if(d != 'error')
      {
        document.location = '/';
      }
  });
});

$("#sumbit__login__mobile").on('click',()=>{
  $.ajax({
      url: '/user/auth',
      type: 'POST',
      dataType: 'html',
      data:$('#login__form__mobile').serialize()
  }).done((d) => {
    if(d != 'error')
      {
        document.location = '/';
      }
  });
});
//

//Регистрация
$('.registration__submit').on('click',function () {
  $.ajax({
    url: '/user/registration',
    type: 'POST',
    dataType: 'html',
    data: $("#registration").serialize(),
  }).done((d) => {
    if(d != 'error')
      document.location = '/';
  });
});
