/*
 * Formatter for an opening range.
 * The actually formatting is dispatched to the moment.js library.
 */
function OpeningRangeFormatter() {

    this.getRangeDelimiter = function() {
        return " - ";
    };

    this.getFormattedDate = function(date) {
        if (typeof date === "undefined") {
            throw new Error("Parameter 'date' cannot be undefined.");
        }
        return moment(date).format('HH:mm');
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.OpeningRangeFormatter = OpeningRangeFormatter;

