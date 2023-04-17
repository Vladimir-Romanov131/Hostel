// // Скрипт работы меню, активация дивов и скрытие
class Toggle {
  constructor() {
    this.currentActive = null;
  }

  activate(element) {
    if (this.currentActive && this.currentActive !== element) {
      this.currentActive.style.display = "none";
    }
    element.style.display = element.style.display === "none" ? "block" : "none";
    this.currentActive = element;
  }
}
const toggle = new Toggle();
// проверка на наличие аккаунта
class FileChecker {
  constructor(fileName, loginDivId, profileDivId) {
    this.fileName = fileName;
    this.loginDivId = loginDivId;
    this.profileDivId = profileDivId;
  }

  checkFile() {
    fetch(this.fileName)
      .then((response) => {
        // файл найден
        document.getElementById(this.loginDivId).style.display = "none";
        document.getElementById(this.profileDivId).style.display = "block";
      })
      .catch((error) => {
        // файл не найден
        document.getElementById(this.loginDivId).style.display = "block";
        document.getElementById(this.profileDivId).style.display = "none";
      });
  }
}

// Ожидать загрузки страницы
document.addEventListener("DOMContentLoaded", function (event) {
  const checker = new FileChecker("login.json", "Login", "profile");
  checker.checkFile();
});
//
