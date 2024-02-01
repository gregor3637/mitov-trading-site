export function formatDate(date) {
    // Get day, month, and year components
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero based
    var year = date.getFullYear() % 100; // Get last two digits of year

    // Pad day and month with leading zeros if needed
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Return formatted date string
    return day + '/' + month + '/' + year;
}