let character = document.querySelectorAll('.character')
let otherWord = document.querySelectorAll('.other-word')
console.log(character[1].getBoundingClientRect().top)

function scrollTracking() {
 var wh = $(window).height();
  for (let i = 0; i < character.length; i++) {
   if (wh > 900){ 
    if (character[i].getBoundingClientRect().top + 300 < wh ) {
      console.log(wh)
      character[i].classList.add('character-active')
      otherWord[i].classList.add('other-word__active')
    }
  }else if (wh < 900) {
     if (character[i].getBoundingClientRect().top - 200< wh) {
       console.log(character[3].getBoundingClientRect().top)
       character[i].classList.add('character-active')
       otherWord[i].classList.add('other-word__active')
     }
  }
  }
 }


$(window).scroll(function () {
 scrollTracking();
});

$(document).ready(function () {
 scrollTracking();
});


