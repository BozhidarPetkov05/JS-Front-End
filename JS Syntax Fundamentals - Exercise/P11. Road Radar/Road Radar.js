function solve(speed, place) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;

    if (place == 'motorway') {
        if (speed <= motorway) {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        } else {
            let excess = speed - motorway;
            let status;
            if (excess <= 20) {
                status = 'speeding';
            } else if (excess <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${excess} km/h faster than the allowed speed of ${motorway} - ${status}`);
        }
    } else if (place == 'interstate') {
        if (speed <= interstate) {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        } else {
            let excess = speed - interstate;
            let status;
            if (excess <= 20) {
                status = 'speeding';
            } else if (excess <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${excess} km/h faster than the allowed speed of ${interstate} - ${status}`);
        }
    } else if (place == 'city') {
        if (speed <= city) {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        } else {
            let excess = speed - city;
            let status;
            if (excess <= 20) {
                status = 'speeding';
            } else if (excess <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${excess} km/h faster than the allowed speed of ${city} - ${status}`);
        }
    } else if (place == 'residential') {
        if (speed <= residential) {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        } else {
            let excess = speed - residential;
            let status;
            if (excess <= 20) {
                status = 'speeding';
            } else if (excess <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${excess} km/h faster than the allowed speed of ${residential} - ${status}`);
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');