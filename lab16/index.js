// Завдання 1
const images = document.querySelectorAll('.images img');

images.forEach(image => {
    image.addEventListener('click', () => {
        alert(image.dataset.src);
    });
});

// Завдання 2
const links2 = document.querySelectorAll('.link a');

links2.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.title = link.textContent;
    });

    link.addEventListener('mouseout', () => {
        link.title = '';
    });
});

// Завдання 3
const links3 = document.querySelectorAll('.links a');

links3.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.textContent += ` (${link.href})`;
    });

    link.addEventListener('mouseout', () => {
        link.textContent = link.textContent.replace(/\(.*?\)$/, '');
    });

});

// Завдання 4
const inputs = document.querySelectorAll('.inputs input');
const demo = document.getElementById('demo');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        demo.textContent += `${input.value} `;
    });

    input.addEventListener('click', () => {
        alert('Its a form!');           
    });
    
});
// Завдання 5
const paragraphs = document.querySelectorAll('.paragraphs p');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        const number = parseInt(paragraph.textContent);
        const square = number * number;

        paragraph.textContent = square;
    });
});



