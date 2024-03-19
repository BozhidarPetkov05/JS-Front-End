function solve(size) {
    let digit = size;
    
    printMatrix(size, digit);
    
    function printMatrix(size, digit) {
        for (let i = 0; i < size; i++) {
            let arr = [];
            for (let j = 0; j < size; j++) {
                arr.push(digit);
            }
            console.log(arr.join(' '));
        }
    }
}

solve(3);
solve(7);
solve(2);