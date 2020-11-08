import "../pages/index.css";
import {NEWS_SERVER, API_KEY, PAGE_SIZE, CURRENT_DATE, WEEK_AGO} from "./constants/constants.js";
import {sequence} from "./utils/utils.js";
import NewsCard from "./components/NewsCard.js";
import NewsCardList from "./components/NewsCardList.js";
import SearchInput from "./components/SearchInput.js";
import NewsApi from "./modules/NewsApi.js";
import DataStorage from "./modules/DataStorage.js";
import ResultSearcher from "./components/ResultSearcher.js";

(function () {
  "use strict";

  const cardsContainer = document.querySelector(".cards__item-container");
  const input = document.querySelector(".searcher__input");
  const searcherButton = document.querySelector(".searcher__button");
  const searcherError = document.querySelector(".searcher__error");
  const buttonAddCards = document.querySelector(".cards__button");

  const newsApi = new NewsApi(NEWS_SERVER, API_KEY, PAGE_SIZE, CURRENT_DATE, WEEK_AGO);
  const searchInput = new SearchInput(input, searcherButton, searcherError);
  const createNewsCard = (...args) => new NewsCard(...args);
  const cardList = new NewsCardList(cardsContainer, createNewsCard);
  const dataStorage = new DataStorage();
  const resultSearcher = new ResultSearcher(document.querySelector(".result-searcher"));

  let firstCount = sequence(3, 3);
  let secondCount = sequence(6, 3);

  //событие на добавление новых карточек новостей
  buttonAddCards.addEventListener("click", (event) => {
    event.preventDefault();
    cardList.render(firstCount(), secondCount(), dataStorage.getNews());
    resultSearcher.deleteButtonAddCards(dataStorage.getNews());
  });

  //событие валидация на инпут
   input.addEventListener("input", () => {
    searchInput.checkInputValidity();
   });

  //событие на самбит
    searcherButton.addEventListener("click", (event) => {
    event.preventDefault();
    firstCount = sequence(3, 3);
    secondCount = sequence(6, 3);
    searchInput.checkInputValidity();
    dataStorage.clearStorage();
    searchInput.setSubmitButtonState(false);
    newsApi.getNews(input.value).then((result) => {
      dataStorage.setRequest(input.value);
      cardList.clearCardList();
      resultSearcher.togglePreloader();
      resultSearcher.addBlockResultCards(false);
      searchInput.resetInputValue();
      dataStorage.setNews(result.articles);
      resultSearcher.addBlockSearchFailed(result.articles);
      resultSearcher.addBlockResultCards(true);
      cardList.render(0, 3, dataStorage.getNews());
      searchInput.setSubmitButtonState(true);
      resultSearcher.deleteButtonAddCards(dataStorage.getNews());
      })
      .catch((err) => {
        alert(err);
      })
      .finally(resultSearcher.togglePreloader());
  });

  //проверка наличия данных в локал сторадж и загрузка страницы
  if (localStorage.getItem('articles') !== null || dataStorage.getNews().length === 0) {
    resultSearcher.addBlockResultCards(true);
    resultSearcher.deleteButtonAddCards(dataStorage.getNews());
    cardList.render(0, 3, dataStorage.getNews());
  }else {
    resultSearcher.addBlockResultCards(false);
  }

})();
