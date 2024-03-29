function editElement(element, match, replacement) {
    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacement);
    }
}