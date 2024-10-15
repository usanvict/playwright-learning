import { expect, type Locator, type Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class LoginPage extends AbstractPage {
	//readonly page: Page;
	readonly usernameInput: Locator;
	readonly passwordInput: Locator;
	readonly submitButton: Locator;
	readonly errorMessage: Locator;

	constructor(page: Page) {
		// this.page = page;
		super(page);
		this.usernameInput = page.locator(
			"div#front_temp input#login.form-control",
		);
		this.passwordInput = page.locator(
			"div#front_temp input#password.form-control",
		);
		this.submitButton = page.locator("div#front_temp button");
		this.errorMessage = page.locator("div#front_temp form p");
	}

	async visit() {
		await this.page.goto("/auth/login");
	}

	async login(username: string, password: string) {
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.submitButton.click();
	}

	async assertErrorMessage() {
		await expect(this.errorMessage).toContainText("Nesprávné přihlášení");
	}
}
