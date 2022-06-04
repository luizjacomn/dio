var currentValueWrapper = document.getElementById('currentValue');
var currentValue = 0;

var inc = document.getElementsByName('adicionar')[0];
var dec = document.getElementsByName('subtrair')[0];

inc.addEventListener('click', () => {
    increment();
});

dec.addEventListener('click', () => {
    decrement();
});

function increment() {
    currentValue++;
    currentValueWrapper.innerHTML = currentValue;

    if (currentValue >= 0) {
        currentValueWrapper.style.color = 'black';
    }
}

function decrement() {
    currentValue--;
    currentValueWrapper.innerHTML = currentValue;

    if (currentValue < 0) {
        currentValueWrapper.style.color = 'red';
    }
}