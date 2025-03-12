const { somme, estPair, factorielle } = require("./utils");

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
