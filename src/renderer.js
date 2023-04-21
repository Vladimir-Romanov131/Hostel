// Функция для сохранения данных в файл
function saveToFile(data) {
  const content = JSON.stringify(data);

  // Создаем объект Blob с данными
  const blob = new Blob([content], { type: "text/json" });

  // Создаем ссылку на скачивание файла внутри тега <a>
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "data.json");

  // Добавляем ссылку на страницу и симулируем клик для скачивания файла
  document.body.appendChild(link);
  link.click();

  // Удаляем ссылку и объект Blob
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

// Функция для валидации данных
function validateData(name, email, phone, password, confirmPassword) {
  // Создаем флаг, который определяет, прошли ли все проверки
  let isValid = true;

  // Проверяем, что пароль и его подтверждение совпадают
  if (password !== confirmPassword) {
    alert("Пароли не совпадают!");
    isValid = false;
  }

  // Проверяем, что номер телефона содержит только цифры
  if (!/^\+?\d+$/.test(phone)) {
    alert("Номер телефона должен содержать только цифры или знак '+'!");
    isValid = false;
  }

  // Проверяем, что номер телефона содержит 10 цифр
  if (phone.length !== 12) {
    alert("Номер телефона должен содержать 10 цифр!");
    isValid = false;
  }

  // Возвращаем результат валидации
  return isValid;
}

// Событие нажатия на кнопку сохранения
document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.querySelector("#save-button");
  saveButton.addEventListener("click", (event) => {
    event.preventDefault(); // Отменяем стандартное поведение кнопки

    // Получаем данные, введенные пользователем
    const name = document.querySelector("#name-input").value;
    const surname = document.querySelector("#surname-input").value;
    const patronymic = document.querySelector("#patronymic-input").value;
    const email = document.querySelector("#email-input").value;
    const phone = document.querySelector("#phone-input").value;
    const password = document.querySelector("#password-input").value;
    const confirmPassword = document.querySelector(
      "#confirm-password-input"
    ).value;

    // Проверяем данные на валидность
    const isValid = validateData(name, email, phone, password, confirmPassword);
    // Если данные прошли валидацию, сохраняем их в файл
    if (isValid) {
      const data = { name, surname, patronymic, email, phone, password };
      saveToFile(data);
    }
  });
});
//
