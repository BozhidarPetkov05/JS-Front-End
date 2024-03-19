function solve(firstCharacter, secondCharacter) {
    let first = firstCharacter.charCodeAt();
    let second = secondCharacter.charCodeAt();
    let start;
    let end;
    
    if (first < second) {
        start = first;
        end = second;
    } else {
        start = second;
        end = first;
    }
    
    printInRange(start, end);

    function printInRange(start, end) {
        let arr = [];
        for (let i = start + 1; i < end; i++){
            let character = String.fromCharCode(i);
            arr.push(character);
        }
        console.log(arr.join(' '));
    }
}

solve('a', 'd');
solve('#', ':');
solve('C', '#');