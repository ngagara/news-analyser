export default class CommitCardList {
  constructor(container, createCommitCard) {
    this.container = container;
    this.createCommitCard = createCommitCard;
  }

  _addCard(...args) {
    this.container.appendChild(this.createCommitCard(...args).create());
  }

  render(data) {
    data.forEach((item) => {
      this._addCard(
        item.commit.committer.date,
        item.author.avatar_url,
        item.commit.committer.name,
        item.commit.committer.email,
        item.commit.message
      );
    });
  };
}
