describe("An OpeningTimes", function() {

  it("should return opening ranges", function() {
    var openingTimes = new window.ohhf.OpeningTimes("Mo 10:00-12:30");

    expect(openingTimes.getOpeningRanges().length).toEqual(1);
    var firstOpeningRange = openingTimes.getOpeningRanges()[0];
    var fromDate = firstOpeningRange[0];
    expect(fromDate.getHours()).toEqual(10);
    expect(fromDate.getMinutes()).toEqual(0);
    var tillDate = firstOpeningRange[1];
    expect(tillDate.getHours()).toEqual(12);
    expect(tillDate.getMinutes()).toEqual(30);
  });

  it("should return the next opening date", function() {
    var openingTimes = new window.ohhf.OpeningTimes("2017-2044 Aug 22-25 Tu-Fr 09:00-17:00");

    var nextOpeningDate = openingTimes.getNextOpeningDate();
    expect(nextOpeningDate).toBeDefined();
    expect(nextOpeningDate.getHours()).toEqual(9); // 09
    expect(nextOpeningDate.getMinutes()).toEqual(0); // 00
    expect(nextOpeningDate.getMonth()).toEqual(7); // August
    expect(nextOpeningDate.getDate()).toEqual(22);
    // Year and week day name change each year
  });

});
