const scream = document.querySelector('#scream');
const dontTouchH2 = document.querySelectorAll('.dontTouch')[0];
const dontTouchBut = document.querySelectorAll('.dontTouch')[1];
const dblClick = document.querySelector('#dblClick');
const focus = document.querySelector('#focus');

 function screaming() {
    alert('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA, MEOWWWWW');
 }
 function donTouH() {
    alert('I SAID TO NOT TOUCH ME, BASTARD!!');
 }
 function donTouB() {
    alert("I'M GERMOPHOBIC, AAAAAAAA!!! GET THIS OUT OF ME!!");
 }
 function doubleCli() {
    alert('N-I-C-E');
 }
 function focusing() {
    focus.style.backgroundColor = 'red';
 }
 function bluring(){
    focus.style.backgroundColor = '';
 }

 //.onclick -- it runs when you click;
 scream.onclick = screaming;
 dontTouchH2.onclick = donTouH;

 //.onmouseenter -- it runs when mouse hover;
 dontTouchBut.onmouseenter = donTouB;

 //.ondblclick -- it runs when you double click;
 dblClick.ondblclick = doubleCli;

 //.addEventListener -- better way of working with events.(MDN -> Event Reference);
 
    //focus -- when the element is focused;
    focus.addEventListener ('focus', focusing);

    //blur -- when the element lost focused;
    focus.addEventListener('blur', bluring);

