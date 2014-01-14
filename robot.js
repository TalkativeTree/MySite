$(window).scroll(function() {
  $('.wave').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      startBroadcasting($(this));
    }
  });
});


function startBroadcasting(wave){
  wave.addClass("fadeIn");
  setTimeout(function(){
  }, 500);
}