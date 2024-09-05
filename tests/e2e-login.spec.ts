import { test, expect } from '@playwright/test'
import { loadHomepage } from '../helpers'

test.describe("Login / logout ", () => {
    test.beforeEach(async ({ page }) => {
        await loadHomepage(page)
    })

    test("Positive scenario", async ({ page }) => {
        await page.click(".auth_register")

        const logForm = page.locator("#login_email")
        await expect(logForm).toBeVisible()

        await page.fill("#login_email", process.env.KOFIO_USERNAME)
        await page.fill("#password", process.env.KOFIO_PASSWORD)

        await page.click("//button[@type='submit']");

        const userProfile = page.locator(".merchant_title_content_logged")

        try {
            await expect(userProfile).toBeVisible()
        } catch (error) {
            await page.waitForTimeout(3000);
            const frame = page.frameLocator("iframe[title='reCAPTCHA']")
            const label = frame.locator("#recaptcha-anchor-label")
            await expect(label).toBeVisible()
            console.log("Captcha is in the way, please fill in password manually and click on log in")
            await expect(userProfile).toBeVisible()
        }

    })
})