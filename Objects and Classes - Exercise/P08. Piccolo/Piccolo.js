function solve(input) {
    const parking = {};
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(', ');
        commands.push(current[0]);
        commands.push(current[1]);
    }
    for (let i = 0; i < commands.length; i += 2) {
        let direction = commands[i];
        let registration = commands[i + 1];
        if (direction == 'IN') {
            parking[registration] = 1; 
        } else if (direction == 'OUT'){
            parking[registration] = 0;
        }
    }
    let parked = [];
    for (const car in parking) {
        if (parking[car] == 1) {
            parked.push(car);
        }
    }
    if (parked.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        parked
            .sort((a, b) => a.localeCompare(b))
            .forEach(car => console.log(car));
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);