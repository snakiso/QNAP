let character = document.querySelectorAll('.character')
let otherWord = document.querySelectorAll('.other-word')
window.addEventListener('scroll', () =>{
  if (window.pageYOffset > 100){
  character[2].classList.add('character-active')
  otherWord[2].classList.add('other-word__active')
 }
 if (window.pageYOffset > 400) {  
  character[3].classList.add('character-active')
  otherWord[3].classList.add('other-word__active')
 }
})


//функция видимости элемента
var block_show = null;


function scrollTracking() {
 var wt = $(window).scrollTop();
 var wh = $(window).height();
 var et = $(character[0]).offset().top;
 var eh = $(character[0]).outerHeight();

 if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
  if (block_show == null || block_show == false) {
   console.log('Блок active в области видимости');
   character[0].classList.add('character-active')
   character[1].classList.add('character-active')
   otherWord[0].classList.add('other-word__active')
   otherWord[1].classList.add('other-word__active')
  }
  block_show = true;
 } else {
  if (block_show == null || block_show == true) {
   console.log('Блок active скрыт');
  }
  block_show = false;
 }
}


$(window).scroll(function () {
 scrollTracking();
});

$(document).ready(function () {
 scrollTracking();
});


