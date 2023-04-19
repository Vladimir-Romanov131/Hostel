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
//
function Dark() {
  const imgMain = document.getElementById("img-main");
  const DivMain = document.getElementById("MainBackground");
  const DivPanel = document.getElementById("PanelStyle");
  const DivLinck = document.querySelectorAll("#Panel-Link");
  const allParagraphs = document.querySelectorAll("p");
  const allTitle = document.querySelectorAll("h1");
  const Li = document.querySelectorAll("li");
  imgMain.classList.remove("img_intro-shadow");
  imgMain.classList.add("img_intro-shadowBlack");

  DivMain.classList.remove("MainBackground");
  DivMain.classList.add("MainBackground-black");

  DivPanel.classList.remove("PanelStyle");
  DivPanel.classList.add("PanelStyle-black");
  DivPanel.classList.remove("Panel");
  DivPanel.classList.add("Panel-black");

  allParagraphs.forEach(function (paragraph) {
    paragraph.style.color = "white";
  });
  allTitle.forEach(function (allTitle) {
    allTitle.style.color = "white";
  });

  DivLinck.forEach(function (DivLinck) {
    DivLinck.classList.replace("link", "link-black");
  });
  Li.forEach(function (Li) {
    Li.style.color = "white";
  });
}
function Light() {
  const imgMain = document.getElementById("img-main");
  const DivMain = document.getElementById("MainBackground");
  const DivPanel = document.getElementById("PanelStyle");
  const DivLinck = document.querySelectorAll("#Panel-Link");
  const allParagraphs = document.querySelectorAll("p");
  const allTitle = document.querySelectorAll("h1");
  const Li = document.querySelectorAll("li");
  imgMain.classList.remove("img_intro-shadowBlack");
  imgMain.classList.add("img_intro-shadow");

  DivMain.classList.remove("MainBackground-black");
  DivMain.classList.add("MainBackground");

  DivPanel.classList.remove("PanelStyle-black");
  DivPanel.classList.add("PanelStyle");

  DivPanel.classList.remove("Panel-black");
  DivPanel.classList.add("Panel");

  allParagraphs.forEach(function (paragraph) {
    paragraph.style.color = "black";
  });
  allTitle.forEach(function (allTitle) {
    allTitle.style.color = "black";
  });

  DivLinck.forEach(function (DivLinck) {
    DivLinck.classList.replace("link-black", "link");
  });
  Li.forEach(function (Li) {
    Li.style.color = "black";
  });
}
