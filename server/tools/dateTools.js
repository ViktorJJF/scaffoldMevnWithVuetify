function convert(d) {
    // Converts the date in d to a date-object. The input can be:
    //   a date object: returned without modification
    //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
    //   a number     : Interpreted as number of milliseconds
    //                  since 1 Jan 1970 (a timestamp) 
    //   a string     : Any format supported by the javascript engine, like
    //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
    //  an object     : Interpreted as an object with year, month and date
    //                  attributes.  **NOTE** month is 0-11.
    return (
        d.constructor === Date ? d :
        d.constructor === Array ? new Date(d[0], d[1], d[2]) :
        d.constructor === Number ? new Date(d) :
        d.constructor === String ? new Date(d) :
        typeof d === "object" ? new Date(d.year, d.month, d.date) :
        NaN
    );
}

function inRange(date, start, end) {
    // Checks if date in d is between dates in start and end.
    // Returns a boolean or NaN:
    //    true  : if d is between start and end (inclusive)
    //    false : if d is before start or after end
    //    NaN   : if one or more of the dates is illegal.
    // NOTE: The code inside isFinite does an assignment (=).
    return (
        isFinite(date = convert(date).valueOf()) &&
        isFinite(start = convert(start).valueOf()) &&
        isFinite(end = convert(end).valueOf()) ?
        start <= date && date <= end :
        NaN
    );
}

function compare(a, b) {
    // Compare two dates (could be of any type supported by the convert
    // function above) and returns:
    //  -1 : if a < b
    //   0 : if a = b
    //   1 : if a > b
    // NaN : if a or b is an illegal date
    // NOTE: The code inside isFinite does an assignment (=).
    return (
        isFinite(a = this.convert(a).valueOf()) &&
        isFinite(b = this.convert(b).valueOf()) ?
        (a > b) - (a < b) :
        NaN
    );
}

function todayStartMilliseconds(date) {
    var date = new Date(date);
    date.setHours(0, 0, 0, 0);
    date = date.getTime();
    return date;
}

function todayEndMilliseconds(date) {
    var date = new Date(date);
    date.setHours(23, 59, 59, 999);
    date = date.getTime();
    return date;
}

module.exports = {
    convert,
    inRange,
    compare,
    todayStartMilliseconds,
    todayEndMilliseconds
}

// if date1 > date2 return -1
// if date1 < date2 return 1
// if date1 == date2 return 0
// NaN if a or b is an illegal date