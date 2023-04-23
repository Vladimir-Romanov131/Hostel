$(document).ready(function () {
  var calendar = $("#calendar").fullCalendar({
    defaultView: "month",
    events: [],
    timeFormat: "YYYY-MM-DDTHH",
    editable: false,
    viewRender: function (view, element) {
      // получаем данные из файла reservation.json
      fetch("../reservation/reservation.json")
        .then((response) => response.json())
        .then((data) => {
          const checkinDate = moment(data.checkinDate);
          const checkoutDate = moment(data.checkoutDate);
          const checkinDateStr = checkinDate.format("YYYY-MM-DD");
          const checkoutDateStr = checkoutDate.format("YYYY-MM-DD");
          console.log("checkinDate:", checkinDateStr);
          console.log("checkoutDate:", checkoutDateStr);

          calendar.fullCalendar("removeEvents");
          calendar.fullCalendar("renderEvent", {
            title: "Забронировано (номер: " + data.roomType + ")",
            start: checkinDateStr,
            end: checkoutDateStr,
            color: "red",
          });

          calendar.fullCalendar("rerenderEvents");
        })
        .catch((error) => console.error(error));
    },
  });
});
