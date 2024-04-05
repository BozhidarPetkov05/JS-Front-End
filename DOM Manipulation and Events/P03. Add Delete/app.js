function addItem() {
    const textElement = document.getElementById('newItemText');
    const tableElement = document.getElementById('items');
    
    const newElement = document.createElement('li');
    newElement.textContent = textElement.value; 
    
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    deleteLinkElement.addEventListener('click', () => {
        newElement.remove();
    });

    
    newElement.appendChild(deleteLinkElement);
    tableElement.appendChild(newElement);
    textElement.value = '';
}

