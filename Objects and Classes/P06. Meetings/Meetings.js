function solve(input) {
    const meetings = {};
    for (const line of input) {
        const[weekDay, name] = line.split(' ');
        if (meetings[weekDay]) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            console.log(`Scheduled for ${weekDay}`);
            meetings[weekDay] = name;
        }
    }
    for (const weekDay in meetings) {
        console.log(`${weekDay} -> ${meetings[weekDay]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);