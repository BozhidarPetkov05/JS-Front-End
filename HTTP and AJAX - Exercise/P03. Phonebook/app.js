function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook';
    
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');

    const phonebookElement = document.getElementById('phonebook');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadButtonElement.addEventListener('click', () => {
        phonebookElement.textContent = '';
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(entry => {
                        phonebookElement.appendChild(createEntryElement(entry));
                    })
            })
    });

    createButtonElement.addEventListener('click', () => {
        const person = personElement.value;
        const phone = phoneElement.value;

        fetch(baseURL, {
            method: `POST`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone
            })
        })
        .then((res) => res.json())
        .then(entry => {
            const liElement = createEntryElement(entry);
            phonebookElement.appendChild(liElement);
            personElement.value = '';
            phoneElement.value = '';
        });

    });

    function createEntryElement({ _id, person, phone }) {
        const liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            fetch(`${baseURL}/${_id}`, {
                method: 'DELETE'
            })
            .then(() => {
                liElement.remove();
            })
        })

        liElement.appendChild(deleteButton);

        return liElement;
    }
}

attachEvents();