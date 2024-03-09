function solve(array) {
    let sortedArray = [];
    while (array.length > 0) {
        sortedArray.push(array.sort((a, b) => a - b).shift());
        let last = array.reverse().shift();
        if (last) {
            sortedArray.push(last);
        }
    }
    return sortedArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);