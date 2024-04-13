const baseURL = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsButton = document.getElementById('load-presents');
const giftsListElement = document.getElementById('gift-list');
const addPresentButton = document.getElementById('add-present');
const presentElement = document.getElementById('gift');
const forElement = document.getElementById('for');
const priceElement = document.getElementById('price');
const editPresentButton = document.getElementById('edit-present');

loadPresentsButton.addEventListener('click', async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    giftsListElement.innerHTML = '';

    for (const present of Object.values(data)) {
        const divElement = document.createElement('div');
        divElement.classList.add('gift-sock');
        giftsListElement.appendChild(divElement);

        const divContent = document.createElement('div');
        divContent.classList.add('content');
        divElement.appendChild(divContent);

        const pPresentElement = document.createElement('p');
        pPresentElement.textContent = present.gift;
        divContent.appendChild(pPresentElement);

        const pForElement = document.createElement('p');
        pForElement.textContent = present.for;
        divContent.appendChild(pForElement);

        const pPriceElement = document.createElement('p');
        pPriceElement.textContent = present.price;
        divContent.appendChild(pPriceElement);

        const buttonContainerDiv = document.createElement('div');
        buttonContainerDiv.classList.add('buttons-container');
        divElement.appendChild(buttonContainerDiv);

        const changeButton = document.createElement('button');
        changeButton.classList.add('change-btn');
        changeButton.textContent = 'Change';
        buttonContainerDiv.appendChild(changeButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        buttonContainerDiv.appendChild(deleteButton);
        const currentId = present._id;

        changeButton.addEventListener('click', async () => {
            const currentPresent = present.gift;
            const currentFor = present.for;
            const currentPrice = present.price;
            

            presentElement.value = currentPresent;
            forElement.value = currentFor;
            priceElement.value = currentPrice;

            addPresentButton.disabled = true;
            editPresentButton.disabled = false;

            divElement.remove();
            

            editPresentButton.addEventListener('click', async () => {
                const newPresent = presentElement.value;
                const newFor = forElement.value;
                const newPrice = priceElement.value;
                
                const response = await fetch(`${baseURL}/${currentId}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        gift: newPresent,
                        for: newFor,
                        price: newPrice,
                        id: currentId
                    })
                });
                addPresentButton.disabled = false;
                editPresentButton.disabled = true;

                presentElement.value = '';
                forElement.value = '';
                priceElement.value = '';
            })
        });

        deleteButton.addEventListener('click', async () => {
            fetch(`${baseURL}/${currentId}`, {
                method: 'DELETE',
            })
            divElement.remove();
        });
    }

    
});

addPresentButton.addEventListener('click', async () => {
    const present = presentElement.value;
    const forWho = forElement.value;
    const price = priceElement.value;

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            gift: present,
            for: forWho,
            price,
        })
    });

    presentElement.value = '';
    forElement.value = '';
    priceElement.value = '';
})