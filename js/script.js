let question = Array.from(document.getElementsByClassName('question'));
let arrows = Array.from(document.querySelectorAll('.arrow'));

function toggleanswers(question, index) {
  question.addEventListener('click', function (event) {
    let answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle('diplayblock');
    let boldquestion = event.currentTarget;
    boldquestion.classList.toggle('boldquestion');
    let arrow = arrows.forEach[index];
    arrow.classList.toggle('rotate');
  });
}

question.forEach(toggleanswers);
