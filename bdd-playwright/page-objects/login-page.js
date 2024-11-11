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
}

module.exports = { LoginPage };
