window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expenseListElement = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('.btn.delete');

    addButtonElement.addEventListener('click', () => {
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (!expense || !amount || !date) {
            return;
        }

        const expenseLiElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseLiElement);

        addButtonElement.setAttribute('disabled', 'disabled');
        
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';

        const editButtonElement = expenseLiElement.querySelector('.btn.edit');
        const okButtonElement = expenseLiElement.querySelector('.btn.ok');

        editButtonElement.addEventListener('click', () => {
            const pElementsNodeList = expenseLiElement.querySelectorAll('article p');
            const pElements = Array.from(pElementsNodeList);
            const expenseType = pElements[0].textContent.substring(6);
            const amount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1);
            const date = pElements[2].textContent.substring(6);

            expenseInputElement.value = expenseType;
            amountInputElement.value = amount;
            dateInputElement.value = date;
            
            expenseLiElement.remove();
            addButtonElement.removeAttribute('disabled');
        })

        okButtonElement.addEventListener('click', () => {
            const expenseButtonsElement = expenseLiElement.querySelector('.buttons');
            expenseButtonsElement.remove();
            expenseListElement.appendChild(expenseLiElement);
            addButtonElement.removeAttribute('disabled');
        })
    });

    deleteButtonElement.addEventListener('click', () => {
        expenseListElement.innerHTML = '';
    }) 

    function createArticleElement(expense, amount, date){
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'Edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'Ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;
    }
}