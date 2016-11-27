describe("A Week", function() {

  it("should fail when the 'specificDay' parameter is missing", function() {
    var week = new Week();
    expect(function() {
      week.addDay();
    }).toThrowError("Parameter 'specificDay' cannot be undefined.");
  });

  it("should return a week with zero days if the given day does not contain opening ranges", function() {
    var MockDay = function() {
      this.openingRanges = [];
    };
    var week = new Week();
    week.addDay(new MockDay);
    expect(week.getDays()).toEqual([]);
  });

});

