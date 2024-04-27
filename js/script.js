let question = Array.from(document.getElementsByClassName('question'));
let arrows = Array.from(document.querySelectorAll('.arrow'));

function toggleanswers(question, arrows, index) {
  question.addEventListener('click', function (event) {
    let answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle('diplayblock');
    let boldquestion = event.currentTarget;
    boldquestion.classList.toggle('boldquestion');
    let arrows = event.currentTarget.lastElementChild;
    arrows.classList.toggle('rotate');
  });
}
question.forEach(toggleanswers);
