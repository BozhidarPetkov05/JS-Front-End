function solve() {
    const textAreaInputElement = document.querySelector('#exercise textarea:first-of-type');
    const textareaOutputElement = document.querySelector('#exercise textarea:last-of-type');
    const generateButtonElement = document.querySelector('#exercise button:first-of-type');
    const buyButtonElement = document.querySelector('#exercise button:last-of-type');
    const furnitureTbodyElement = document.querySelector('.table tbody');

    generateButtonElement.addEventListener('click', (e) => {
        const furnitures = JSON.parse(textAreaInputElement.value);
        for (const furniture of furnitures) {
            const imgElement = document.createElement('img');
            imgElement.src = furniture.img;
            const imageTdElement = document.createElement('td');
            imageTdElement.appendChild(imgElement);

            const namePElement = document.createElement('p');
            namePElement.textContent = furniture.name;
            const nameTdElement = document.createElement('td');
            nameTdElement.appendChild(namePElement);

            const pricePElement = document.createElement('p');
            pricePElement.textContent = furniture.price;
            const priceTdElement = document.createElement('td');
            priceTdElement.appendChild(pricePElement);

            const decPElement = document.createElement('p');
            decPElement.textContent = furniture.decFactor;
            const decTdElement = document.createElement('td');
            decTdElement.appendChild(decPElement);

            const markElement = document.createElement('input');
            markElement.setAttribute('type', 'checkbox');
            const markTdElement = document.createElement('td');
            markTdElement.appendChild(markElement);

            const furnitureTrElement = document.createElement('tr');
            furnitureTrElement.appendChild(imageTdElement);
            furnitureTrElement.appendChild(nameTdElement);
            furnitureTrElement.appendChild(priceTdElement);
            furnitureTrElement.appendChild(decTdElement);
            furnitureTrElement.appendChild(markTdElement);

            furnitureTbodyElement.appendChild(furnitureTrElement);
        }
    });
    
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    let names = [];

    buyButtonElement.addEventListener('click', (e) => {
        Array.from(furnitureTbodyElement.children)
            .forEach(furnitureTrElement => {
                const markInputElement = furnitureTrElement.querySelector('input[type=checkbox]');
                if (!markInputElement.checked) {
                    return;
                }
                const name = furnitureTrElement.children.item(1).textContent;
                const price = Number(furnitureTrElement.children.item(2).textContent);
                const decFactor = Number(furnitureTrElement.children.item(3).textContent);

                names.push(name);
                totalPrice += price;
                totalDecorationFactor += decFactor;
            });

        textareaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        textareaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textareaOutputElement.textContent += `Average decoration factor: ${totalDecorationFactor/names.length}`
    });
}