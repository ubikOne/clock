function countDown() {
  var date = new Date();

  var day = date.getDate();
    if (day < 10) {
      day = '0' + day;
    };
  var month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    };

  var month1 = date.getMonth();
  var monthName = new Array(12);
    monthName[0] = 'Stycznia';
    monthName[1] = 'Lutego';
    monthName[2] = 'Marca';
    monthName[3] = 'Kwietnia';
    monthName[4] = 'Maja';
    monthName[5] = 'Czerwca';
    monthName[6] = 'Lipca';
    monthName[7] = 'Sierpnia';
    monthName[8] = 'Września';
    monthName[9] = 'Października';
    monthName[10] = 'Listopada';
    monthName[11] = 'Grudnia';

  var monthNameDisplay = monthName[month1];

  var year = date.getFullYear();

  var hour = date.getHours();
    if (hour < 10) {
      hour = '0' + hour;
    };
  var min = date.getMinutes();
    if (min < 10) {
      min = '0' + min;
    };
  var sec = date.getSeconds();
    if (sec < 10) {
      sec = '0' + sec;
    };

  var weekday = new Array(7);
    weekday[0] = "Niedziela";
    weekday[1] = "Poniedziałek";
    weekday[2] = "Wtorek";
    weekday[3] = "Środa";
    weekday[4] = "Czwartek";
    weekday[5] = "Piątek";
    weekday[6] = "Sobota";

  var currentDay = weekday[date.getDay()];

  document.getElementById('date').innerHTML = day + ' ' + monthNameDisplay + ' ' + year;
  document.getElementById('date1').innerHTML = day + '.' + month + '.' + year;
  document.getElementById('time').innerHTML = hour + ':' + min + ':' + sec;
  document.getElementById('day').innerHTML = currentDay;

  setTimeout(countDown, 1000);
};
