$(function()
{
  var flame = $('#flame');
  var txt = $('h1');

  flame.on(
  {
    click: function()
    {
      flame.removeClass('burn').addClass('puff');
      $('.smoke').each(function()
      {
        $(this).addClass('puff-bubble');
      });
      $('#glow').remove();
       txt.html("Feliz Cumpleaños<br><b><a href='https://www.facebook.com/profile.php?id=100083057161900' target='_blank'>♡Estrella Hernandez♡💕</a></b>").delay(2750).fadeOut(300);
      $('#candle').animate(
      {
        //'opacity': '.5'
      }, 100);
    }
  })   
});
