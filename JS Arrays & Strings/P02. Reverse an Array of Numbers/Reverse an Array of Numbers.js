function solve(length, array) {
    let newArr = array
    .slice(0, length)
    .reverse()
    .join(' ');
    console.log(newArr);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);