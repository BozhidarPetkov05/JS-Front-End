function solve(a, b, operator) {
    const operation = calculate(operator);
    const result = operation(a, b);
    function calculate(operator) {
        if (operator == 'add') {
            return (a, b) => a + b;
        } else if (operator == 'subtract') {
            return (a, b) => a - b;
        } else if (operator == 'multiply') {
            return (a, b) => a * b;
        } else if (operator == 'divide') {
            return (a, b) => a / b;
        } 
    }
    console.log(result)
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');