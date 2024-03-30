function sovle(input) {
    const towns = [];
    for (const line of input) {
        const [townName, townLatitude, townLongitude] = line.split(' | ');
        const town = {
            town: townName,
            latitude: Number(townLatitude).toFixed(2),
            longitude: Number(townLongitude).toFixed(2),
        }
        towns.push(town);
    }
    towns.forEach(town => console.log(town));
}

sovle(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

sovle(['Plovdiv | 136.45 | 812.575']);