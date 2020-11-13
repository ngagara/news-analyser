export default class ResultSearcher {
  constructor(section) {
    this.section = section;
  }
  // добавляет прелоадер
  togglePreloader() {
    this.section
      .querySelector(".preloader")
      .classList.toggle("result-searcher_toggle");
  }
  // добавляет блок результатов
  addBlockSearchFailed(result) {
    if (result.length === 0) {
      this.section
        .querySelector(".search-failed")
        .classList.add("result-searcher_toggle");
    } else {
      this.section
        .querySelector(".search-failed")
        .classList.remove("result-searcher_toggle");
    }
  }
  addBlockResultCards(state) {
    if (state) {
      this.section
        .querySelector(".cards")
        .classList.add("result-searcher_toggle");
    } else {
      this.section
        .querySelector(".cards")
        .classList.remove("result-searcher_toggle");
    }
  }
  // удаляет кнопку при наполнении контенейра
  deleteButtonAddCards(storageArray) {
    const blockCards = this.section.querySelector(".cards");
    const nodeArray = Array.from(blockCards.querySelectorAll(".cards__item"));
    if (nodeArray.length === storageArray.length || storageArray.length <= 3) {
      blockCards
        .querySelector(".cards__button")
        .classList.add("cards__button_toggle");
    } else {
      blockCards
        .querySelector(".cards__button")
        .classList.remove("cards__button_toggle");
    }
  }
}
