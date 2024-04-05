function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');
    for (const inputElement of inputElements) {
        inputElement.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('focused');
        })
    }
    for (const inputElement of inputElements) {
        inputElement.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused');
        })
    }
}