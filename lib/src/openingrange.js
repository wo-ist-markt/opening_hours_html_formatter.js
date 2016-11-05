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
     * Returns the index of associated with the day name.
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

    this.getFormattedFrom = function() {
        return this.getFormatted(this.fromDate);
    };

    this.getFormattedTill = function() {
        return this.getFormatted(this.tillDate);
    };

    this.getFormattedRange = function() {
        return this.getFormattedFrom() +
        this.formatter.getRangeDelimiter() +
        this.getFormattedTill();
    };

    this.getFormatted = function(date) {
        return this.formatter.formatDate(date);
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.OpeningRange = OpeningRange;

