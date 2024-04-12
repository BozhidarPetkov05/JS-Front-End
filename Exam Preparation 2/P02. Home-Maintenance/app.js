window.addEventListener("load", solve);

function solve() {
    const placeElement = document.getElementById('place');
    const actionElement = document.getElementById('action');
    const personElement = document.getElementById('person');
    const tasksListElement = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-btn');
    const doneTasksElement = document.getElementById('done-list');

    addTaskButton.addEventListener('click', () => {
        if (placeElement.value && actionElement.value && personElement.value) {
            const place = placeElement.value;
            const action = actionElement.value;
            const person = personElement.value;
            
            const liElement = document.createElement('li');
            liElement.classList.add('clean-task');
            tasksListElement.appendChild(liElement);

            const articleElement = document.createElement('article');
            liElement.appendChild(articleElement);

            const pPlaceElement = document.createElement('p');
            pPlaceElement.textContent = `Place:${placeElement.value}`;
            articleElement.appendChild(pPlaceElement);

            const pActionElement = document.createElement('p');
            pActionElement.textContent = `Action:${actionElement.value}`;
            articleElement.appendChild(pActionElement);

            const pPersonElement = document.createElement('p');
            pPersonElement.textContent = `Person:${personElement.value}`;
            articleElement.appendChild(pPersonElement);

            const divElement = document.createElement('div');
            divElement.classList.add('buttons');
            liElement.appendChild(divElement);

            const editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'Edit';
            divElement.appendChild(editButton);

            const doneButton = document.createElement('button');
            doneButton.classList.add('done');
            doneButton.textContent = 'Done';
            divElement.appendChild(doneButton);

            placeElement.value = '';
            actionElement.value = '';
            personElement.value = '';

            editButton.addEventListener('click', () => {
                placeElement.value = place;
                actionElement.value = action;
                personElement.value = person;
                console.log('da');
                tasksListElement.removeChild(liElement);
            })

            doneButton.addEventListener('click', () => {
                const newLiElement = document.createElement('li');
                doneTasksElement.appendChild(newLiElement);

                const newArticleElement = document.createElement('article');
                newLiElement.appendChild(newArticleElement);

                const newPPlaceElement = document.createElement('p');
                newPPlaceElement.textContent = pPlaceElement.textContent;
                newArticleElement.appendChild(newPPlaceElement);

                const newPActionElement = document.createElement('p');
                newPActionElement.textContent = pActionElement.textContent;
                newArticleElement.appendChild(newPActionElement);

                const newPPersonElement = document.createElement('p');
                newPPersonElement.textContent = pPersonElement.textContent;
                newArticleElement.appendChild(newPPersonElement);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                deleteButton.textContent = 'Delete';
                newLiElement.appendChild(deleteButton);

                tasksListElement.removeChild(liElement);

                deleteButton.addEventListener('click', () => {
                    doneTasksElement.remove();
                })
            })
        }
        placeElement.value = '';
        actionElement.value = '';
        personElement.value = '';
    });
}