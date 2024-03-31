function deleteByEmail() {
    const emailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const trElements = document.querySelectorAll('table#customers tbody tr');

    const trElement = Array
        .from(trElements)
        .find(element => element.children[1].textContent == emailElement.value);

    if (trElement) {
        trElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    
    emailElement.value = '';
}