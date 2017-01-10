/*
 * An opening range class containg a from and a till date.
 *
 * - openingRange: An openingRange object created by the opening_hours.js library.
 * - formatter: An OpeningRangeFormatter object.
 */
function OpeningRange(openingRange, formatter) {

    this.fromDate = openingRange[0];
    this.tillDate = openingRange[1];
    this.formatter = formatter;

    /*
     * Returns the index of the day associated with the day name.
     * The fromDate is used as a lookup source.
     * It is zero indexed with the 0th item pointing to Sunday.
     */
    this.getDayNameIndex = function() {
        return this.fromDate.getDay();
    };

    /*
     * Returns the name of the given day names
     * at the position of the index.
     *
     * - dayNames: Array of day names. Must be zero indexed, starting with Sunday.
     */
    this.getDayName = function(dayNames) {
        return dayNames[this.getDayNameIndex()];
    };

    this.getFormattedOpeningRange = function() {
        return this.getFormattedFromDate() +
        this.formatter.getRangeDelimiter() +
        this.getFormattedTillDate();
    };

    this.getFormattedFromDate = function() {
        return this.formatter.getFormattedDate(this.fromDate);
    };

    this.getFormattedTillDate = function() {
        return this.formatter.getFormattedDate(this.tillDate);
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.OpeningRange = OpeningRange;

