export default class DataStorage {
  setNews(data) {
    localStorage.setItem("articles", JSON.stringify(data));
  };
  getNews() {
    return JSON.parse(localStorage.getItem("articles"));
  };
  //Методы ставят и забирают велью инпута
  setRequest(request){
    localStorage.setItem("request", `${request}`);
  };
  getRequest(){
    return localStorage.getItem("request");
  };
  clearStorage() {
    localStorage.clear();
  }
}
