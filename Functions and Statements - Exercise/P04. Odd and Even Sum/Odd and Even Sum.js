function solve(num) {
    
    let nums = getAllNums(num);
    let evenSum = findEvenSum(nums);
    let oddSum = findOddSum(nums);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function findEvenSum(nums) {
        let sum = 0;
        let evens = nums.filter(x => x % 2 == 0).map(digit => sum += digit);
        return sum;
    }

    function findOddSum(nums) {
        let sum = 0;
        let odds = nums.filter(x => x % 2 != 0).map(digit => sum += digit);
        return sum;
    }

    function getAllNums(num) {
        let arr = num
            .toString()
            .split('')
            .map(digit => Number(digit));
        return arr;
    }
}

solve(1000435);
solve(3495892137259234);