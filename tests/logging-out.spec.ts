import { test, expect } from '@playwright/test';

test.skip('Logging in to the webpage', async ({ page }) => {

    await page.goto('/');
    await page.getByRole('button', { name: 'Moje Kofio' }).click()

    await page.getByRole('link', { name: 'Odhlásit se' }).click()

    const login = page.locator(".auth_register")

    await expect(login).toBeVisible()
})
