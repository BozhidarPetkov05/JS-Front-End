function solve(percentage) {
    let bars = percentage / 10;
    let loadBar = [];
    loadBar = load(bars);
    if (percentage == 100) {
        console.log('100% Complete!');
        console.log(`[${loadBar.join('')}]`);
    } else {
        console.log(`${percentage}% [${loadBar.join('')}]`);
        console.log('Still loading...');
    }
    function load(bars) {
        for (let i = 0; i < 10; i++) {
            loadBar.push('.');
        }
        for (let i = 0; i < bars; i++) {
            loadBar[i] = '%';
        }
        return loadBar;
    }
}

solve(30);
solve(50);
solve(100);
