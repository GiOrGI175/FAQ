let question = Array.from(document.getElementsByClassName('question'));

let rotatearw = Array.from(document.getElementsByClassName('arrow'));

function toggleanswers(question, rotatearw) {
  question.addEventListener('click', function (event) {
    let answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle('show_answr');
    rotatearwevent.currentTarget.classList.add('rotate');
  });
}

question.forEach(toggleanswers);
