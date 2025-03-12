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
    await expect(page).toHaveUrl('/dashboard');
})