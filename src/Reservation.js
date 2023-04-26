fetch("../account/data.json")
  .then((response) => {
    // Classic..............................................................................
    document.addEventListener("DOMContentLoaded", function () {
      const classicLink = document.querySelector("#Classic");
      classicLink.addEventListener("click", (event) => {
        event.preventDefault();
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
                <br> 
                <p>*сохраните данные бронирования в папку reservation в корне программы</p>
              </form>
            </div>
          `;
        document.body.appendChild(modal);
        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", (event) => {
          modal.remove();
        });
        const checkinInput = modal.querySelector(".checkin-date");
        const checkoutInput = modal.querySelector(".checkout-date");
        const totalSpan = modal.querySelector(".total-price");
        let checkoutDate;
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
                  const roomType = "Classic";
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
        const form = modal.querySelector("form");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const checkinDate = checkinInput.value;
          const checkoutDate = checkoutInput.value;
          const totalPrice = totalSpan.innerHTML;
          const roomType = "Classic";
          const reservation = {
            roomType: roomType,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            totalPrice: totalPrice,
          };
          const reservationJSON = JSON.stringify(reservation);
          const blob = new Blob([reservationJSON], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "reservation.json";
          link.href = url;
          link.click();
          modal.remove();
          const successModal = document.createElement("div");
          successModal.classList.add("modal");
          successModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Номер успешно забронирован!</h2>
    </div>
  `;
          document.body.appendChild(successModal);
          const successCloseBtn = successModal.querySelector(".close");
          successCloseBtn.addEventListener("click", (event) => {
            successModal.remove();
          });
        });
      });
    });
    //Twin..................................................................................
    document.addEventListener("DOMContentLoaded", function () {
      const classicLink = document.querySelector("#Twin");
      classicLink.addEventListener("click", (event) => {
        event.preventDefault();
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
                <br> 
                <p>*сохраните данные бронирования в папку reservation в корне программы</p>
              </form>
            </div>
          `;
        document.body.appendChild(modal);
        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", (event) => {
          modal.remove();
        });
        const checkinInput = modal.querySelector(".checkin-date");
        const checkoutInput = modal.querySelector(".checkout-date");
        const totalSpan = modal.querySelector(".total-price");
        let checkoutDate;
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
                  const roomPrice = 6000;
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
        const form = modal.querySelector("form");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const checkinDate = checkinInput.value;
          const checkoutDate = checkoutInput.value;
          const totalPrice = totalSpan.innerHTML;
          const roomType = "Twin";
          const reservation = {
            roomType: roomType,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            totalPrice: totalPrice,
          };
          const reservationJSON = JSON.stringify(reservation);
          const blob = new Blob([reservationJSON], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "reservation.json";
          link.href = url;
          link.click();
          modal.remove();
          const successModal = document.createElement("div");
          successModal.classList.add("modal");
          successModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Номер успешно забронирован!</h2>
    </div>
  `;
          document.body.appendChild(successModal);
          const successCloseBtn = successModal.querySelector(".close");
          successCloseBtn.addEventListener("click", (event) => {
            successModal.remove();
          });
        });
      });
    });
    //King..................................................................................
    document.addEventListener("DOMContentLoaded", function () {
      const classicLink = document.querySelector("#King");
      classicLink.addEventListener("click", (event) => {
        event.preventDefault();
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
                <br> 
                <p>*сохраните данные бронирования в папку reservation в корне программы</p>
              </form>
            </div>
          `;
        document.body.appendChild(modal);
        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", (event) => {
          modal.remove();
        });
        const checkinInput = modal.querySelector(".checkin-date");
        const checkoutInput = modal.querySelector(".checkout-date");
        const totalSpan = modal.querySelector(".total-price");
        let checkoutDate;
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
                  const roomPrice = 5500;
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
        const form = modal.querySelector("form");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const checkinDate = checkinInput.value;
          const checkoutDate = checkoutInput.value;
          const totalPrice = totalSpan.innerHTML;
          const roomType = "King";
          const reservation = {
            roomType: roomType,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            totalPrice: totalPrice,
          };
          const reservationJSON = JSON.stringify(reservation);
          const blob = new Blob([reservationJSON], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "reservation.json";
          link.href = url;
          link.click();
          modal.remove();
          const successModal = document.createElement("div");
          successModal.classList.add("modal");
          successModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Номер успешно забронирован!</h2>
    </div>
  `;
          document.body.appendChild(successModal);
          const successCloseBtn = successModal.querySelector(".close");
          successCloseBtn.addEventListener("click", (event) => {
            successModal.remove();
          });
        });
      });
    });
    //Business-Suite........................................................................
    document.addEventListener("DOMContentLoaded", function () {
      const classicLink = document.querySelector("#Business-Suite");
      classicLink.addEventListener("click", (event) => {
        event.preventDefault();
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
                <br> 
                <p>*сохраните данные бронирования в папку reservation в корне программы</p>
              </form>
            </div>
          `;
        document.body.appendChild(modal);
        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", (event) => {
          modal.remove();
        });
        const checkinInput = modal.querySelector(".checkin-date");
        const checkoutInput = modal.querySelector(".checkout-date");
        const totalSpan = modal.querySelector(".total-price");
        let checkoutDate;
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
                  const roomPrice = 7000;
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
        const form = modal.querySelector("form");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const checkinDate = checkinInput.value;
          const checkoutDate = checkoutInput.value;
          const totalPrice = totalSpan.innerHTML;
          const roomType = "Business-Suite";
          const reservation = {
            roomType: roomType,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            totalPrice: totalPrice,
          };
          const reservationJSON = JSON.stringify(reservation);
          const blob = new Blob([reservationJSON], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "reservation.json";
          link.href = url;
          link.click();
          modal.remove();
          const successModal = document.createElement("div");
          successModal.classList.add("modal");
          successModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Номер успешно забронирован!</h2>
    </div>
  `;
          document.body.appendChild(successModal);
          const successCloseBtn = successModal.querySelector(".close");
          successCloseBtn.addEventListener("click", (event) => {
            successModal.remove();
          });
        });
      });
    });
    //Suite.................................................................................
    document.addEventListener("DOMContentLoaded", function () {
      const classicLink = document.querySelector("#Suite");
      classicLink.addEventListener("click", (event) => {
        event.preventDefault();
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
                <br> 
                <p>*сохраните данные бронирования в папку reservation в корне программы</p>
              </form>
            </div>
          `;
        document.body.appendChild(modal);
        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", (event) => {
          modal.remove();
        });
        const checkinInput = modal.querySelector(".checkin-date");
        const checkoutInput = modal.querySelector(".checkout-date");
        const totalSpan = modal.querySelector(".total-price");
        let checkoutDate;
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
                  const roomPrice = 9000;
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
        const form = modal.querySelector("form");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const checkinDate = checkinInput.value;
          const checkoutDate = checkoutInput.value;
          const totalPrice = totalSpan.innerHTML;
          const roomType = "Suite";
          const reservation = {
            roomType: roomType,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            totalPrice: totalPrice,
          };
          const reservationJSON = JSON.stringify(reservation);
          const blob = new Blob([reservationJSON], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "reservation.json";
          link.href = url;
          link.click();
          modal.remove();
          const successModal = document.createElement("div");
          successModal.classList.add("modal");
          successModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Номер успешно забронирован!</h2>
    </div>
  `;
          document.body.appendChild(successModal);
          const successCloseBtn = successModal.querySelector(".close");
          successCloseBtn.addEventListener("click", (event) => {
            successModal.remove();
          });
        });
      });
    });
  })
  .catch((error) => {
    // файл не найден, выводим сообщение пользователю
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Ошибка загрузки данных</h2>
        <p>Пожалуйста, зарегистрируйтесь для доступа к бронированию</p>
      </div>
    `;
    document.body.appendChild(modal);
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", (event) => {
      modal.remove();
    });
  });
