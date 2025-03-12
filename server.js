const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const users = {
    "test@test.com": "azertyuiop"
};

app.get("/login", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Connexion</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; }
                    form { display: inline-block; margin-top: 50px; }
                    .error-message { color: red; }
                </style>
            </head>
            <body>
                <h2>Connexion</h2>
                ${req.query.error ? '<p class="error-message">Identifiants incorrects</p>' : ""}
                <form action="/login" method="POST">
                    <input type="email" name="email" placeholder="Email" required /><br><br>
                    <input type="password" name="password" placeholder="Mot de passe" required /><br><br>
                    <button type="submit">Se connecter</button>
                </form>
            </body>
        </html>
    `);
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    if (users[email] && users[email] === password) {
        res.cookie("auth", "true", { httpOnly: true });
        res.redirect("/dashboard");
    } else {
        res.redirect("/login?error=1");
    }
});


app.get("/dashboard", (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect("/login");
    }
    res.send(`
        <html>
            <head>
                <title>Dashboard</title>
            </head>
            <body>
                <h2>Bienvenue sur votre tableau de bord</h2>
                <button id="logout" onclick="logout()">Déconnexion</button>
                <script>
                    function logout() {
                        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        window.location.href = "/login";
                    }
                </script>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
