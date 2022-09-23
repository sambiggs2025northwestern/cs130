/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
 
 const themePink = () => {
    console.log('Switch to Pink theme');
    document.querySelector('body').className = 'pink';
 }
 
 const themeRed = () => {
    console.log('Switch to Red theme');
    document.querySelector('body').className = 'red';
 }
 
 document.querySelector('#pink').addEventListener('click', themePink);
 document.querySelector('#red').addEventListener('click', themeRed);
 
 const themeDefault = () => {
   console.log('Switch to Default theme');
   document.querySelector('body').className = 'default';
}

document.querySelector('#default').addEventListener('click', themeDefault);