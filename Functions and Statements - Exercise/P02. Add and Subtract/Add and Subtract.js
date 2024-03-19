function solve(num1, num2, num3) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    console.log(subtract(sum(num1, num2), num3));
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);