import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test.describe.skip("Login using page object pattern", () => {
	let loginPage: LoginPage;

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page);
		loginPage.visit();
	});

	test("Negative login", async () => {
		await loginPage.login("invalid", "invalid");
		await loginPage.assertErrorMessage();
	});
});
