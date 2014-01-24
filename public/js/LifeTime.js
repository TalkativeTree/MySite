//life-time
//
// Year
// Months
// weeks
// days

function Month(name){
  this.name = name;
}

//================================================//
//==================== YEAR ======================//
//================================================//

function Year(start){
  this.beginning = start;
  this.months = [];
  this.init(start);
}

Year.prototype = {
  constructor: Year,
  MONTHS: [
    "January","February","March","April",
    "May","June","July","August","September",
    "October","November","December"
  ],
  init: function(start) {
    var month;
    for(var i = 0; i < this.MONTHS.length; i++){
      month = start.getMonth() + i;
      this.months.push( new Month(this.MONTHS[month < 11 ? month : month - 11]) );
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
    var year;
    for(var i = 0; i < this.LENGTH; i++){
      var birthDay = new Date(
        (birthDate.getFullYear() + i),
        birthDate.getMonth(),
        birthDate.getDate()
      );

      year = new Year(birthDay);
      this.years.push(year);
    }
  },
  init: function(birthDate){
    this.setYears(birthDate);
  },
  start: function(){
    return this.years[0];
  }
};