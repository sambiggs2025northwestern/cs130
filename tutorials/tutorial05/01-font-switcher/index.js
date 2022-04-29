let x = 20;
const makeBigger = () => {
   x += 5;
   document.querySelector(".content").style.fontSize = `${x}px`;
};

const makeSmaller = () => {
   x -= 5; 
   document.querySelector(".content").style.fontSize = `${x}px`;
};

document.querySelector('#a1').addEventListener('click', makeBigger); 
document.querySelector('#a2').addEventListener('click', makeSmaller);
























// var computedFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
// console.log(computedFontSize)

// document.querySelector(".content").style.fontSize = computedFontSize += 5;