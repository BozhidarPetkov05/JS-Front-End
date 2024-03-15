function solve(word, times) {
    console.log(repeat(word, times));
    function repeat(word, times) {
        let result = '';
        for (let i = 0; i < times; i++) {
            result += word;
        }
        return result;
    }
}

solve('abc', 3);
solve('String', 2);