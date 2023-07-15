const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
function prevSlide(){
if (index == 0) {
index = slides.length - 1;
}
else{
index--;
}
changeSlide();
}
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 5000);
}

const slides = document.querySelector(".slider-inner-container").children;

let index = 0;
function autoPlay(){
  nextSlide();
  updateDotIndicator();
}
function nextSlide(){
  if (index == slides.length - 1) {
     index = 0;
  }
  else{
     index++;
  }
  changeSlide();
}
function changeSlide(){
  for(let i=0; i < slides.length; i++){
     slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
let timer = setInterval(autoPlay, 5000);
