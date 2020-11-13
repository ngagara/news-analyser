// счетчик
export function sequence(start, step) {
  let numberStart = start;
  return function () {
    let returnValue = numberStart;
    numberStart += step;
    return returnValue;
  }
};
//получаю нужный месяц
export function formatMonth(month) {
  let currentMonth = "";
  if (month === 1) {
    currentMonth = "январь";
  } else if (month === 2) {
    currentMonth = "февраль";
  } else if (month === 3) {
    currentMonth = "март";
  } else if (month === 4) {
    currentMonth = "апрель";
  } else if (month === 5) {
    currentMonth = "май";
  } else if (month === 6) {
    currentMonth = "июнь";
  } else if (month === 7) {
    currentMonth = "июль";
  } else if (month === 8) {
    currentMonth = "август";
  } else if (month === 9) {
    currentMonth = "сентябрь";
  } else if (month === 10) {
    currentMonth = "октябрь";
  } else if (month === 11) {
    currentMonth = "ноябрь";
  } else if (month === 12) {
    currentMonth = "декабрь";
  }
  return currentMonth;
};
// форматирую дату для отрисовки в карточках
export function formatDateCard(date) {
  return `${new Date(date).getDate()} ${formatMonth(new Date(date).getMonth() + 1)}, ${new Date(date).getFullYear()}`;
};
// устанавливает месяц в диаграмму
export function setMounth(mounth) {
  mounth.textContent = `Дата (${formatMonth(new Date().getMonth() + 1)})`;
};
//перебор и установка даты в диагрумму
export function setWeekDays(container) {
  const date = new Date();
  let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  date.setDate(date.getDate() - 7);
  container.forEach((item) => {
    date.setDate(date.getDate() + 1);
    item.textContent = `${date.getDate()}, ${week[date.getDay()]}`;
   });
};


