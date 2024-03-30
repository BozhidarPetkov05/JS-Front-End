function solve() {
    const textElement = document.getElementById('text');
    const conventionElement = document.getElementById('naming-convention');
    const resultElement = document.getElementById('result');
    const text = textElement.value;
    const convention = conventionElement.value;
    
    if (convention == 'Camel Case') {
        let lowered = text.toLowerCase();
        let words = lowered.split(' ');
        let newWord = '';
        
        for (const word of words) {
            let currentWord = word.slice(1);
            let capitalFirst = word[0].toUpperCase();
            let finalWord = capitalFirst + currentWord;
            newWord += finalWord;
        }

        let sliced = newWord.slice(1);
        let first = newWord[0].toLowerCase();
        let combined = first + sliced;
        
        resultElement.textContent = combined;
    } else if (convention == 'Pascal Case') {
        
        let lowered = text.toLowerCase();
        let words = lowered.split(' ');
        let newWord = '';
        
        for (const word of words) {
            let currentWord = word.slice(1);
            let capitalFirst = word[0].toUpperCase();
            let finalWord = capitalFirst + currentWord;
            
            newWord += finalWord;
        }
        
        resultElement.textContent = newWord;
    } else {
        resultElement.textContent = 'Error!';
    }
}