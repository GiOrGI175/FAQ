let question = Array.from(document.getElementsByClassName('question'));

let rotatearw = Array.from(document.getElementsByClassName('arrow'));

function toggleanswers(question) {
  question.addEventListener('click', function (event) {
    let answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle('show_answr');
    rotatearw.classList.add('rotate');
  });
}

question.forEach(toggleanswers);
