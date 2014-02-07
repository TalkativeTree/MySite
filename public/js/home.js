(function(){
  $(".letter").hover(function(){
    this.classList.add('fall');
  });
})();

function fillArray(elements, filler){
  array = [];
  for(var i = 0; i < elements; i++){
    array.push(filler);
  }
}

function Life(start){
  this.LENGTH = 78;
  this.birth = start;
  this.years = [];
  this.today = new Date();
}

function Month(month, activities){
  this.name = month;
  this.activities = activities;
}