import { test, expect } from "@playwright/test";

test.describe
	.only("Tips & Tricks", () => {
		test("TestInfo Object", async ({ page }, testInfo) => {
			await page.goto("https://www.kofio.cz/");
			console.log(testInfo.title);
		});
	});
