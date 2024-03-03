function solve(num) {
    let stringNum = num.toString();
    let isTrue = true;
    let sum = 0;
    for (let i = 1; i < stringNum.length; i++) {
        if (stringNum[i - 1] != stringNum[i]) {
            isTrue = false;
            break;
        }
    }
    while (num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    console.log(isTrue);
    console.log(sum);
}

solve(2222222);
solve(1234);