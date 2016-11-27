describe("A WeekGenerator", function() {

  it("should fail when the 'openingRanges' parameter is missing", function() {
    var generator = new WeekGenerator();
    expect(function() {
      generator.getWeek();
    }).toThrowError("Parameter 'openingRanges' cannot be undefined.");
  });

  it("should fail when the 'openingRangeFormatter' parameter is missing", function() {
    var generator = new WeekGenerator();
    expect(function() {
      generator.getWeek({});
    }).toThrowError("Parameter 'openingRangeFormatter' cannot be undefined.");
  });

  it("should return an empty week when zero opening hours are passed to it", function() {
    var MockOpeningRanges = function() {
      return [];
    };
    var generator = new WeekGenerator();
    var week = generator.getWeek(new MockOpeningRanges(), {});
    expect(week.getDays()).toEqual([]);
  });

  it("should return a Week object containing the given opening hours", function() {
    var openingTimes = new OpeningTimes("Sa 12:30-16:00");
    var openingRanges = openingTimes.getOpeningRanges();
    var generator = new WeekGenerator();

    var week = generator.getWeek(openingRanges, {});
    expect(week.getDays().length).toEqual(1);
    var firstDay = week.getDays()[0];
    expect(firstDay.openingRanges.length).toEqual(1);
    var firstOpeningRange = firstDay.openingRanges[0];
    var fromDate = firstOpeningRange.fromDate;
    expect(fromDate.getHours()).toEqual(12);
    expect(fromDate.getMinutes()).toEqual(30);
    var tillDate = firstOpeningRange.tillDate;
    expect(tillDate.getHours()).toEqual(16);
    expect(tillDate.getMinutes()).toEqual(0);
  });

});
