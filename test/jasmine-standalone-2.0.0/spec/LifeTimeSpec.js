describe("LifeTimeModule", function(){
  var start, inbetween, end, month, monthView, year, yearView, lifeTime;

  beforeEach(function(){
    start  = new Date("1986", "1", "21");
    inbetween = new Date("2010", "0", "1");
    end_start = new Date("2064", "0", "1");
    end = new Date("2064", "1", "21");
  });

  //================ MONTH ================ //
  describe("Month", function() {

    beforeEach(function(){
      month = new Month("January");
    });

    it("should have a name", function(){
      expect(month.name).toEqual("January");
    });

    it("should have a view", function(){
      expect(month.view).toBeTruthy();
    });

    it(".view should return a MonthView", function(){
      expect(month.view.constructor.name).toEqual("MonthView");
    });
  });

  //================ MONTH VIEW ================ //

  describe("MonthView", function(){
    beforeEach(function(){
      monthView = new MonthView();
    });


    it("it should return div.month", function(){
      console.log(monthView);
      expect(monthView.template.hasClass("month")).toBeTruthy();
    });
  });

  //================ YEAR ================ //

  describe("Year", function(){
    beforeEach(function(){
      year = new Year(start);
      inbetweenYear = new Year(inbetween);
      endYear = new Year(end_start, end);
      testYears = [year, inbetween, endYear];
    });

    it("'s first month should match .beginning", function(){
      testYears.forEach(function(year){
        expect(year.MONTHS[year.beginning.getMonth()]).toEqual("February");
      });
    });

    it("should have 12 months", function(){
      testYears.forEach(function(year){
        expect(year.months.length).toEqual(12);
      });
    });

    it("should have 12 instances of months", function(){
      testYears.forEach(function(year){});
        for(i = 0; i < year.months.length; i++){
          expect(year.months.length).toEqual(12);
          expect(year.months[i].constructor.name).toEqual("Month");
        }
      });
    });

    it("should have a beginning", function(){
      expect(year.beginning).toBeTruthy();
    });

    it("should have an end", function(){
      expect(year.end).toBeTruthy();
    });

    it("beginning should be a Date", function(){
      expect(year.beginning.constructor.name).toEqual("Date");
    });

    it("end should be a Date", function(){
      expect(year.end.constructor.name).toEqual("Date");
    });
  });

  //================ YEAR VIEW ================ //

  describe("YearView", function(){
    beforeEach(function(){
      yearView = new YearView();
    });

    it("should up to 12 months", function(){});
  });

  //================ LIFE TIME ================ //

  describe("LifeTime", function(){
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

    it("should have 78 years worth of months", function(){
      expect(lifeTime.years.length).toEqual(78);
    });

    it("should have instances of year", function(){
      for(i = 0; i < lifeTime.years.length; i++){
        expect(lifeTime.years[i].constructor.name).toEqual("Year");
      }
    });

    it("should have sequentially increasing years", function(){
      for(i = 0; i < 78; i++){
        expect(lifeTime.years[i].beginning.getFullYear()).toEqual(1986 + i);
      }
    });

    it("should have years ranging from 1986-2064", function(){
      expect(lifeTime.years[0].beginning.getFullYear()).toEqual(1986);
      expect(lifeTime.years[77].beginning.getFullYear()).toEqual(2064);
    });

  });
});