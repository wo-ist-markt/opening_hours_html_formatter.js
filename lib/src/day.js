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

    this.getFormattedRanges = function() {
        var out = "";
        for (var i = 0; i < this.openingRanges.length; i++) {
            var openingRange = this.openingRanges[i];
            out += openingRange.getFormattedRange();
            if (i < this.openingRanges.length - 1) {
                out += ", ";
            }
        }
        return out;
    };

}


if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.Day = Day;

