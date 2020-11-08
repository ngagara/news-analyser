import "../pages/about.css";
import "swiper/swiper-bundle.css";

"use strict";

import CommitCard from "./components/CommitCard.js";
import CommitCardList from "./components/CommitCardList.js";
import GithubApi from "./modules/GithubApi.js";
import { GITHUB_SERVER } from "./constants/constants.js";
import { mySwiper } from "./modules/Swiper.js";

const gitHubApi = new GithubApi(GITHUB_SERVER);
const createCommitCard = (...args) => new CommitCard(...args);

const commitCardList = new CommitCardList(
  document.querySelector(".swiper-wrapper"),
  createCommitCard
);

gitHubApi
  .getCommits()
  .then((result) => {
    commitCardList.render(result);
    console.log(result)
    mySwiper.init();
  })
  .catch((err) => {
    alert(err);
  });
