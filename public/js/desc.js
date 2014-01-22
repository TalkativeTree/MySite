$(function(){
  $('.expandable').on('click', function(e){
    this.style.display = "none";
    var to_expand = '.' + this.parentNode.className + ' .expanding';
    var expanding = $(to_expand);
    expanding.fadeIn(1000);
  });
  $('.expanding').on('click', function(e){
    this.style.display = "none";
    this.nextElementSibling.style.display = "inline";
  });
});
