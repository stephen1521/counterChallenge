let minus = document.querySelector('#minus');
let add = document.querySelector('#add');
let numberDisplay = document.querySelector('#number-display');
let number = 0;

minus.addEventListener('click', () => {
    let starDisplay = document.querySelector('#stars-display');
    if(number !== 0){
        number--;
        starDisplay.removeChild(starDisplay.lastChild);
    }
    numberDisplay.innerHTML = number;
})

add.addEventListener('click', () => {
    let starDisplay = document.querySelector('#stars-display');
    let newStar = document.createElement('div');
    newStar.classList.add('stars');
    newStar.innerHTML = '*';
    starDisplay.appendChild(newStar);
    number++;
    numberDisplay.innerHTML = number;
})
