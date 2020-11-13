export default class NewsApi {
  constructor(NEWS_SERVER, API_KEY, PAGE_SIZE, CURRENT_DATE, WEEK_AGO) {
    this.NEWS_SERVER = NEWS_SERVER;
    this.API_KEY = API_KEY;
    this.PAGE_SIZE = PAGE_SIZE;
    this.CURRENT_DATE = CURRENT_DATE;
    this.WEEK_AGO = WEEK_AGO;
  }

  getNews(news) {
    return fetch(
      `${this.NEWS_SERVER}` +
        `pageSize=${this.PAGE_SIZE}&` +
        `q=${news}&` +
        `from=${this.WEEK_AGO}&` +
        `to=${this.CURRENT_DATE}&` +
        `apiKey=${this.API_KEY}`
    ).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. Ошибка: ${res.status}.`);
      } else {
        return res.json();
      }
    });
  }
}
