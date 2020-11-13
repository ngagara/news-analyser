import { formatDateCard } from "../utils/utils.js";

export default class NewsCard {
  constructor(url, urlToImage, title, description, source, publishedAt) {
    this.url = url;
    this.urlToImage = urlToImage;
    this.title = title;
    this.description = description;
    this.source = source;
    this.publishedAt = publishedAt;
  }
  create() {
    const cardsItem = this._createAndAddClass("li", "cards__item");
    const cardsLink = this._createAndAddClass("a", "cards__link");
    cardsLink.setAttribute("href", this.url);
    cardsLink.setAttribute("target", "blank");
    cardsLink.classList.add("links");
    const cardsImage = this._createAndAddClass("img", "cards__image");
    cardsImage.setAttribute("alt", "превью картинка новостей");
    this._setImagePlug(this.urlToImage, cardsImage);
    const cardsDate = this._createAndAddClass("p", "cards__date");
    cardsDate.textContent = formatDateCard(this.publishedAt);
    const cardsTitle = this._createAndAddClass("h3", "cards__title");
    cardsTitle.textContent = this.title;
    const cardsText = this._createAndAddClass("p", "cards__text");
    cardsText.textContent = this.description;
    const cardsSource = this._createAndAddClass("p", "cards__source");
    cardsSource.textContent = this.source;

    cardsItem.appendChild(cardsLink);
    cardsLink.appendChild(cardsImage);
    cardsLink.appendChild(cardsDate);
    cardsLink.appendChild(cardsTitle);
    cardsLink.appendChild(cardsText);
    cardsLink.appendChild(cardsSource);

    this.cardElement = cardsItem;

    return cardsItem;
  }

  _createAndAddClass(tag, classes) {
    const element = document.createElement(tag);
    element.classList.add(classes);
    return element;
  }
  //заглушка для картинок
  _setImagePlug(url, image) {
    if (url === null) {
      image.setAttribute("src", "./images/image_08.jpg");
    } else {
      image.setAttribute("src", url);
    }
  }
}
