/*
 * Creates a Week object from the given opening ranges.
 * The opening ranges have to be extracted from an opening_hours.js object.
 */
function WeekGenerator() {

    /*
     * Returns a Week object.
     *
     * - openingRanges - An array of Date objects (even amount) describing from and till times.
     * - openingRangeFormatter - A OpeningRangeFormatter object.
     */
    this.getWeek = function(openingRanges, openingRangeFormatter) {
        if (openingRanges === undefined) {
            throw new Error("Parameter 'openingRanges' cannot be undefined.");
        }
        if (openingRangeFormatter === undefined) {
            throw new Error("Parameter 'openingRangeFormatter' cannot be undefined.");
        }
        var week = new Week();
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

