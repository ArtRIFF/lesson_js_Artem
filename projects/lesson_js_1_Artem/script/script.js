
let name = prompt("Подскажите пожалуйста Ваше имя:");
let age = prompt("Укажите сколько Вам лет:");

if (age < 0 || age > 100 || age===null|| age== "" || name =="" || name==null) {
  alert("Невереное значение данних");
} else {
  if (age > 41) {
    console.log(`Привет, ${name}! Вы старичок!`);
  } else if (age <= 40 && age >= 17) {
    console.log(`Привет, ${name}! Вы молодой человек!`);
  } else {
    console.log(`Привет, ${name}! Вы подросток!`);
  }
}

// "use strict"
// let name = prompt("What is your name?");
// let age = prompt("What is your age?");

// if (age<0||age>100||age==null){
//     alert("Age entered incorrectly!");
// } else if (age <= 16){
//     console.log(`Hello ${name}! You are a teenager!`);
// } else if (age>16 && age<=40) {
//    console.log(`Hello ${name}! You are a young man!`);
// } else {
//     console.log(`Hello ${name}! You are an old man!`);
// };