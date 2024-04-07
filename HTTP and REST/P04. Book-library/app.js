function attachEvents() {
	const titleElement = document.querySelector('input[type=text][name=title]');
	const authorElement = document.querySelector('input[type=text][name=author]');
	const submitButtonElement = document.querySelector('#form button');
	const bookTableBodyElement = document.querySelector('#books tbody')
	submitButtonElement.addEventListener('click', (e) => {
		const bookTrElement = createBookElement(titleElement.value, authorElement.value);
		
		bookTableBodyElement.appendChild(bookTrElement);
		
		titleElement.value = '';
		authorElement.value = '';
	})
}

function createBookElement(title, author) {
	const editButton = document.createElement('button');
	const deleteButton = document.createElement('button');

	editButton.textContent = 'Edit';
	deleteButton.textContent = 'Delete';

	const buttonsTdElement = document.createElement('td');
	buttonsTdElement.appendChild(editButton);
	buttonsTdElement.appendChild(deleteButton);

	const titleTdElement = document.createElement('td');
	titleTdElement.textContent = title;

	const authorTdElement = document.createElement('td');
	authorTdElement.textContent = author;

	const bookTrElement = document.createElement('tr');
	bookTrElement.appendChild(titleTdElement);
	bookTrElement.appendChild(authorTdElement);
	bookTrElement.appendChild(buttonsTdElement);

	return bookTrElement;
}

attachEvents();