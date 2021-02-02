let btnRus = document.querySelector(".rus");
let btnEng = document.querySelector(".eng");
let wordList = [
  ["уплотнение", "медведь", "доля","модернизация"],
  ["gasket", "bear", "stake","modernization"]
];

const showWordList = (i)=> {
wordList[i].forEach(element => console.log(element));
}

btnRus.addEventListener('click', ()=> {
console.clear();
showWordList(0);
});

btnEng.addEventListener('click', ()=> {
  console.clear();
  showWordList(1);
  });
