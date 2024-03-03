function solve(year) {
    let answer;
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        answer = 'yes';
    } else {
        answer = 'no';
    }
    console.log(answer);
}

solve(1984);
solve(2003);
solve(4);