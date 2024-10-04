import { test, expect } from "@playwright/test";

test("Search for some coffee", async ({ page }) => {
	await page.goto("/");
	await page.locator("#front_search_inp_lg").pressSequentially("Hayb");
	//await page.keyboard.press("Enter")

	await expect(page.locator("#search_complete_results")).toBeVisible();

	await expect(
		page.locator(
			"//h5[contains(text(), 'Pražírny')]//..//mark[contains(text(), 'HAYB')]",
		),
	).toBeVisible();
});
