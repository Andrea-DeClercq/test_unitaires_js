function calculerTVA(prix, taux) {
    if (prix < 0 || taux < 0) {
        throw new Error("Le prix et le taux doivent être positifs");
    }
    return prix * (1 + taux / 100);
}

module.exports = { calculerTVA };
