const { I } = inject();

class LoginPage {
	readonly username: string;
	readonly password: string;
	readonly submitButton: string;
	readonly loginForm: string;

	constructor() {
		this.username = "div#front_temp input#login.form-control";
		this.password = "div#front_temp input#password.form-control";
		this.submitButton = "Přihlaste se";
		this.loginForm = "Nesprávné přihlášení";
	}

	async submitLogin(username: string, password: string) {
		I.fillField(this.username, username);
		I.fillField(this.password, password);
		I.click(this.submitButton);
	}

	async assertLoginFormIsVisible() {
		I.see(this.loginForm);
	}
}

// For inheritance
module.exports = new LoginPage();
export = LoginPage;
