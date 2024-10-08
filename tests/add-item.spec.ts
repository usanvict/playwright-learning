import { test, expect } from "@playwright/test";

test.describe("Adding item to cart", async () => {
	test("Add coffee to a cart", async ({ page }) => {
		await page.goto("/");

		await page.locator("#navbar").getByRole("link", { name: "Káva" }).hover();

		await page
			.locator(".special_categories")
			.getByTitle("Káva - Slevy")
			.click();

		await expect(page.locator("#filterTab")).toHaveText("Slevy na kávu");

		await page
			.locator(".coffee_category_item")
			.first()
			.locator("div.category_item_footer")
			.hover();

		await page.click("button.btnSimpleAddToCart");

		await expect(page.locator(".push_header_cart")).toBeVisible();
		await expect(page.locator(".product_buy_amount")).toHaveValue("1");

		await page.locator("div.black_overlay_x").click();

		await expect(page.locator("#showRightPush > div.cart_total")).toHaveText(
			"1",
		);
	});
});
