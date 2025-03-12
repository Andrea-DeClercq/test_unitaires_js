function somme(a, b) {
    return a + b;
}

function estPair(n) {
    return n % 2 === 0;
}

function factorielle(n) {
    if (n < 0) throw new Error("Nombre négatif interdit");
    return n === 0 ? 1 : n * factorielle(n - 1);
}

function calculerEtAfficherFactorielle(n, logFunction) {
    const result = factorielle(n);
    logFunction(`La factorielle de ${n} est ${result}`);
    return result;
}

function inverse() {

}

module.exports = { somme, estPair, factorielle, calculerEtAfficherFactorielle, inverse };