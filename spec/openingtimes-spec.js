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

  xit("should return the next opening date", function() {
    // TODO Pending test implementation
    // https://github.com/wo-ist-markt/wo-ist-markt.github.io/pull/60
    // https://github.com/wo-ist-markt/wo-ist-markt.github.io/pull/56/files#diff-6c1e2ffb1e9fa111df29c4d9ff48e5c2R43
    var openingTimes = new window.ohhf.OpeningTimes("Dec 23-26 Tu-Fr 09:00-17:00 2044");
    expect(openingTimes.getNextOpeningDate()).toEqual("XXX");
  });

});
