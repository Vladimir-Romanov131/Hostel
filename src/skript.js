// // Скрипт работы меню, активация дивов и скрытие....................................................................................
class ToggleInterface {
  activate(element) {
    throw new Error("Метод activate не реализован");
  }
}
class Toggle extends ToggleInterface {
  constructor() {
    super();
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
      this.Label = document.querySelectorAll("label");
      this.Span = document.querySelectorAll("span");
    }
    setDarkMode() {
      this.imgMain.classList.remove("img_intro-Purple");
      this.imgMain.classList.remove("img_intro-Green");
      this.imgMain.classList.remove("img_intro-shadow");
      this.imgMain.classList.add("img_intro-shadowBlack");

      this.DivMain.classList.remove("MainBackground");
      this.DivMain.classList.remove("MainBackground-purple");
      this.DivMain.classList.remove("MainBackground-green");
      this.DivMain.classList.add("MainBackground-black");

      this.DivPanel.classList.remove("PanelStyle");
      this.DivPanel.classList.remove("PanelStyle-purple");
      this.DivPanel.classList.remove("PanelStyle-green");
      this.DivPanel.classList.add("PanelStyle-black");

      this.DivPanel.classList.remove("Panel");
      this.DivPanel.classList.remove("Panel-purple");
      this.DivPanel.classList.remove("Panel-green");
      this.DivPanel.classList.add("Panel-black");

      this.allParagraphs.forEach(function (paragraph) {
        paragraph.style.color = "white";
      });
      this.allTitle.forEach(function (allTitle) {
        allTitle.style.color = "white";
      });
      this.Label.forEach(function (Label) {
        Label.style.color = "white";
      });
      this.Span.forEach(function (Span) {
        Span.style.color = "white";
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
      this.imgMain.classList.remove("img_intro-Purple");
      this.imgMain.classList.remove("img_intro-Green");
      this.imgMain.classList.remove("img_intro-shadowBlack");
      this.imgMain.classList.add("img_intro-shadow");

      this.DivMain.classList.remove("MainBackground-black");
      this.DivMain.classList.remove("MainBackground-purple");
      this.DivMain.classList.remove("MainBackground-green");
      this.DivMain.classList.add("MainBackground");

      this.DivPanel.classList.remove("PanelStyle-black");
      this.DivPanel.classList.remove("PanelStyle-purple");
      this.DivPanel.classList.remove("PanelStyle-green");
      this.DivPanel.classList.add("PanelStyle");

      this.DivPanel.classList.remove("Panel-black");
      this.DivPanel.classList.remove("Panel-purple");
      this.DivPanel.classList.remove("Panel-green");
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
  // Получаем ссылки на параграфы
  const nameParagraph = document.getElementById("nameP");
  const surnameParagraph = document.getElementById("surnameP");
  const patronymicParagraph = document.getElementById("patronymicP");
  const emailParagraph = document.getElementById("emailP");
  const phoneParagraph = document.getElementById("phoneP");

  // Загружаем файл data.json с помощью Fetch API
  fetch("../account/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Вставляем данные из файла внутрь параграфов
      nameParagraph.innerHTML += ` ${data.name}`;
      surnameParagraph.innerHTML += ` ${data.surname}`;
      patronymicParagraph.innerHTML += ` ${data.patronymic}`;
      emailParagraph.innerHTML += ` ${data.email}`;
      phoneParagraph.innerHTML += ` ${data.phone}`;
    })
    .catch((error) => {
      console.error("Ошибка загрузки файла data.json", error);
    });
});
//Зеленая тема..........................................................................................................
document.addEventListener("DOMContentLoaded", () => {
  class GreenMode {
    constructor() {
      this.imgMain = document.getElementById("img-main");
      this.DivMain = document.getElementById("MainBackground");
      this.DivPanel = document.getElementById("PanelStyle");
      this.DivLinck = document.querySelectorAll("#Panel-Link");
      this.allParagraphs = document.querySelectorAll("p");
      this.allTitle = document.querySelectorAll("h1");
      this.Li = document.querySelectorAll("li");
      this.Label = document.querySelectorAll("label");
      this.Span = document.querySelectorAll("span");
    }
    setGreenMode() {
      this.imgMain.classList.remove("img_intro-Purple");
      this.imgMain.classList.remove("img_intro-shadow");
      this.imgMain.classList.remove("img_intro-shadowBlack");
      this.imgMain.classList.add("img_intro-Green");

      this.DivMain.classList.remove("MainBackground-black");
      this.DivMain.classList.remove("MainBackground-purple");
      this.DivMain.classList.remove("MainBackground");
      this.DivMain.classList.add("MainBackground-green");

      this.DivPanel.classList.remove("PanelStyle-black");
      this.DivPanel.classList.remove("PanelStyle-purple");
      this.DivPanel.classList.remove("PanelStyle");
      this.DivPanel.classList.add("PanelStyle-green");

      this.DivPanel.classList.remove("Panel-black");
      this.DivPanel.classList.remove("Panel-purple");
      this.DivPanel.classList.remove("Panel");
      this.DivPanel.classList.add("Panel-green");

      this.allParagraphs.forEach(function (paragraph) {
        paragraph.style.color = "black";
      });
      this.allTitle.forEach(function (allTitle) {
        allTitle.style.color = "black";
      });
      this.Label.forEach(function (Label) {
        Label.style.color = "black";
      });
      this.Span.forEach(function (Span) {
        Span.style.color = "black";
      });

      this.DivLinck.forEach(function (DivLinck) {
        DivLinck.classList.replace("link", "link-green");
      });

      this.Li.forEach(function (Li) {
        Li.style.color = "black";
      });
    }
  }
  const greenMode = new GreenMode();
  document.querySelector("#btn-green-mode").addEventListener("click", () => {
    greenMode.setGreenMode();
  });
});
//Фиолетовый тема..........................................................................................................
document.addEventListener("DOMContentLoaded", () => {
  class PurpleMode {
    constructor() {
      this.imgMain = document.getElementById("img-main");
      this.DivMain = document.getElementById("MainBackground");
      this.DivPanel = document.getElementById("PanelStyle");
      this.DivLinck = document.querySelectorAll("#Panel-Link");
      this.allParagraphs = document.querySelectorAll("p");
      this.allTitle = document.querySelectorAll("h1");
      this.Li = document.querySelectorAll("li");
      this.Label = document.querySelectorAll("label");
      this.Span = document.querySelectorAll("span");
    }
    setPurpleMode() {
      this.imgMain.classList.remove("img_intro-Green");
      this.imgMain.classList.remove("img_intro-shadow");
      this.imgMain.classList.remove("img_intro-shadowBlack");
      this.imgMain.classList.add("img_intro-Purple");

      this.DivMain.classList.remove("MainBackground-black");
      this.DivMain.classList.remove("MainBackground-green");
      this.DivMain.classList.remove("MainBackground");
      this.DivMain.classList.add("MainBackground-purple");

      this.DivPanel.classList.remove("PanelStyle-black");
      this.DivPanel.classList.remove("PanelStyle-green");
      this.DivPanel.classList.remove("PanelStyle");
      this.DivPanel.classList.add("PanelStyle-purple");

      this.DivPanel.classList.remove("Panel-black");
      this.DivPanel.classList.remove("Panel-green");
      this.DivPanel.classList.remove("Panel");
      this.DivPanel.classList.add("Panel-purple");

      this.allParagraphs.forEach(function (paragraph) {
        paragraph.style.color = "black";
      });
      this.allTitle.forEach(function (allTitle) {
        allTitle.style.color = "black";
      });
      this.Label.forEach(function (Label) {
        Label.style.color = "black";
      });
      this.Span.forEach(function (Span) {
        Span.style.color = "black";
      });

      this.DivLinck.forEach(function (DivLinck) {
        DivLinck.classList.replace("link", "link-purple");
      });

      this.Li.forEach(function (Li) {
        Li.style.color = "black";
      });
    }
  }
  const purpleMode = new PurpleMode();
  document.querySelector("#btn-purple-mode").addEventListener("click", () => {
    purpleMode.setPurpleMode();
  });
});
//
