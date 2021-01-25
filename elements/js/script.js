'use strict';
const box = document.querySelector(".box_two"),
 circle = document.getElementsByClassName("circle");

box.addEventListener('click', (event) =>{
if(event.target&&event.target.tagName=='BUTTON'){
event.target.nextElementSibling.classList.toggle('yellow');
}

});
circle[0].addEventListener('click',()=>{
circle[1].classList.add('yellow');
});

  circle[1].addEventListener('click',()=>{
    if(circle[1].classList.toggle('yellow')){
      circle[2].classList.add('circle_right');
    }else{
      circle[2].classList.remove('circle_right');
    }
  });

