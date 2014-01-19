
$(function(){
  $('.tree').on('click', function(){
  console.log($('.talkative'));
  $('.talkative').addClass('show');
  $('.talkative')[0].style.display = "inline";
  });
});