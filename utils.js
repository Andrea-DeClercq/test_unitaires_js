function somme(a, b) {
    return a + b;
}

function estPair(n) {
    return n % 2 === 0;
}

function factorielle(n) {
    return n === 0 ? 1 : n * factorielle(n - 1);
}

module.exports = { somme, estPair, factorielle };