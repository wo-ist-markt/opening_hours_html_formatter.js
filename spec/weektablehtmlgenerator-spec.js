describe("A WeekTableHtmlGenerator", function() {

  var DAY_NAMES_GERMAN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

  var MockTodayIsSaturday = function() {
    this.getDay = function() {
      return 6;
    };
  }

  it("should generate an empty HTML table element", function() {
    var MockWeek = function() {
      this.getDays = function() {
        return [];
      };
    };
    var generator = new window.ohhf.WeekTableHtmlGenerator(new MockWeek(), new MockTodayIsSaturday(), DAY_NAMES_GERMAN);
    expect(generator.getHtml()).toEqual('<table class="times"></table>');
  });

  it("should generate an HTML table element with one row", function() {
    var MockWeekContainingOneDay = function() {
      this.getDays = function() {
        var days = [];
        var Monday = function() {
          this.getDayNameIndex = function() {
            return 1;
          };
          this.getFormattedOpeningRanges = function() {
            return "07:30 - 14:00";
          };
        };
        days.push(new Monday());
        return days;
      };
    };
    var generator = new window.ohhf.WeekTableHtmlGenerator(new MockWeekContainingOneDay(), new MockTodayIsSaturday(), DAY_NAMES_GERMAN);
    var expectedHtml = '<table class="times"><tr><th>Montag</th><td>07:30 - 14:00 Uhr</td></tr></table>';
    expect(generator.getHtml()).toEqual(expectedHtml);
  });

  it("should generate an HTML table element with two rows", function() {
    var MockWeekContainingTwoDays = function() {
      this.getDays = function() {
        var days = [];
        var Monday = function() {
          this.getDayNameIndex = function() {
            return 1;
          };
          this.getFormattedOpeningRanges = function() {
            return "07:30 - 14:00";
          };
        };
        var Sunday = function() {
          this.getDayNameIndex = function() {
            return 0;
          };
          this.getFormattedOpeningRanges = function() {
            return "10:00 - 12:30, 13:30 - 18:30";
          };
        };
        days.push(new Monday());
        days.push(new Sunday());
        return days;
      };
    };
    var generator = new window.ohhf.WeekTableHtmlGenerator(new MockWeekContainingTwoDays(), new MockTodayIsSaturday(), DAY_NAMES_GERMAN);
    var expectedHtml = '<table class="times">' +
      '<tr><th>Montag</th><td>07:30 - 14:00 Uhr</td></tr>' +
      '<tr><th>Sonntag</th><td>10:00 - 12:30, 13:30 - 18:30 Uhr</td></tr>' +
      '</table>';
    expect(generator.getHtml()).toEqual(expectedHtml);
  });

  it("should generate an HTML table element with one styled row", function() {
    var MockWeekContainingSaturday = function() {
      this.getDays = function() {
        var days = [];
        var Monday = function() {
          this.getDayNameIndex = function() {
            return 6;
          };
          this.getFormattedOpeningRanges = function() {
            return "06:00 - 12:00";
          };
        };
        days.push(new Monday());
        return days;
      };
    };
    var generator = new window.ohhf.WeekTableHtmlGenerator(new MockWeekContainingSaturday(), new MockTodayIsSaturday(), DAY_NAMES_GERMAN);
    var expectedHtml = '<table class="times"><tr class="today"><th>Samstag</th><td>06:00 - 12:00 Uhr</td></tr></table>';
    expect(generator.getHtml()).toEqual(expectedHtml);
  });

});
