import { test, expect } from "@playwright/test";

test.describe
	.only("Filtering the items", async () => {
		test.beforeEach("Redirect to /kava", async ({ page }) => {
			await page.goto("/");

			await page.locator("#navbar").getByRole("link", { name: "Káva" }).click();

			await page.waitForURL("**/kava");

			await expect(page.locator("#filterTab")).toHaveText("Káva");
		});

		test("Choose all the branches", async ({ page }) => {
			await page.selectOption("#availability_location", "0");

			await expect(
				page.locator("div.category_filter_selected_opts > label.checked > div > span"),
			).toContainText("Kdekoliv");
		});
	});
