function solve(passwordInput) {
    const isValidLength = passwordInput => passwordInput.length >= 6 && passwordInput.length <= 10;
    const isAlphaNumerical = passwordInput => /^[a-zA-Z0-9]+$/.test(passwordInput);
    const hasTwoOrMoreDigits = passwordInput => passwordInput
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;
    
    let isValidPassword = true;

    if (!isValidLength(passwordInput)) {
        console.log('Password must be between 6 and 10 characters');
        isValidPassword = false;
    }
    if (!isAlphaNumerical(passwordInput)) {
        console.log('Password must consist only of letters and digits');
        isValidPassword = false;
    }
    if (!hasTwoOrMoreDigits(passwordInput)) {
        console.log('Password must have at least 2 digits');
        isValidPassword = false;
    }
    if (isValidPassword) {
        console.log('Password is valid');
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');