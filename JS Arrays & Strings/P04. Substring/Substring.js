function solve(word, start, end) {
    let newWord = word.substring(start, start + end);
    console.log(newWord);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);