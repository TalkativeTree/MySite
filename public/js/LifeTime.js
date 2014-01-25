//life-time
//
// Year
// Months
// weeks
// days
function Month(name){
  this.name = name;
}

Month.prototype.constructor = "Month";
// Month.prototype.view = new MonthView();
// Month.prototype.draw = function(){
//   this.view.render();
// };

//================================================//
//==================== YEAR ======================//
//================================================//

function Year(start, end){
  this.beginning = start;
  this.end = end;
  this.months = [];
  this.init(start, end);
}

Year.prototype = {
  constructor: Year,
  MONTHS: [
    "January","February","March","April",
    "May","June","July","August","September",
    "October","November","December"
  ],
  draw: function(){
    this.view.render();
    this.months.forEach(function(month){
      month.draw();
    });
  },
  init: function(start, end) {
    var months = this.MONTHS;
    for(var i = 0; i < 12; i++){
      month = start.getMonth() + i;
      newMonth = new Month(this.MONTHS[month < 11 ? month : month - 11]);
      this.months.push(newMonth);
    }
  }
};

//================================================//
//================= LIFE TIME ====================//
//================================================//

function LifeTime(birthDate){
  this.birthDay = birthDate.getDate();
  this.birthMonth = birthDate.getMonth();
  this.birthYear = birthDate.getFullYear();
  this.years = [];
  this.init(birthDate);
}

LifeTime.prototype = {
  constructor: LifeTime,
  LENGTH: 78,
  setYears: function(birthDate) {
    var year, start, end, i;
    for(i = 0; i < this.LENGTH; i++){
      start = new Date(
          birthDate.getFullYear() + i,
          birthDate.getMonth(),
          birthDate.getDate()
        );
        end = new Date(
          birthDate.getFullYear() + i + 1,
          birthDate.getMonth(),
          birthDate.getDate()
        );
      this.years.push( new Year(start, end) );
    }
  },
  init: function(birthDate){
    this.setYears(birthDate);
  },
  start: function(){
    return this.years[0];
  }
};



function MonthView(){
  this.template = $("<div>").addClass("month");
}

function YearView(year, months, LifeTimeView){
  this.template = new YearViewTemplate(year);
  this.months = months.map(function(month){
    return new MonthView(month);
  });
}

YearView.prototype = {
  render: function(){

  }
};

function YiewViewTemplate(year){
  this.details = {
    x: year.start.
  }
  return new Kinetic.Group();
}

function LifeTimeView(start){
  this.layer = new Kinetic.Layer();
  this.lifeTime = new LifeTime(start);
}

LifeTimeView.prototype = {
  render: function(){
    this.lifeTime.years.forEach(function(year){
      year.draw();
    });
  },
};