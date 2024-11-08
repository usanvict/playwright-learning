import { test } from "@playwright/test";
import { getRandomNumber, getRandomString } from "../../utils/datahelpers";

test.describe
	.only("Tips & Tricks", () => {
		test("TestInfo Object", async ({ page }, testInfo) => {
			await page.goto("https://www.kofio.cz/");
			console.log(testInfo.title);
			console.log(testInfo.expectedStatus);
		});

		test.only("Random", async ({ page }, testInfo) => {
			const newNumber = await getRandomNumber();
			console.log(newNumber);
			const newString = await getRandomString();
			console.log(newString);
		});

		// any other skipping reason
		test("Test Skip Browser", async ({ page, browserName }) => {
			test.skip(
				browserName === "chromium",
				"Feature not ready in Chrome browser",
			);
			await page.goto("https://www.kofio.cz/");
		});

		// use this once code is not stable or revision
		test("Test Fixme Annotation", async ({ page, browserName }) => {
			test.fixme(
				browserName === "chromium",
				"Test is not feeling well, needs revision",
			);
			await page.goto("https://www.kofio.cz/");
		});

		test("Test Fixme Annotation 2", async ({ page, browserName }) => {
			// add --retries=XXX to run the retries
			await page.goto("httpswww.kofio.cz/");
		});

		const people = ["Mike", "Judy", "Peter", "Alice", "Bob"];
		for (const name of people) {
			test(`Running test for ${name}`, async ({ page }) => {
				console.log(`${name}`);
			});
		}

		test("Mouse Movements Simulation", async ({ page }) => {
			await page.goto("https://www.kofio.cz/");
			await page.mouse.move(0, 0);
			await page.mouse.down();
			await page.mouse.move(0, 100);
			await page.mouse.up();
		});

		test("Multiple Browser Tabs inside one browser", async ({ browser }) => {
			const context = await browser.newContext();
			const page1 = await context.newPage();
			const page2 = await context.newPage();
			const page3 = await context.newPage();

			await page1.goto("https://www.kofio.cz/");
			await page2.goto("https://www.kofio.cz/");
			await page3.goto("https://www.kofio.cz/");

			await page1.waitForTimeout(5000);
		});
	});
