'use strict';
const btn =document.querySelector('.btn');
let timerId;
let pos=0;
function myAnimation() {
  const elem = document.querySelector('.box');
const id = setInterval(frame,10);  
  function frame() {
    if (pos == 300){
      clearInterval(id);
    }else{
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
btn.addEventListener('click', myAnimation);
  // timerId = setInterval(logger,500);


// function logger () {
//   i++;
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('text');
  
// }