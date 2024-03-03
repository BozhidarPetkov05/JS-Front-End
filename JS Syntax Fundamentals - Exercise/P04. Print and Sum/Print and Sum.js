function solve(start, end) {
    let result = 0;
    let stringResult = '';
    for (let i = start; i <= end; i++){
        result += i;
        stringResult += `${i} `;
    }
    console.log(stringResult)
    console.log(`Sum: ${result}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);