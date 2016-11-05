/*
 * Creates an OpeningTimes object from the given string.
 * To parse the string opening_hours.js and moment.js are used.
 *
 * The OpeningTimes object can be one of the following:
 * - next opening date
 * - opening ranges
 * - undefined if no next opening date or ranges are available
 */
function OpeningTimes(openingHoursStrings) {

    this.openingHoursStrings = openingHoursStrings;
    this.openingTimes = undefined;

    this.getOpeningRanges = function() {
        if (this.openingTimes === undefined) {
            this.openingTimes = this.calculateOpeningTimes();
        }
        if (this.openingTimes !== undefined && this.openingTimes.hasOwnProperty('intervals')) {
            return this.openingTimes.intervals;
        }
        return undefined;
    };

    this.getNextOpeningDate = function() {
        if (this.openingTimes === undefined) {
            this.openingTimes = this.calculateOpeningTimes();
        }
        if (this.openingTimes !== undefined && this.openingTimes.hasOwnProperty('nextChange')) {
            return this.openingTimes.nextChange;
        }
        return undefined;
    };

    /*
     * Returns opening times compiled via opening_hours.js.
     * Returns a object with the next opening date or opening ranges if available.
     * Returns undefined if no next opening date or ranges are available.
     */
    this.calculateOpeningTimes = function() {
        var sundayIndex = 0;
        var shiftBy;
        if (moment().weekday() === sundayIndex) {
            shiftBy = -1;
        } else {
            shiftBy = 1;
        }
        var monday = moment().startOf("week").add(shiftBy, 'days').toDate();
        var sunday = moment().endOf("week").add(shiftBy, 'days').toDate();
        var oh = new opening_hours(this.openingHoursStrings);
        var intervals = oh.getOpenIntervals(monday, sunday);
        var nextChange = oh.getNextChange();

        if (intervals.length > 0) {
            /* Return opening ranges */
            return {
                intervals: intervals
            };
        } else if (typeof nextChange !== 'undefined') {
            /* Return next opening date */
            return {
                nextChange: nextChange
            };
        } else {
            return undefined;
        }
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.OpeningTimes = OpeningTimes;

