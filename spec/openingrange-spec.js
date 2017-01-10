describe("An OpeningRange", function() {

  var MockFormatter = function() {

    this.getFormattedDate = function(date) {
      return date.getUTCHours() + ":" + date.getUTCMinutes();
    };

    this.getRangeDelimiter = function() {
      return " - ";
    };

  };

  var FIELD_NAMES_ENGLISH = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  var fromDate = new Date(Date.UTC(2013, 11, 30, 12, 30, 0));
  var tillDate = new Date(Date.UTC(2013, 11, 30, 18, 0, 0));
  var range = [ fromDate, tillDate ];

  var openingRange = new window.ohhf.OpeningRange(range, new MockFormatter);

  it("should return the English week day name", function() {
    expect(openingRange.getDayName(FIELD_NAMES_ENGLISH)).toEqual("monday");
  });

  it("should return the formatted opening range", function() {
    expect(openingRange.getFormattedOpeningRange()).toEqual("12:30 - 18:0");
  });

});
