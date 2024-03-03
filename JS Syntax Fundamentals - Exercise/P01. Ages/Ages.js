function solve(age) {
    let type;
    if (age >=0 && age <= 2) {
        type = 'baby';
    } else if (age >= 3 && age <= 13) {
        type = 'child';
    } else if (age >= 14 && age <= 19) {
        type = 'teenager';
    } else if (age >= 20 && age <= 65) {
        type = 'adult';
    } else if (age >= 65) {
        type = 'elder';
    } else {
        type = 'out of bounds';
    }
    console.log(type);
}

solve(20);
solve(1);
solve(100);
solve(-1);