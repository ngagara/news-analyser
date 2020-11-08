import {formatDateCard} from "../utils/utils.js"

export default class CommitCard {
  constructor(date, avatar, name, mail, commit) {
    this.commit = commit;
    this.mail = mail;
    this.name = name;
    this.avatar = avatar;
    this.date = date;

  }
  create() {
    const cardCmmit = this._createAndAddClass("div", "slider__card-commit");
    cardCmmit.classList.add("swiper-slide");
    const dateCommit = this._createAndAddClass("p", "slider__date-commit");
    dateCommit.textContent = formatDateCard(this.date);
    const sliderUserCommit = this._createAndAddClass("div", "slider__user-commit");
    const sliderUser = this._createAndAddClass("div", "slider__user");
    const userAvatar = this._createAndAddClass("img", "slider__user-avatar");
    userAvatar.setAttribute("alt", "аватар пользователя GitHub");
    userAvatar.setAttribute("src", this.avatar);
    const sliderUserInfo = this._createAndAddClass("div", "slider__user-info");
    const sliderUserName = this._createAndAddClass("p", "slider__user-name");
    sliderUserName.textContent = this.name;
    const sliderUserMail = this._createAndAddClass("p", "slider__user-mail");
    sliderUserMail.textContent = this.mail;
    const sliderCommit = this._createAndAddClass("p", "slider__commit");
    sliderCommit.textContent = this.commit;

    cardCmmit.appendChild(dateCommit);
    cardCmmit.appendChild(sliderUserCommit);
    sliderUserCommit.appendChild(sliderUser);
    sliderUser.appendChild(userAvatar);
    sliderUser.appendChild(sliderUserInfo);
    sliderUserInfo.appendChild(sliderUserName);
    sliderUserInfo.appendChild(sliderUserMail);
    sliderUserCommit.appendChild(sliderCommit);

    this.cardElement = cardCmmit;

    return cardCmmit;
  }

  _createAndAddClass(tag, classes) {
    const element = document.createElement(tag);
    element.classList.add(classes);
    return element;
  }
}

