function date_time() {
    const elem = document.getElementById('current_date_time_block');

    // var current_datetime = new Date(2022, 10, 14);
    var current_datetime = new Date();
    var day = new Array("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
    var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
    var str_day = day[current_datetime.getDay()] + ", " + current_datetime.getDate() + " " + month[current_datetime.getMonth()] + " " + current_datetime.getFullYear() + " года";

    var start = new Date(2022, 7, 29);
    var numberOfDays = Math.floor((current_datetime - start) / (24 * 60 * 60 * 1000));
    // document.write(numberOfDays);
    var week = Math.ceil((numberOfDays+1) / 7);
    // document.write(week);

    var symbol;
    var str_week;
    if (week%2 == 0) {
        symbol = '&#9660;'
        str_week = "нижняя четная (" + week + ") учебная неделя."
        elem.style.color = '#0000FF';
    } else if (week%2 == 1) {
        symbol = '&#9650;'
        str_week = "верхняя нечетная (" + week + ") учебная неделя."
        elem.style.color = '#FF0000';
    }

    var TODAY = symbol + ' ' + str_day + ", " + str_week;
    return TODAY;
}
// document.getElementById('current_date_time_block').innerHTML = date_time();
