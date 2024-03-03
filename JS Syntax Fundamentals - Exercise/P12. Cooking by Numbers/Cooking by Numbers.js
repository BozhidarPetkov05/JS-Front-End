function solve(num, op1, op2, op3, op4, op5) {
    let currentOp;
    for (let i = 1; i <= 5; i++) {
        if (i == 1) {
            currentOp = op1
        } else if (i == 2) {
            currentOp = op2;
        } else if (i == 3) {
            currentOp = op3;
        } else if (i == 4) {
            currentOp = op4;
        } else {
            currentOp = op5;
        }
        if (currentOp == 'chop') {
            num /= 2;
        } else if (currentOp == 'dice') {
            num = Math.sqrt(num);
        } else if (currentOp == 'spice') {
            num++;
        } else if (currentOp == 'bake') {
            num *= 3;
        } else if (currentOp == 'fillet') {
            num -= num * 20 / 100;
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');