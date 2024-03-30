function sumTable() {
    const tdCostElements = document.querySelectorAll('tr td:not(#sum):nth-child(2n)');
    const tdSumElement = document.getElementById('sum');
    const sum = Array
        .from(tdCostElements)
        .reduce((sum, element) => sum + Number(element.textContent), 0);

    tdSumElement.textContent = sum;
}