import { test, expect } from "@playwright/test";

test.describe("Visual regression testing", () => {
	test("Full page snapshots", async ({ page }) => {
		await page.goto("");
		expect(await page.screenshot()).toMatchSnapshot("homepage.png");
	});

	test("Single element snapshot", async ({ page }) => {
		await page.goto("");
		const kavaSection = page.locator('svg[alt="Kofio"]').first();
		expect(await kavaSection.screenshot()).toMatchSnapshot("kofio-logo.png");
	});
});
