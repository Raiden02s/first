const inputs = document.querySelectorAll('.input');
const errors = document.querySelectorAll('.input-error');

inputs.forEach((input, index) => {
    const error = errors[index];
    const dataLength = parseInt(input.dataset.length);

    input.addEventListener('blur', () => {
        const inputValue = input.value.trim();
        const isValid = inputValue.length === dataLength;

        if (isValid) {
            input.style.border = '1px solid green';
            error.textContent = '';
        } else {
            input.style.border = '1px solid red';
            error.textContent = `Введіть ${dataLength} символів`;
        }
    });
});