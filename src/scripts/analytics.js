import "../pages/analytics.css";
import Statistics from "./components/Statistics.js";
import DataStorage from "./modules/DataStorage.js";
import { setMounth, setWeekDays } from "./utils/utils.js";

("use strict");

const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage);

setWeekDays(document.querySelectorAll(".diagram__week-days-span"));
setMounth(document.querySelector(".diagram__header-axis_data"));
statistics.setTitle(document.querySelector(".analytics__title"));
statistics.setTotalResults(document.querySelector(".analytics__sum-span"));
statistics.setTotalRequest(document.querySelector(".analytics__request-span"));
statistics.setStatisticsDay(document.querySelectorAll(".diagram__blue-line"));
