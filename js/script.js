let question = Array.from(document.getElementsByClassName('question'));

console.log(question);

function toggleanswers(question) {
  question.addEventListener('click', function (event) {
    let answer = event.target.nextElementSibling;
    answer.classList.toggle('show_answr');
  });
}

question.forEach(toggleanswers);
