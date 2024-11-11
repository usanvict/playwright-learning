// import { Given, When, Then, defineStep } from "@cucumber/cucumber";
const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../page-objects/login-page");

const loginPage = new LoginPage();

Given(/^I am on a login page$/, async () => {
	await loginPage.navigateToLoginScreen();
});

When(/^I fill the login form with valid credentials$/, async () => {
	await loginPage.submitLoginForm();
});

Then(/^I am logged in$/, async () => {
	await loginPage.assertUserIsLoggedIn();
});
