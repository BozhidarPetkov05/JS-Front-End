const baseURL = `http://localhost:3030/jsonstore/games`;

const loadGamesButton = document.getElementById('load-games');
const gameList = document.getElementById('games-list');
const addButton = document.getElementById('add-game');
const gameNameElement = document.getElementById('g-name');
const gameTypeElement = document.getElementById('type');
const playersElement = document.getElementById('players');
const editButton = document.getElementById('edit-game');

loadGamesButton.addEventListener('click', async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    
    gameList.innerHTML = '';
    
    for (const game of Object.values(data)) {
        const divBoardGame = document.createElement('div');
        divBoardGame.classList.add('board-game');
        divBoardGame.id = game._id;
        const currentId = game._id;
        gameList.appendChild(divBoardGame);

        const divContent = document.createElement('div');
        divContent.classList.add('content');
        divBoardGame.appendChild(divContent);

        const pName = document.createElement('p');
        pName.textContent = game.name;
        divContent.appendChild(pName);

        const pPlayers = document.createElement('p');
        pPlayers.textContent = game.players;
        divContent.appendChild(pPlayers);

        const pType = document.createElement('p');
        pType.textContent = game.type;
        divContent.appendChild(pType);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttons-container');
        divBoardGame.appendChild(buttonContainer);

        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.classList.add('change-btn');
        buttonContainer.appendChild(changeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        buttonContainer.appendChild(deleteButton);

        changeButton.addEventListener('click', async () => {
            gameNameElement.value = game.name;
            gameTypeElement.value = game.type;
            playersElement.value = game.players;
            divBoardGame.remove();
            
            editButton.disabled = false;
            addButton.disabled = true;

            editButton.addEventListener('click', async () => {
                const response = await fetch(`${baseURL}/${currentId}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: gameNameElement.value,
                        type: gameTypeElement.value,
                        players: playersElement.value,
                        _id: currentId
                    })
                });
                gameNameElement.value = '';
                gameTypeElement.value = '';
                playersElement.value = '';

                editButton.disabled = true;
                addButton.disabled = false;
            });
        });
        deleteButton.addEventListener('click', async () => {
            await fetch(`${baseURL}/${currentId}`, {
                method: 'DELETE',
            });
            divBoardGame.remove();
        })
    }
});

addButton.addEventListener('click', async () => {
    const gameName = gameNameElement.value;
    const type = gameTypeElement.value;
    const players = playersElement.value;

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: gameName,
            type: type,
            players: players
        })
    });

    gameNameElement.value = '';
    gameTypeElement.value = '';
    playersElement.value = '';
});

