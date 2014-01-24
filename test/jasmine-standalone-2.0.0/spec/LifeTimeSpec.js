//================ MONTH ================ //
describe("Month", function() {
  var month;

  beforeEach(function(){
    month = new Month("January");
  });

  it("should have a name", function(){
    expect(month.name).toEqual("January");
  });
});

//================ YEAR ================ //

describe("Year", function(){
  var year, start;

  beforeEach(function(){
    start  = new Date("1986", "1", "21");
    year = new Year(start);
  });

  it("should have 12 months", function(){
    expect(year.months.length).toEqual(12);
  });

  it("should have 12 instances of months", function(){
    for(var i = 0; i < 12; i++){
      expect(year.months[i].constructor.name).toEqual("Month");
    }
  });

  it("should have a beginning", function(){
    expect(year.beginning).toBeTruthy();
  });

  it("beginning should be a Date", function(){
    expect(year.beginning.constructor.name).toEqual("Date");
  });
});

//================ LIFE TIME ================ //

describe("LifeTime", function(){
  var lifeTime, start;

  beforeEach(function(){
    start  = new Date("1986", "1", "21");
    lifeTime = new LifeTime(start);
    console.log(start, lifeTime);
  });

  it("should have a default length of 78", function(){
    expect(lifeTime.LENGTH).toEqual(78);
  });

  it("should have a birthDay", function(){
    expect(lifeTime.birthDay).toEqual(start.getDate());
  });

  it("should have a birthMonth", function(){
    expect(lifeTime.birthMonth).toEqual(start.getMonth());
  });

  it("should have a birthYear", function(){
    expect(lifeTime.birthYear).toEqual(start.getFullYear());
  });

  it("should have 78 years", function(){
    expect(lifeTime.years.length).toEqual(78);
  });

  it("should have 78 instances of year", function(){
    for(var i = 0; i < 78; i++){
      expect(lifeTime.years[i].constructor.name).toEqual("Year");
    }
  });

  it("should have years ranging from 1986-2063", function(){
    for(var i = 0; i < 78; i++){
      expect(lifeTime.years[i].beginning.getFullYear()).toEqual(1986 + i);
    }
  });

  it("each year should beginning should match birthYear and birthMonth", function(){
    lifeTime.years.forEach(function(year){
      expect(year.beginning.getDate()).toEqual(lifeTime.birthDay);
      expect(year.beginning.getMonth()).toEqual(lifeTime.birthMonth);
    });
  });
});