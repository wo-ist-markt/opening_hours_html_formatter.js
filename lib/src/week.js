/*
 * A week consisting of named days (Monday - Sunday).
 */
function Week() {

    this.monday = undefined;
    this.tuesday = undefined;
    this.wednesday = undefined;
    this.thursday = undefined;
    this.friday = undefined;
    this.saturday = undefined;
    this.sunday = undefined;

    this.FIELD_NAMES_ENGLISH = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    /*
     * Adds a Day object.
     * New and existing days which match by their name are merged.
     */
    this.addDay = function(specificDay) {
        if (typeof specificDay === "undefined") {
            throw new Error("Parameter 'specificDay' cannot be undefined.");
        }
        var openingRanges = specificDay.openingRanges;
        for (var i = 0; i < openingRanges.length; i++) {
            var openingRange = openingRanges[i];
            // TODO Get rid of this order dependency.
            // The array must start with Sunday because Date.getDay() is zero indexed.
            var dayName = openingRange.getDayName(this.FIELD_NAMES_ENGLISH);
            this[dayName] = this.getUpdatedDay(this[dayName], specificDay);        }
    };

    /*
     * Returns an array of days ordered from Monday to Sunday.
     * A day is only added to the array if it is defined.
     */
    this.getDays = function() {
        var days = [];
        if (typeof this.monday !== "undefined") {
            days.push(this.monday);
        }
        if (typeof this.tuesday !== "undefined") {
            days.push(this.tuesday);
        }
        if (typeof this.wednesday !== "undefined") {
            days.push(this.wednesday);
        }
        if (typeof this.thursday !== "undefined") {
            days.push(this.thursday);
        }
        if (typeof this.friday !== "undefined") {
            days.push(this.friday);
        }
        if (typeof this.saturday !== "undefined") {
            days.push(this.saturday);
        }
        if (typeof this.sunday !== "undefined") {
            days.push(this.sunday);
        }
        return days;
    };

    this.getUpdatedDay = function(day, specificDay) {
        if (typeof day === "undefined") {
            day = specificDay;
        } else {
            day.addOpeningRanges(specificDay.openingRanges);
        }
        return day;
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.Week = Week;

