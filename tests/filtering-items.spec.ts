import { test } from "@playwright/test";
import { KavaPage } from "../page-objects/KavaPage";

test.describe("Filtering the items", async () => {
	let kavaPage: KavaPage;

	test.beforeEach(async ({ page }) => {
		kavaPage = new KavaPage(page);
		await kavaPage.visit();
	});

	test("Choose all the branches", async () => {
		await kavaPage.chooseLocation("0");
		await kavaPage.assertLocationFilterTurnedOn("Kdekoliv");
		// await kavaPage.wait(3000);
		await kavaPage.removeAnyFilter();
		await kavaPage.assertLocationFilterTurnedOff("-1");
	});

	test("Filter discounts", async () => {
		await kavaPage.chooseSpecialOfferItem("Slevy");
		await kavaPage.assertCategoryChosen("Slevy na kávu");
		await kavaPage.removeAnyFilter();
		await kavaPage.assertCategoryChosen("Káva");
	});
});
