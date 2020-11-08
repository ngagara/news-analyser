export default class NewsCardList {
  constructor(container, createNewsCard) {
    this.container = container;
    this.createNewsCard = createNewsCard;
  }

  _addCard(...args) {
    this.container.appendChild(this.createNewsCard(...args).create());
  };

  render(sliceFirst, sliceSecond, data) {
    return data.slice(sliceFirst, sliceSecond).forEach((item) => {
      this._addCard(
        item.url,
        item.urlToImage,
        item.title,
        item.description,
        item.source.name,
        item.publishedAt
      );
    });
  };

  clearCardList() {
      this.container.querySelectorAll('.cards__item').forEach((item)=>{
          item.remove();
      })
  }
};
