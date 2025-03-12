async function getUserData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données utilisateurs");
    }
    return response.json();
}

module.exports = { getUserData };