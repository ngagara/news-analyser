export default class Statistics {
  constructor(storage) {
    this.storage = storage;
  }

  setTitle(title) {
    title.textContent = `Вы спросили: «${this.storage.getRequest()}»`;
  }

  setTotalResults(results) {
    results.textContent = `${this.storage.getNews().length}`;
  }

  setTotalRequest(titleRequest) {
    let count = 0;
    this.storage.getNews().forEach((item) => {
      let str = item.title
        .toUpperCase()
        .indexOf(`${this.storage.getRequest()}`.toUpperCase());
      if (str !== -1) {
        count++;
      }
    });
    titleRequest.textContent = `${count}`;
  }
  //Метод расставляет число в диаграмму аналитики м красит полоску
  setStatisticsDay(container) {
    let date = new Date();
    date.setDate(date.getDate() - 6);
    container.forEach((item) => {
      date.setDate(date.getDate() + 1);
      let totalRequest = this._getRequestDays(date.toISOString().substr(0, 10));
      item.textContent = `${totalRequest}`;
      item.style.width = `${totalRequest}%`;
    });
  }

  // счетчик упоминаний
  _getRequestDays(currentDate) {
    let count = 0;
    this.storage.getNews().forEach((item) => {
      let dateNews = item.publishedAt.substr(0, 10);
      if (dateNews === currentDate) {
        count++;
      }
    });
    return count;
  }
}
