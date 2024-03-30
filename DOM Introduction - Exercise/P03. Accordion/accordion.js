function toggle() {
    const moreButtonTextElement = document.querySelector('.head span.button');
    const extraTextElement = document.getElementById('extra');
    const moreButtonText = moreButtonTextElement.textContent;
    
    if (moreButtonText == 'More') {
        extraTextElement.style.display = 'block';
        moreButtonTextElement.textContent = 'Less';
    } else {
        extraTextElement.style.display = 'none';
        moreButtonTextElement.textContent = 'More';
    }
}