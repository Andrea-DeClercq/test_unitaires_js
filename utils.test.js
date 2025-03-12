const { somme, estPair, factorielle, calculerEtAfficherFactorielle } = require("./utils");

test("somme(2, 3) doit retourner 5", () => {
    expect(somme(2, 3)).toBe(5);
});

test("estPair(4) doit retourner true", () => {
    expect(estPair(4)).toBe(true);
});

test("estPair(5) doit retourner false", () => {
    expect(estPair(5)).toBe(false);
});

test("factorielle(0) doit retourner 1", () => {
    expect(factorielle(0)).toBe(1);
});

test("factorielle(5) doit retourner 120", () => {
    expect(factorielle(5)).toBe(120);
});

test("factorielle(-1) doit lever une erreur", () => {
    expect(() => factorielle(-1)).toThrow("Nombre négatif interdit");
});

test("calculerEtAfficherFactorielle appelle la fonction log", () => {
    const mockLog = jest.fn();
    calculerEtAfficherFactorielle(5, mockLog);

    expect(mockLog).toHaveBeenCalledTimes(1);
    expect(mockLog).toHaveBeenCalledWith("La factorielle de 5 est 120");
});