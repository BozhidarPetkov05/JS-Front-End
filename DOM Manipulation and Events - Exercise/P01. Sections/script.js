function create(words) {
    const contentElement = document.getElementById('content');
    const divElements = words
        .map(word => {
            const pElement = document.createElement('p');
            pElement.textContent = word;
            pElement.style.display = 'none';
            
            const divElement = document.createElement('div');
            divElement.appendChild(pElement);
            
            divElement.addEventListener('click', () => {
                pElement.style.display = 'block';
            })

            return divElement;
        });

    for (const divElement of divElements) {
        contentElement.appendChild(divElement);
    }
}