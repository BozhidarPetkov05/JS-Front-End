function solve(word, text) {
    let splitted = text.split(' ');
    let lowered = [];
    splitted.forEach(element => {
        lowered.push(element.toLowerCase());
    });
    lowered = lowered.filter(w => w == word);
    if (lowered.length > 0) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript','JavaScript is the best programming language');
solve('python','JavaScript is the best programming language');