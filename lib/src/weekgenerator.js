/*
 * Creates a Week object from the given opening ranges.
 * The opening ranges have to be extracted from an opening_hours.js object.
 */
function WeekGenerator() {

    this.getWeek = function(openingRanges) {
        var openingRangeFormatter = new OpeningRangeFormatter();
        var week = new Week();
        if (openingRanges === undefined) {
            return undefined;
        }
        for (var i = 0; i < openingRanges.length; ++i) {
            var openingRange = openingRanges[i];
            var day = new Day();
            var range = new OpeningRange(openingRange, openingRangeFormatter);
            day.addOpeningRange(range);
            week.addDay(day);
        }
        return week;
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.WeekGenerator = WeekGenerator;

