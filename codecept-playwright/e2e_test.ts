import LoginPage from "./pages/LoginPage";

Feature("Kofio - e2e tests");

const loginPage = new LoginPage();

Before(({ I }) => {
	console.log("Before Hook");
	I.amOnPage("https://kofio.cz/auth/login");
});

Scenario("Login test - Negative", ({ I }) => {
	I.see("Přihlášení");
	// I.fillField("div#front_temp input#login.form-control", "john.doe@gmail.com");
	// I.fillField("div#front_temp input#password.form-control", "12345678");
	// I.click("Přihlaste se");
	loginPage.submitLogin("joh.doe@gmail.com", "12345678");
	loginPage.assertLoginFormIsVisible();
	//I.see("Nesprávné přihlášení");
});

After(({ I }) => {
	console.log("After Hook");
});
