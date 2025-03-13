const { getUserById } = require('../../userService');

describe('getUserById', () => {
    test('Doit retourner l’utilisateur correspondant à l’ID', () => {
        expect(getUserById(1)).toEqual({ id: 1, name: "Alice", email: "alice@example.com" });
    });

    test('Doit retourner null si l’ID n’existe pas', () => {
        expect(getUserById(999)).toBeNull();
    });

    test('Doit appeler la base de données simulée avec un mock', () => {
        const mockDB = [
            { id: 1, name: "Mock Alice", email: "mockalice@example.com" },
            { id: 2, name: "Mock Bob", email: "mockbob@example.com" }
        ];

        const mockGetUserById = jest.fn((id) => mockDB.find(user => user.id === id) || null);

        expect(mockGetUserById(1)).toEqual({ id: 1, name: "Mock Alice", email: "mockalice@example.com" });
        expect(mockGetUserById(999)).toBeNull();
        expect(mockGetUserById).toHaveBeenCalledTimes(2);
    });
});
