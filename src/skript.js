// // Скрипт работы меню, активация дивов и скрытие....................................................................................
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
// проверка на наличие аккаунта..........................................................................................................
class FileChecker {
  constructor(fileName, loginDivId, profileDivId) {
    this.fileName = "../account/data.json";
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
//темная тема..........................................................................................................
document.addEventListener("DOMContentLoaded", () => {
  class DarkMode {
    constructor() {
      this.imgMain = document.getElementById("img-main");
      this.DivMain = document.getElementById("MainBackground");
      this.DivPanel = document.getElementById("PanelStyle");
      this.DivLinck = document.querySelectorAll("#Panel-Link");
      this.allParagraphs = document.querySelectorAll("p");
      this.allTitle = document.querySelectorAll("h1");
      this.Li = document.querySelectorAll("li");
    }
    setDarkMode() {
      this.imgMain.classList.remove("img_intro-shadow");
      this.imgMain.classList.add("img_intro-shadowBlack");

      this.DivMain.classList.remove("MainBackground");
      this.DivMain.classList.add("MainBackground-black");

      this.DivPanel.classList.remove("PanelStyle");
      this.DivPanel.classList.add("PanelStyle-black");
      this.DivPanel.classList.remove("Panel");
      this.DivPanel.classList.add("Panel-black");

      this.allParagraphs.forEach(function (paragraph) {
        paragraph.style.color = "white";
      });
      this.allTitle.forEach(function (allTitle) {
        allTitle.style.color = "white";
      });

      this.DivLinck.forEach(function (DivLinck) {
        DivLinck.classList.replace("link", "link-black");
      });

      this.Li.forEach(function (Li) {
        Li.style.color = "white";
      });
    }
  }
  const darkMode = new DarkMode();
  document.querySelector("#btn-dark-mode").addEventListener("click", () => {
    darkMode.setDarkMode();
  });
});
// светлая тема..........................................................................................................
document.addEventListener("DOMContentLoaded", () => {
  class LightMode {
    constructor() {
      this.imgMain = document.getElementById("img-main");
      this.DivMain = document.getElementById("MainBackground");
      this.DivPanel = document.getElementById("PanelStyle");
      this.DivLinck = document.querySelectorAll("#Panel-Link");
      this.allParagraphs = document.querySelectorAll("p");
      this.allTitle = document.querySelectorAll("h1");
      this.Li = document.querySelectorAll("li");
    }

    setLightMode() {
      this.imgMain.classList.remove("img_intro-shadowBlack");
      this.imgMain.classList.add("img_intro-shadow");

      this.DivMain.classList.remove("MainBackground-black");
      this.DivMain.classList.add("MainBackground");

      this.DivPanel.classList.remove("PanelStyle-black");
      this.DivPanel.classList.add("PanelStyle");

      this.DivPanel.classList.remove("Panel-black");
      this.DivPanel.classList.add("Panel");

      this.allParagraphs.forEach(function (paragraph) {
        paragraph.style.color = "black";
      });

      this.allTitle.forEach(function (allTitle) {
        allTitle.style.color = "black";
      });

      this.DivLinck.forEach(function (DivLinck) {
        DivLinck.classList.replace("link-black", "link");
      });

      this.Li.forEach(function (Li) {
        Li.style.color = "black";
      });
    }
  }

  const lightMode = new LightMode();

  document.querySelector("#btn-light-mode").addEventListener("click", () => {
    lightMode.setLightMode();
  });
});
//..........................................................................................................
document.addEventListener("DOMContentLoaded", () => {
  // Получаем ссылку на див #profile
  const profileDiv = document.getElementById("profile");

  // Загружаем файл data.json с помощью Fetch API
  fetch("../account/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Создаем HTML-разметку для отображения информации из файла
      const html = `
        <p>Имя: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Телефон: ${data.phone}</p>
      `;
      // Вставляем созданную HTML-разметку в див #profile
      profileDiv.innerHTML = html;
      // Показываем див #profile
      profileDiv.style.display = "block";
    })
    .catch((error) => {
      console.error("Ошибка загрузки файла data.json", error);
    });
});
//..........................................................................................................
