import { test, expect } from "@playwright/test";

test.describe("Filtering the items", async () => {
	test.beforeEach("Redirect to /kava", async ({ page }) => {
		await page.goto("/");

		await page.locator("#navbar").getByRole("link", { name: "Káva" }).click();

		await page.waitForURL("**/kava");

		await expect(page.locator("#filterTab")).toHaveText("Káva");
	});

	test("Choose all the branches", async ({ page }) => {
		await page.selectOption("#availability_location", "0");

		await expect(
			page.locator(
				"div.category_filter_selected_opts > label.checked > div > span",
			),
		).toContainText("Kdekoliv");

		await page.locator("a.deleteAllFiltersBtn").click();

		await expect(page.locator("#availability_location")).toHaveValue("-1");
	});

	test("Filter discounts", async ({ page }) => {
		await page
			.locator('//span[contains(text(), "Slevy")]/preceding-sibling::input')
			.click();

		await expect(page.locator("#filterTab")).toHaveText("Slevy na kávu");

		await page.locator("a.deleteAllFiltersBtn").click();

		await expect(page.locator("#filterTab")).toHaveText("Káva");
	});
});
