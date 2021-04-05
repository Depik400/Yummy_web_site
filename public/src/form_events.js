

//Вход
$(".sumbit__login").on('click',()=>{
  $.ajax({
      url: '/login/auth',
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
//

//Регистрация
$('.registration__submit').on('click',function () {
  $.ajax({
    url: '/login/register',
    type: 'POST',
    dataType: 'html',
    data: $("#registration").serialize(),
  }).done((d) => {
    if(d != 'error')
      document.location = '/';
  });
});
