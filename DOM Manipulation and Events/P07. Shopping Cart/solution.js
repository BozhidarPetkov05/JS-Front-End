function solve() {
    const addProductButtonElements = document.querySelectorAll('button.add-product');
    const textAreaElement = document.querySelector('textarea');
    const checkoutElement = document.querySelector('button.checkout');
    
    let products = {};
    let total = 0;
    
    for (const buttonElement of addProductButtonElements) {
        const productElement = buttonElement.parentElement.parentElement;
        buttonElement.addEventListener('click', (event => {
            const productName = productElement.querySelector('.product-title').textContent;
            const productPrice = Number(productElement.querySelector('.product-line-price').textContent);
            textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
            total += productPrice;
            products[productName] = true;
        }))
    }
    checkoutElement.addEventListener('click', (event) => {
        const list = Object.keys(products).join(', ');
        textAreaElement.textContent += `You bought ${list} for ${total.toFixed(2)}.`
        checkoutElement.setAttribute('disabled', 'disabled');
        for (const button of addProductButtonElements) {
            button.setAttribute('disabled', 'disabled');
        }
    });
}