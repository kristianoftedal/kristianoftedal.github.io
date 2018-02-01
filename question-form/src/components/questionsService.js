export default class QuestionsService {
  addQuestion(question) {
    this.questions = [];
    if (!JSON.parse(localStorage.getItem('naturfagSpørsmål'))) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
    }
    this.questions.push(question);
    const stringified = JSON.stringify(this.questions);
    localStorage.setItem('naturfagSpørsmål', stringified);
  }
  removeQuestion(id) {
    if (!JSON.parse(localStorage.getItem('naturfagSpørsmål'))) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
    }
    const index = this.questions.findIndex(e => e.id === id);
    this.questions.splice(index, 1);
    const stringified = JSON.stringify(this.questions);
    localStorage.setItem('naturfagSpørsmål', stringified);
  }
}
