function solve(product, count) {
    calculatePrice(product, count);
    function calculatePrice(product, count) {
        let total;
        if (product == 'coffee') {
            total = count * 1.50;
        } else if (product == 'water') {
            total = count * 1.00;
        } else if (product == 'coke') {
            total = count * 1.40;
        } else if (product == 'snacks') {
            total = count * 2.00;
        }
        console.log(total.toFixed(2));
    }
}

solve('water', 5);
solve('coffee', 2);