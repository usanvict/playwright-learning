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

When(/^I fill the login form with email "([^"]*)"$/, async (username) => {
	await loginPage.enterEmail(username);
});

When(/^I click on "([^"]*)"$/, async (button) => {
	await loginPage.clickOnButton(button);
});

When(/^I fill the login form with password "([^"]*)"$/, async (password) => {
	await loginPage.enterPassword(password);
});

Then(/^I am logged in$/, async () => {
	await loginPage.assertUserIsLoggedIn();
});

Then(/^I wait for 3 seconds$/, async () => {
	await loginPage.pause();
});
