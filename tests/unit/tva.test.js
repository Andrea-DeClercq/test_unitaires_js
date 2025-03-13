const { calculerTVA } = require('../../tva');

describe('calculerTVA', () => {
    test('TVA de 100€ à 20% doit donner 120€', () => {
        expect(calculerTVA(100, 20)).toBe(120);
    });

    test('TVA de 50€ à 5.5% doit donner 52.75€', () => {
        expect(calculerTVA(50, 5.5)).toBeCloseTo(52.75);
    });

    test('Doit lever une erreur si le prix est négatif', () => {
        expect(() => calculerTVA(-100, 20)).toThrow("Le prix et le taux doivent être positifs");
    });

    test('Doit lever une erreur si le taux est négatif', () => {
        expect(() => calculerTVA(100, -5)).toThrow("Le prix et le taux doivent être positifs");
    });

    test('Avec un taux de 0%, le prix reste le même', () => {
        expect(calculerTVA(100, 0)).toBe(100);
    });

    test('Gérer des prix très élevés', () => {
        expect(calculerTVA(1_000_000, 20)).toBe(1_200_000);
    });
});
