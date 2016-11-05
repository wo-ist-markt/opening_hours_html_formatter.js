var openingrangeformatter = require("../lib/src/openingrangeformatter");


describe("An OpeningRangeFormatter", function() {

  var formatter = new openingrangeformatter.OpeningRangeFormatter();

  it("should format the given date", function() {
    expect(formatter.getRangeDelimiter()).toEqual(" - ");
  });

  it("should format the given date", function() {
    var date = Date.UTC(2016, 11, 05, 23, 42, 0, 0);
    expect(formatter.formatDate(date)).toEqual("23:42");
  });

});
