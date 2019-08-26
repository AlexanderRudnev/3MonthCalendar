var monthcalendar = {
	monthcalendarLocation: '.monthcalendar',
	updateInterval: 60000,
	dataIntervalId: null,
	currentTemp: "--" + "&deg;",
};

/**
 * Updates the time that is shown on the screen
 */
monthcalendar.updateMonthcalendar = function () {

        let today = new Date();

        if (today.getMonth() === 0)
            showCalendar(11, today.getFullYear()-1, "calendar-body-prev");
        else
            showCalendar(today.getMonth()-1, today.getFullYear(), "calendar-body-prev");

	showCalendar(today.getMonth(), today.getFullYear(), "calendar-body-curr");

        if (today.getMonth() === 11)
            showCalendar(0, today.getFullYear()+1, "calendar-body-next");
        else
            showCalendar(today.getMonth()+1, today.getFullYear(), "calendar-body-next");
}

function daysInMonth(month,year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  return new Date(year, month+1, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};

function getWeekNo(year, month, day) {
    var janOne = new Date(year, 0, 1);
    var aDay = new Date(year, month, day+1);
    var dayOfYear = ((aDay - janOne + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
}

function isHoliday(year, month, day) {
    var fResult = false;

    let dayOfWeek = (new Date(year, month, day)).getDay();

    if ((dayOfWeek === 6) || (dayOfWeek === 0))
        fResult = true;

    if ((month === 0)  && (day === 1))  fResult = true;
    if ((month === 1)  && (day === 23)) fResult = true;
    if ((month === 4)  && (day === 1))  fResult = true;
    if ((month === 4)  && (day === 9))  fResult = true;
    if ((month === 5)  && (day === 12)) fResult = true;
    if ((month === 10) && (day === 4))  fResult = true;

    return fResult;
}

function showCalendar(month, year, table_body) {

    let months_ru = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let months_en = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let weekdays_ru = ["Неделя", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let weekdays_en = ["Week", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let firstDay = (new Date(year, month)).getDay();
    // Making Monday first day
    if (firstDay > 0) firstDay--;
    else firstDay = 6;


    tbl = document.getElementById(table_body); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    let row = document.createElement("tr");
    cell = document.createElement("td");
    cell.colSpan = "10";
    monthText = document.createTextNode(months_ru[month] + " / " + year + " / " + months_en[month]);
    cell.appendChild(monthText);
    cell.classList.add("month_caption");	
    row.appendChild(cell);
    tbl.appendChild(row);

    row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        cell = document.createElement("td");
        cellText = document.createTextNode(weekdays_ru[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("weekday_cell");
    }
    tbl.appendChild(row);

    // creating all cells
    let date = 1;
    let today = new Date();
    let weekNo = getWeekNo(year, month, 1);
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        if (date > daysInMonth(month, year)) break;
        
        cell = document.createElement("td");
        cellText = document.createTextNode(weekNo);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("week_number");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDay) ||
                (date > daysInMonth(month, year))) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell.classList.add("day_cell");
            }
            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date/* + " " + (new Date(year, month, date)).getDay()*/);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("day_cell_today");
                } // color today's date                
                cell.appendChild(cellText);
                row.appendChild(cell);                

                if (isHoliday(year, month, date))
                    cell.classList.add("holiday_cell");
                else
                    cell.classList.add("day_cell");

                date++;
            }
        }

        tbl.appendChild(row); // appending each row into calendar body.
        weekNo++;
    }

    row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        cell = document.createElement("td");
        cellText = document.createTextNode(weekdays_en[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.classList.add("weekday_cell");
    }
    tbl.appendChild(row);


}

monthcalendar.init = function () {

	this.updateMonthcalendar(this.updateMonthcalendar.bind(this));

	this.dataIntervalId = setInterval(function () {
		this.updateMonthcalendar(this.updateMonthcalendar.bind(this));
	}.bind(this), this.updateInterval);
}
