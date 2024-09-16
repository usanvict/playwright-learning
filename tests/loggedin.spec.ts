import { test, expect } from '@playwright/test';

test('logs user out', async ({ page }) => {

    await page.goto('/');
    await page.getByRole('button', { name: 'Moje Kofio' }).click()

    await page.getByRole('link', { name: 'Odhlásit se' }).click()

    const login = page.locator(".auth_register")

    await expect(login).toBeVisible()
})
