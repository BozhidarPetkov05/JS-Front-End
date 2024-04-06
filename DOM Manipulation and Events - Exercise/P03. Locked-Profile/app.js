function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');
    
    for (const profileElement of profileElements) {
        const showButtonElement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]') 
        const hiddenTextElement = profileElement.querySelector('div');

        showButtonElement.addEventListener('click', (e) => {
            if (showButtonElement.textContent == 'Show more') {
                if (!lockRadioElement.checked) {
                    hiddenTextElement.style.display = 'block';
                    showButtonElement.textContent = 'Hide it'
                }
            } else {
                if (!lockRadioElement.checked) {
                    hiddenTextElement.style.display = 'none';
                    showButtonElement.textContent = 'Show more'
                }
            }
        });
        
    }
}