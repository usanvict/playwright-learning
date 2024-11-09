//import { Given, When, Then, defineStep } from "@cucumber/cucumber";
const { Given, When, Then, defineStep } = require("@cucumber/cucumber");

Given(/^I am on a login page$/, async ()=> {
	await page.goto("https://forbes.cz/authentication/");
});
