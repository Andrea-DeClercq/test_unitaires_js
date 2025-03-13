const  { convertirMontant } = require('../../currency');

describe('convertirMontant', () => {
    test('Convertir 100 avec un taux de 1.2 doit retourner 120', () => {
        expect(convertirMontant(100, 1.2)).toBe(120);
    });

    test('Doit lever une erreur si le montant est négatif', () => {
        expect(() => convertirMontant(-100, 1.2)).toThrow("Le montant et le taux doivent être positifs");
    });

    test('Doit lever une erreur si le taux est négatif', () => {
        expect(() => convertirMontant(100, -1.2)).toThrow("Le montant et le taux doivent être positifs");
    });

    test('Doit retourner 0 si le taux est 0', () => {
        expect(convertirMontant(100, 0)).toBe(0);
    });

    test('Doit gérer des montants très élevés', () => {
        expect(convertirMontant(1_000_000_000, 2)).toBe(2_000_000_000);
    });
});
