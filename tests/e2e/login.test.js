import { test, expect } from '@playwright/test';

test("Le formulaire de connexion doit contenier les champs email et mot de passe", async ({ page }) => {
    await page.goto("/login");

    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
});

test('Simuler une connexion avec un utilisateur valide', async ({ page }) => {
    await page.goto('/login');

    await page.fill('input[name="email"]', 'test@test.com');
    await page.fill('input[name="password"]', 'azertyuiop');

    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
})

test('Simuler une connexion avec un utilisateur invalide', async ({ page }) => {
    await page.goto('/login');

    await page.fill('input[name="email"]', 'mauvais@user.com'); // Faux identifiant
    await page.fill('input[name="password"]', 'wrongpassword'); // Faux mot de passe

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/login?error=1');

    await expect(page.locator('.error-message')).toHaveText('Identifiants incorrects');
});