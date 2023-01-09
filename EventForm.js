const formIDE = document.querySelector('#IDE');
const ulNames = document.querySelector('#ulNames');
const inputNames = document.querySelector('#inputNames');


formIDE.addEventListener('submit', function(evt){
    evt.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = inputNames.value;
    ulNames.append(newLi);
    inputNames.value = "";
})
ulNames.addEventListener('click', function(evt){
    if (evt.target.nodeName === 'LI'){
        evt.target.remove();
    }
})

//**************************************************************
const changeH1 = document.querySelector('#changeH1');
const h1 = document.querySelector('h1');
const resetH1 = document.querySelector('#resetH1');

changeH1.addEventListener('input', function(evt) {
    h1.innerText = changeH1.value;
})

resetH1.addEventListener('click', function(){
    h1.innerText = 'Form';
    changeH1.value = '';
})

//**************************************************************
const clickMe = document.querySelector('#clickMe');
const alertDiv = document.querySelector('#alertDiv');

alertDiv.addEventListener('click', function() {
     alert('I said to not click me');
})

clickMe.addEventListener('click', function(evt){
    alert('YOU HAVE CLICKED ME');
    evt.stopPropagation();
})