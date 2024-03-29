function extractText() {
    const items = document.getElementById('items').textContent;
    const textArea = document.getElementById('result');
    textArea.value = items;
}