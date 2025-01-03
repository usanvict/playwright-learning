const { expect } = require("@playwright/test");

class LoginPage {
	async navigateToLoginScreen() {
		await page.goto("https://forbes.cz/authentication/");
	}

	async submitLoginForm() {
		await page.click(
			"#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection",
		);
		await page.fill(`input[type="email"]`, "victoria.usan@gmail.com");
		await page.click("//button[text()='Pokračovat']");
		await page.fill(`input[type="password"]`, "%nEzHozNM4fbBTEH");
		await page.click("//button[text()='Přihlásit se']");
	}

	async assertUserIsLoggedIn() {
		await expect(page).toHaveURL("https://forbes.cz/my-account/");
	}

	async pause() {
		await page.waitForTimeout(3000);
	}

	async clickOnButton(button) {
		await page.click(`//button[text()='${button}']`);
	}

	async enterEmail(email) {
		await page.click(
			"#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection",
		);
		await page.fill(`input[type="email"]`, email);
	}

	async enterPassword(password) {
		await page.fill(`input[type="password"]`, password);
	}
}

module.exports = { LoginPage };
