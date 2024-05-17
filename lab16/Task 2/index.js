// Функція для фарбування div в червоний колір
function paintRed(div) {
    div.classList.add('red');
    div.removeEventListener('click', paintGreen);
    div.addEventListener('click', paintRed);
}

// Функція для фарбування div в зелений колір
function paintGreen(div) {
    div.classList.add('green');
    div.removeEventListener('click', paintRed);
    div.addEventListener('click', paintGreen);
}

// Додавання подій кліку до div
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

div1.addEventListener('click', function() {
    paintRed(div1);
});

div2.addEventListener('click', function() {
    paintGreen(div2);
});

div3.addEventListener('click', function() {
    if (div3.classList.contains('red')) {
        paintGreen(div3);
    } else {
        paintRed(div3);
    }
});
