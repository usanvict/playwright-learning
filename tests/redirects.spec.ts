import { test, expect } from "@playwright/test";

test.describe("Check the redirects", async () => {
	test("Redirect to /kava", async ({ page }) => {
		await page.goto("/");

		await page.locator("#navbar").getByRole("link", { name: "Káva" }).click();

		await page.waitForURL("**/kava");

		await expect(page.locator("#filterTab")).toHaveText("Káva");
	});

	test("Redirect to /prislusenstvi", async ({ page }) => {
		await page.goto("/");

		await page
			.locator("#navbar")
			.getByRole("link", { name: "Příslušenství" })
			.click();

		await page.waitForURL("**/prislusenstvi");

		await expect(page.locator("#filterTab")).toHaveText("Kávové příslušenství");
	});

	test("Redirect to /prazirny", async ({ page }) => {
		await page.goto("/");

		await page
			.locator("#navbar")
			.getByRole("link", { name: "Pražírny" })
			.click();

		await page.waitForURL("**/prazirny");

		await expect(page.locator(".roaster_heading")).toHaveText("Pražírny kávy");
	});
});
