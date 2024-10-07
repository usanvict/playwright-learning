import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test.describe
	.only("Login using page object pattern", () => {
		let loginPage: LoginPage;

		test.beforeEach(async ({ page }) => {
			loginPage = new LoginPage(page);
			loginPage.visit();
		});

		test("Negative login", async ({ page }) => {
			await loginPage.login("invalid", "invalid");
			await loginPage.assertErrorMessage();
		});
	});
