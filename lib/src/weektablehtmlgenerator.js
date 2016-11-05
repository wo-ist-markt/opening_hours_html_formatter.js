/*
 * An HTML generator for week data.
 * Outputs an HTML table with a row for each week day
 * which has corresponding opening hours.
 * If the day matches today the row is styled.
 *
 * - week: A Week object.
 * - today: A date object for now.
 * - dayNames: An array of day names to be shown in the table. Must be zero indexed, starting with Sunday.
 */
function WeekTableHtmlGenerator(week, today, dayNames) {

    this.week = week;
    this.today = today;
    this.dayNames = dayNames;

    this.getHtml = function() {
        var week = this.getWeek();
        return week.outerHTML;
    };

    this.getWeek = function() {
        var table = this.getTable();
        var days = this.week.getDays();
        for (var i = 0; i < days.length; i++) {
            var row = this.getDay(days[i]);
            table.appendChild(row);
        }
        return table;
    };

    this.getDay = function(day) {
        var row = this.getTableRow(day);
        var header = this.getDayNameCell(day);
        row.appendChild(header);
        var cell = this.getOpeningRangesCell(day);
        row.appendChild(cell);
        return row;
    };

    this.getTable = function() {
        var table = document.createElement("table");
        table.classList.add("times");
        return table;
    };

    this.getTableRow = function(day) {
        var row = document.createElement("tr");
        var dayNameIndex = day.getDayNameIndex();
        var dayIsToday = this.today.getDay() === dayNameIndex;
        if (dayIsToday) {
            row.classList.add("today");
        }
        return row;
    };

    this.getDayNameCell = function(day) {
        var header = document.createElement("th");
        var dayName = this.dayNames[day.getDayNameIndex()];
        var text = document.createTextNode(dayName);
        header.appendChild(text);
        return header;
    };

    this.getOpeningRangesCell = function(day) {
        var cell = document.createElement("td");
        var ranges = day.getFormattedRanges();
        var text = document.createTextNode(ranges + " Uhr");
        cell.appendChild(text);
        return cell;
    };

}

if (typeof window.ohhf === "undefined") {
    window.ohhf = {};
}
window.ohhf.WeekTableHtmlGenerator = WeekTableHtmlGenerator;

