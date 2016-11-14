describe("An OpeningRangeFormatter", function() {
  var formatter = new window.ohhf.OpeningRangeFormatter();

  it("should format the given date", function() {
    expect(formatter.getRangeDelimiter()).toEqual(" - ");
  });

  it("should format the given date", function() {
    var date = new Date(Date.UTC(2016, 11, 05, 23, 42, 0, 0));
    var offset = new Date().getTimezoneOffset();
    var minutes = date.getUTCMinutes() + offset;
    date.setUTCMinutes(minutes);
    expect(formatter.formatDate(date)).toEqual("23:42");
  });

});
