window.addEventListener("load", solve);

function solve() {
	const nameElement = document.getElementById('name');
	const phoneNumberElement = document.getElementById('phone');
	const categoryElement = document.getElementById('category');
	const addButton = document.getElementById('add-btn');
	const checkList = document.getElementById('check-list');
	const contactsList = document.getElementById('contact-list');

	addButton.addEventListener('click', () => {
		if (nameElement.value && phoneNumberElement.value && categoryElement.value) {
			const name = nameElement.value;
			const number = phoneNumberElement.value;
			const category = categoryElement.value;
			
			const liElement = document.createElement('li');
			checkList.appendChild(liElement);

			const articleElement = document.createElement('article');
			liElement.appendChild(articleElement);

			const pNameElement = document.createElement('p');
			pNameElement.textContent = `name:${name}`;
			articleElement.appendChild(pNameElement);

			const pPhoneElement = document.createElement('p');
			pPhoneElement.textContent = `phone:${number}`;
			articleElement.appendChild(pPhoneElement);

			const pCategoryElement = document.createElement('p');
			pCategoryElement.textContent = `category:${category}`;
			articleElement.appendChild(pCategoryElement);

			const divContainerElement = document.createElement('div');
			divContainerElement.classList.add('buttons');
			liElement.appendChild(divContainerElement);

			const editButton = document.createElement('button');
			editButton.classList.add('edit-btn');
			divContainerElement.appendChild(editButton);

			const saveButton = document.createElement('button');
			saveButton.classList.add('save-btn');
			divContainerElement.appendChild(saveButton);

			nameElement.value = '';
			phoneNumberElement.value = '';
			categoryElement.value = '';

			editButton.addEventListener('click', () => {
				nameElement.value = name;
				phoneNumberElement.value = number;
				categoryElement.value = category;
				liElement.remove();
			});

			saveButton.addEventListener('click', () => {
				const contactsLi = document.createElement('li');
				contactsList.appendChild(contactsLi);

				const contactsArticle = document.createElement('article');
				contactsLi.appendChild(contactsArticle);

				const pName = document.createElement('p');
				pName.textContent = `name:${name}`;
				contactsArticle.appendChild(pName);

				const pPhone = document.createElement('p');
				pPhone.textContent = `phone:${number}`;
				contactsArticle.appendChild(pPhone);

				const pCategory = document.createElement('p');
				pCategory.textContent = `category:${category}`;
				contactsArticle.appendChild(pCategory);

				const deleteButton = document.createElement('button');
				deleteButton.classList.add('del-btn');
				contactsLi.appendChild(deleteButton);

				liElement.remove();

				deleteButton.addEventListener('click', () => {
					contactsLi.remove();
				});
			})
		} 
	});
}
  