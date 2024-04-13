function solve(input) {
    let characters = Number(input.shift());
    let posse = {};
    for (let i = 0; i < characters; i++) {
        let currentRow = input.shift().split(' ');
        let name = currentRow[0];
        let hp = Number(currentRow[1]);
        if (hp > 100) {
            hp = 100;
        }
        let bullets = Number(currentRow[2]);
        posse[name] = {
            hp,
            bullets
        }
    }
    let commandLine = input.shift();
    while (commandLine != 'Ride Off Into Sunset') {
        let currentRow = commandLine.split(' - ');
        if (currentRow[0] == 'FireShot') {
            let name = currentRow[1];
            let target = currentRow[2];
            if (posse[name].bullets > 0) {
                posse[name].bullets--;
                console.log(`${name} has successfully hit ${target} and now has ${posse[name].bullets} bullets!`);
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (currentRow[0] == 'TakeHit') {
            let name = currentRow[1];
            let damage = Number(currentRow[2]);
            let attacker = currentRow[3];
            posse[name].hp -= damage;
            if (posse[name].hp > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${posse[name].hp} HP!`);
            } else {
                delete posse[name];
                console.log(`${name} was gunned down by ${attacker}!`);
            }
        } else if (currentRow[0] == 'Reload') {
            let name = currentRow[1];
            if (posse[name].bullets < 6) {
                let reloaded = 6 - posse[name].bullets;
                posse[name].bullets = 6;
                console.log(`${name} reloaded ${reloaded} bullets!`);
            } else {
                console.log(`${name}'s pistol is fully loaded!`);
            }
        } else if (currentRow[0] == 'PatchUp') {
            let name = currentRow[1];
            let amount = Number(currentRow[2]);
            if (posse[name].hp < 100) {
                let before = posse[name].hp;
                posse[name].hp += amount;
                if (posse[name].hp > 100) {
                    posse[name].hp = 100;
                }
                let restored = posse[name].hp - before;
                console.log(`${name} patched up and recovered ${restored} HP!`);
            } else {
                console.log(`${name} is in full health!`);
            }
        }
        commandLine = input.shift();
    }
    for (const character in posse) {
        console.log(character);
        console.log(`HP: ${posse[character].hp}`);
        console.log(`Bullets: ${posse[character].bullets}`);
    }
}

solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])
);