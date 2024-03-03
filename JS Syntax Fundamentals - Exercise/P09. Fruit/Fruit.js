function solve(fruit, grams, price) {
    let kilograms = grams / 1000;
    let total = price * kilograms;
    console.log(`I need $${total.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);