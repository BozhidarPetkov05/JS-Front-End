function solve(array) {
    let evenNum = array.filter(n => n % 2 === 0);
    let oddNum = array.filter(n => n % 2 !== 0);
    let evenSum = evenNum.reduce((a, b) => a + b, 0);
    let oddSum = oddNum.reduce((a, b) => a + b, 0);
    let result = evenSum - oddSum;
    console.log(result);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);