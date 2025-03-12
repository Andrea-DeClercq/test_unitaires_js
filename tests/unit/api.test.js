const { expect } = require('playwright/test');
const { getUserData } = require('../../api');

global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear();
});

test("getUserData doit appeler l'API et retourner les bonnes données", async() => {
    const fakeUser = { id: 3, name: "Clementine Bauch", username: "Samantha" };

    fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(fakeUser)
    });

    const userData = await getUserData(3)

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/3");
    expect(userData).toEqual(fakeUser);
});

test("getUserData doit gérer les erreurs", async () => {
    fetch.mockResolvedValue({ ok: false });

    await expect(getUserData(1)).rejects.toThrow("Erreur lors de la récupération des données utilisateur");
});