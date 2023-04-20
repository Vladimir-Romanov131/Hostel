class FontSizeChanger {
  constructor() {
    this.MIN_FONT_SIZE = 12;
    this.MAX_FONT_SIZE = 19;
    this.currentFontSize = parseInt(
      window.getComputedStyle(document.body, null).getPropertyValue("font-size")
    );

    document
      .getElementById("fontsize-decrease")
      .addEventListener("click", () => this.updateFontSize(-2));
    document
      .getElementById("fontsize-increase")
      .addEventListener("click", () => this.updateFontSize(2));

    if (localStorage.getItem("fontSize")) {
      this.currentFontSize = parseInt(localStorage.getItem("fontSize"));
      this.updateFontSize(0);
    }
  }

  updateFontSize(delta) {
    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
      let style = window.getComputedStyle(paragraphs[i], null);
      let fontSize = parseInt(style.fontSize) + delta;
      if (fontSize >= this.MIN_FONT_SIZE && fontSize <= this.MAX_FONT_SIZE) {
        paragraphs[i].style.fontSize = fontSize + "px";
      }
    }

    this.currentFontSize += delta;
    if (this.currentFontSize < this.MIN_FONT_SIZE) {
      this.currentFontSize = this.MIN_FONT_SIZE;
    } else if (this.currentFontSize > this.MAX_FONT_SIZE) {
      this.currentFontSize = this.MAX_FONT_SIZE;
    }
    document.getElementById("fontsize-value").textContent =
      this.currentFontSize;
    localStorage.setItem("fontSize", this.currentFontSize.toString());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new FontSizeChanger();
});
