const usersDB = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

function getUserById(id) {
    return usersDB.find(user => user.id === id) || null;
}

module.exports = { getUserById };
