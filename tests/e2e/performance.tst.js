import { test, expect } from '@playwright/test';

test("Mesurer les performances de la page d'accueil", async ({ page }) => {
    const startTime = Date.now();

    await page.goto('http://google.com');

    const loadTime = Date.now() - startTime;
    console.log(`Temps de chargement total : ${loadTime} ms`);

    expect(loadTime).toBeLessThan(3000);
});

test("Vérifier les métriques de performance", async ({ page }) => {
    await page.goto('http://google.com')
    
    const performance = await page.evaluate(() => JSON.stringify(window.performance));
    const perfData = JSON.parse(performance);

    console.log("Métriques de performance : ", perfData);

    const fcp = perfData.timing.domContentLoadedEventEnd - perfData.timing.navigationStart;
    const lcp = perfData.timing.loadEventEnd - perfData.timing.navigationStart;

    console.log(`FCP: ${fcp} ms, LCP: ${lcp} ms`);

    expect(fcp).toBeLessThan(2500);
    expect(lcp).toBeLessThan(3000);
})