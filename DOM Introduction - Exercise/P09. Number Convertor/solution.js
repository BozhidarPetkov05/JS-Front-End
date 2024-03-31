function solve() {
    const selectMenuFromElement = document.getElementById('selectMenuFrom');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const convertButtonElement = document.querySelector('button');
    
    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    const convertors = {
        binary:convertDecimalToBinary,
        hexadecimal:convertDecimalToHexadecimal
    }
    
    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);
        resultElement.value = convertors[selectMenuToElement.value](numberValue);
    });
    
    function convertDecimalToBinary(number) {
        return number.toString(2);
    }

    function convertDecimalToHexadecimal(number) {
        return number.toString(16).toUpperCase();
    }

}