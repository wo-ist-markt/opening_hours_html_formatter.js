/*
 * A day class containing opening ranges.
 */
function Day() {

    this.openingRanges = [];

    this.addOpeningRange = function(openingRange) {
        this.openingRanges.push(openingRange);
    };

    this.addOpeningRanges = function(openingRanges) {
        for (var i = 0; i < openingRanges.length; i++) {
            this.addOpeningRange(openingRanges[i]);
        }
    };

    /*
     * Returns the day name index of the first opening range object
     * or -1 if there is no opening range object.
     */
    this.getDayNameIndex = function() {
        return this.openingRanges === [] ? -1 : this.openingRanges[0].getDayNameIndex();
    };

    this.getFormattedOpeningRanges = function() {
        return this.openingRanges.map(
            function(openingRange) {
                return openingRange.getFormattedOpeningRange();
            }
        ).join(", ");
    };

}


if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.Day = Day;

