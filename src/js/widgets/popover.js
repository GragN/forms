export default class Popover {
  constructor(element) {
    this.element = element;
    this.popover = this.popover.bind(this);
    this.btn = this.element.querySelector(".btn");
    this.btn.addEventListener("click", this.popover);
  }

  createElement() {
    const area = document.createElement("div");
    area.classList.add("area");
    this.btn.insertAdjacentElement("afterend", area);
    const arrow = document.createElement("div");
    arrow.classList.add("arrow");
    this.btn.insertAdjacentElement("afterend", arrow);

    const header = document.createElement("div");
    header.classList.add("header");
    const footer = document.createElement("div");
    footer.classList.add("footer");

    header.append("Popover title");
    footer.append(
      "And here's some amazing content. It's very engaging. Right?"
    );

    area.appendChild(header);
    area.appendChild(footer);

    let area_height = -area.offsetHeight;
    let arrow_height = -arrow.offsetHeight;
    area.style.top = `${area_height + arrow_height}px`;
    arrow.style.top = `${arrow_height}px`;

    area.style.left = `calc(50% - ${area.offsetWidth / 2}px)`;
    arrow.style.left = `calc(50%)`;
  }

  deleteElement() {
    const area = this.element.querySelector(".area");
    area.remove();
    const arrow = this.element.querySelector(".arrow");
    arrow.remove();
  }

  popover() {
    const area = this.element.querySelector(".area");
    if (area == null) {
      this.createElement();
    } else {
      this.deleteElement();
    }
  }
}
