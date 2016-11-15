describe("A Day", function() {

  var MockOpeningRange = function(index, formattedRange) {

    this.getDayNameIndex = function() {
      return index;
    };

    this.getFormattedRange = function() {
      return formattedRange;
    };

  };

  var range1 = new MockOpeningRange(3, "07:30 - 14:00");
  var range2 = new MockOpeningRange(4, "16:30 - 18:30");


  it("should initialize an empty array", function() {
    var day = new window.ohhf.Day();
    expect(day.openingRanges).toEqual([]);
  });

  it("should contain a single range after being added", function() {
    var day = new window.ohhf.Day();
    day.addOpeningRange(range1)
    expect(day.openingRanges.length).toEqual(1);
  });

  it("should contain multiple ranges after being added", function() {
    var day = new window.ohhf.Day();
    var ranges = [range1, range2];
    day.addOpeningRanges(ranges);
    expect(day.openingRanges.length).toEqual(2);
  });

  it("should return the day name index of the opening range", function() {
    var day = new window.ohhf.Day();
    day.addOpeningRange(range1);
    expect(day.getDayNameIndex()).toEqual(3);
  });

  it("should return the day name index of the first opening range", function() {
    var day = new window.ohhf.Day();
    day.addOpeningRanges([range1, range2]);
    expect(day.getDayNameIndex()).toEqual(3);
  });

  it("should return formatted opening ranges", function() {
    var day = new window.ohhf.Day();
    day.addOpeningRanges([range1, range2]);
    expect(day.getFormattedRanges()).toEqual("07:30 - 14:00, 16:30 - 18:30");
  });

});
