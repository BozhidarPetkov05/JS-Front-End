function solve(input) {
    let occurrences = {};
    let arr = input.split(' ');
    for (const word of arr) {
        let lowered = word.toLowerCase();
        if (!occurrences.hasOwnProperty(lowered)) {
            occurrences[lowered] = 0;
        }
        occurrences[lowered]++;
    }
    let words = [];
    for (const word in occurrences) {
        if (occurrences[word] % 2 != 0) {
            words.push(word);
        }
    }
    console.log(words.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');