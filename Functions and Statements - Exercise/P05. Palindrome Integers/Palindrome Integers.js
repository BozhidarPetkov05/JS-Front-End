function solve(numbers) {
    let arrOfNums = numbers.map(num => num.toString());
    isPalindrome(arrOfNums);
    
    function isPalindrome(numbers) {
        for (const num of numbers) {
            let reversed = num.split('').reverse().join('');
            if (num == reversed) {
                console.log('true');
            } else {
                console.log('false');
            }
        }
    }
}

solve([123,323,421,121]);
solve([32,2,232,1010]);