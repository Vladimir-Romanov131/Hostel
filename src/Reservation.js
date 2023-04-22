document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылку на номер Classic
  const classicLink = document.querySelector("#Classic");

  // Обрабатываем нажатие на ссылку
  classicLink.addEventListener("click", (event) => {
    event.preventDefault();

    // Создаем модальное окно
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
            <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Выберите даты заезда и выезда:</h2>
              <form>
                <label>Заезд:</label>
                <input type="text" class="checkin-date" required>
                <label>Выезд:</label>
                <input type="text" class="checkout-date" required>
                <br>
                <label>Общая стоимость:</label>
                <span class="total-price"></span>
                <br>
                <button type="submit">Забронировать</button>
              </form>
            </div>
          `;
    document.body.appendChild(modal);

    // Добавляем обработчик на закрытие модального окна
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", (event) => {
      modal.remove();
    });
    // Инициализируем flatpickr для выбора дат
    const checkinInput = modal.querySelector(".checkin-date");
    const checkoutInput = modal.querySelector(".checkout-date");
    const totalSpan = modal.querySelector(".total-price");
    let checkoutDate; // сохраняем выбранную дату выезда
    flatpickr(checkinInput, {
      enableTime: false,
      dateFormat: "Y-m-d",
      minDate: "today",
      onClose: function (selectedDates, dateStr, instance) {
        const checkinDate = selectedDates[0];
        checkoutDate = null;
        if (checkoutInput._flatpickr) {
          checkoutInput._flatpickr.destroy();
        }
        flatpickr(checkoutInput, {
          enableTime: false,
          dateFormat: "Y-m-d",
          minDate: dateStr,
          onClose: function (selectedDates, dateStr, instance) {
            checkoutDate = selectedDates[0];
            if (checkoutDate && checkinDate) {
              const diffTime = Math.abs(
                checkinDate.getTime() - checkoutDate.getTime()
              );
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              const roomPrice = 4500;
              const totalPrice = roomPrice * diffDays;

              if (!isNaN(totalPrice)) {
                totalSpan.innerHTML = totalPrice + " RUB";
              } else {
                totalSpan.innerHTML = "Ошибка в расчете стоимости";
              }
            }
          },
        });
      },
    });
    // Обрабатываем отправку формы бронирования
    const form = modal.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Получаем данные формы
      const checkinDate = checkinInput.value;
      const checkoutDate = checkoutInput.value;
      const totalPrice = totalSpan.innerHTML;

      // Сохраняем данные в объект
      const reservation = {
        checkinDate: checkinDate,
        checkoutDate: checkoutDate,
        totalPrice: totalPrice,
      };

      // Преобразуем объект в JSON-строку
      const reservationJSON = JSON.stringify(reservation);

      // Создаем объект Blob из JSON-строки
      const blob = new Blob([reservationJSON], { type: "application/json" });

      // Генерируем ссылку на Blob-объект и сохраняем его в файл
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "reservation.json";
      link.href = url;
      link.click();

      // Удаляем модальное окно с формой бронирования
      modal.remove();

      // Показываем модальное окно с сообщением об успешном бронировании
      const successModal = document.createElement("div");
      successModal.classList.add("modal");
      successModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Номер успешно забронирован!</h2>
    </div>
  `;
      document.body.appendChild(successModal);

      // Добавляем обработчик на закрытие модального окна
      const successCloseBtn = successModal.querySelector(".close");
      successCloseBtn.addEventListener("click", (event) => {
        successModal.remove();
      });
    });
  });
});
