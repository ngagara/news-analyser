export const NEWS_SERVER = process.env.NODE_ENV === 'development' ? 'http://newsapi.org/v2/everything?':'https://nomoreparties.co/news/v2/top-headlines?';
export const GITHUB_SERVER = process.env.NODE_ENV === 'development' ? 'http://api.github.com' : 'https://api.github.com';

// запасной токен fba8a368f2b74a1bb7782a20572dd350
export const API_KEY = 'dd18b6d07abf4cb1a5cf95d97cf44298';
export const PAGE_SIZE = '100';

export const DATE = new Date();

export const CURRENT_DATE = `${DATE.getFullYear()}-${DATE.getMonth()+1}-${DATE.getDate()}`;

export const WEEK_AGO = `${DATE.getFullYear()}-${DATE.getMonth()+1}-${DATE.getDate() - 6}`;

export const ERROR_MESSAGES  = {
  valueMissing: "Нужно ввести ключевое слово",
  tooShort: "Должно быть от 2 до 30 символов",
};
