const slides = document.querySelectorAll('.quiz-slide .quiz-faq'),
nextBtn = document.querySelector('.further-btn'),
step = document.querySelector('.quiz-progress .progress'),
point = document.querySelector('.quiz-progress .count_num');
quizStart = document.querySelector('.quiz-start');
quizFinish = document.querySelector('.quiz-finish');

let i = 0;
nextBtn.addEventListener("click", moveLeft);
console.log(slides)
function moveLeft() {
if (i == slides.length - 1) {
 
} else {
  slides[i].classList.add('d-none');
  slides[i + 1].classList.remove('d-none');
  i++
}
if(i == 1) {
    step.style.width = "66.66%"
    point.textContent = '2'
} else if(i == 2) {
    step.style.width = "98%"
    point.textContent = '3'
} else if(i == 3) {
    quizStart.classList.add('d-none');
    quizFinish.classList.remove('d-none');
} 

}
