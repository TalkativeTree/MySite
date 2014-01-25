describe("LifeTimeModule", function(){
  var start, startEnd, inbetweenStart, inbetweenEnd, endStart, endEnd, month, monthView, year, yearView, lifeTime;

  beforeEach(function(){
    start  = new Date("1986", "1", "21");
    startEnd  = new Date("1987", "1", "21");
    inbetweenStart = new Date("2010", "0", "1");
    inbetweenEnd = new Date("2010", "12", "31");
    endStart = new Date("2064", "0", "1");
    endEnd = new Date("2064", "1", "21");
  });

  //================ MONTH ================ //
  describe("Month", function() {

    beforeEach(function(){
      month = new Month("January");
    });

    it("should have a name", function(){
      expect(month.name).toEqual("January");
    });

    // it("should have a view", function(){
    //   expect(month.view).toBeTruthy();
    // });

    // it(".view should return a MonthView", function(){
    //   expect(month.view.constructor.name).toEqual("MonthView");
    // });
  });

  //================ YEAR ================ //

  describe("Year", function(){
    beforeEach(function(){
      year = new Year(start, startEnd);
      inbetweenYear = new Year(inbetweenStart, inbetweenEnd);
      testYears = [year, inbetweenYear];
    });

    it("'s first month should match .beginning", function(){
      expect(year.MONTHS[year.beginning.getMonth()]).toEqual("February");
      expect(inbetweenYear.MONTHS[inbetweenYear.beginning.getMonth()]).toEqual("January");
    });

    it("should have 12 months", function(){
      testYears.forEach(function(year){
        expect(year.months.length).toEqual(12);
      });
    });

    it("should have 12 instances of months", function(){
      testYears.forEach(function(year){
        for(i = 0; i < year.months.length; i++){
          expect(year.months.length).toEqual(12);
          expect(year.months[i].constructor).toEqual("Month");
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

    it("should have a draw functions", function(){
      expect(typeof(year.draw)).toEqual("function");
    });

    // it("should have a view", function(){
    //   expect(this.view.constructor.name).toEqual("YearView");
    // });
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

    it("should have years ranging a span of 78 years", function(){
      expect(lifeTime.years[0].beginning.getFullYear()).toEqual(1986);
      expect(lifeTime.years[77].end.getFullYear()).toEqual(2064);
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



  //================ YEAR VIEW ================ //

  describe("YearView", function(){
    beforeEach(function(){
      yearView = new YearView();
    });

    it("should belong to a lifeTimeView", function(){
      expect(typeof(yearView.lifeTimeView)).toEqual("LifeTimeView");
    });

    it("should have a layer", function(){
      expect(typeof(yearView.layer.nodeType)).toEqual("Layer");
    });

    it("should have an array of months", function(){
      expect(typeof(yearView.months)).toEqual("Array");
    });

    it(".months should be MonthView isntances", function(){
      yearView.months.forEach(function(month){
        expect(typeof(month)).toEqual("MonthView");
      });
    });

    it("should have a render functions", function(){
      expect(typeof(yearView.render)).toEqual("function");
    });
  });

  //============= LIFETIME VIEW ================ //
  //============= LIFETIME VIEW ================ //
  //============= LIFETIME VIEW ================ //

  describe("LifeTimeView", function(){
    beforeEach(function(){
      lifeTimeView = new LifeTimeView(start);
    });

    it(".layer should be a Kinetic Layer insance", function(){
      expect(lifeTimeView.layer.nodeType).toEqual("Layer");
    });

    it("should have a lifeTime", function(){
      expect(lifeTimeView.lifeTime).toBeTruthy();
    });

    // it("should have a lifeTimeView", function(){
    //   expect(lifeTimeView.view).toBeTruthy();
    // });

    // it("should render years' views", function(){
    //   console.log("lifetimeViewyear", lifeTimeView.lifeTime.years[0]);
    //   lifeTimeView.lifeTime.years.forEach(function(year){
    //     spyOn(year, 'draw');
    //     spyOn(year.view, 'render');
    //   });
    //   lifeTimeView.render();

    //   lifeTimeView.lifeTime.years.forEach(function(year){
    //     expect(year.view.render).toHaveBeenCalled();
    //     expect(year.draw).toHaveBeenCalled();
    //   });
    // });
  });

  describe("YearViewTemplate", function(){
    beforeEach(function(){
      template = new YearViewTemplate();
    });

    it("should be a group", function(){
      expect(template.nodeType).toEqual("Group");
    });

    it("should have details object with x, y, rotate", function(){
      expect(template.details.x).toEqual();
    });

    it("should have details", function(){
      expect();
    });
  });
});