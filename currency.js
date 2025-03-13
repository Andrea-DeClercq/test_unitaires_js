function convertirMontant(montant, taux) {
    if (montant < 0 || taux < 0) {
        throw new Error("Le montant et le taux doivent être positifs");
    }
    return montant * taux;
}

module.exports = { convertirMontant };