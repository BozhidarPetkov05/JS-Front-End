function addItem() {
    const textElement = document.getElementById('newItemText');
    const tableElement = document.getElementById('items');
    
    const newElement = document.createElement('li');
    newElement.textContent = textElement.value; 
    tableElement.appendChild(newElement);

    
}