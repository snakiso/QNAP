let character = document.querySelectorAll('.character')
let otherWord = document.querySelectorAll('.other-word')
console.log(character[1].getBoundingClientRect().top)

function scrollTracking() {
 var wh = $(window).height();
  for (let i = 0; i < character.length; i++) {
    if (character[i].getBoundingClientRect().top + 300 < wh) {
      character[i].classList.add('character-active')
      otherWord[i].classList.add('other-word__active')
    }
  }
 }


$(window).scroll(function () {
 scrollTracking();
});

$(document).ready(function () {
 scrollTracking();
});


