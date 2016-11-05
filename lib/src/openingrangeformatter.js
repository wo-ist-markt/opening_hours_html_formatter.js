/*
 * Formatter for an opening range.
 * The actually formatting is dispatched to the moment.js library.
 */
function OpeningRangeFormatter() {

    this.getRangeDelimiter = function() {
        return " - ";
    };

    this.formatDate = function(date) {
        return moment(date).format('HH:mm');
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.OpeningRangeFormatter = OpeningRangeFormatter;

