function solve(jsonData) {
    const data = JSON.parse(jsonData);
    Object
        .keys(data)
        .forEach(key => console.log(`${key}: ${data[key]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');