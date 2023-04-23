$(document).ready(function () {
  var calendar = $("#calendar").fullCalendar({
    defaultView: "month",
    events: [],
    timeFormat: "YYYY-MM-DDTHH",
  });

  // получаем данные из файла reservation.json
  fetch("../reservation/reservation.json")
    .then((response) => response.json())
    .then((data) => {
      const checkinDate = data.checkinDate;
      const checkoutDate = data.checkoutDate;
      console.log("checkinDate:", checkinDate);
      console.log("checkoutDate:", checkoutDate);

      // отображаем забронированные даты в календаре
      calendar.fullCalendar("renderEvent", {
        title: "Забронировано",
        start: checkinDate,
        end: checkoutDate,
        color: "red",
      });

      calendar.fullCalendar("render");
    })
    .catch((error) => console.error(error));
});
