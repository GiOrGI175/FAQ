let question = Array.from(document.getElementsByClassName('question'));
let arrows = Array.from(document.querySelectorAll('.arrow'));

function toggleanswers(question, arrows, index) {
  question.addEventListener('click', function (event) {
    let answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle('diplayblock');
    let boldquestion = event.currentTarget;
    boldquestion.classList.toggle('boldquestion');
    if (answer.classList.includes('diplayblock')) {
      arrows[index].classList.add('rotate');
    } else {
      arrows[index].classList.remove('rotate');
    }
  });
}
question.forEach(toggleanswers);
