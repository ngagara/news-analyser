export default class GithubApi {
  constructor(GITHUB_SERVER) {
    this.GITHUB_SERVER = GITHUB_SERVER;
  }

  getCommits() {
    return fetch(`${this.GITHUB_SERVER}/repos/ngagara/news-analyser/commits`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}. Запрос не выполнен.`);
        } else {
          return res.json();
        }
      });
  }
}
