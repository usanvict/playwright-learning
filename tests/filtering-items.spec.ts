import { test, expect } from "@playwright/test";
import { KavaPage } from "../page-objects/KavaPage";

test.describe
	.only("Filtering the items", async () => {
		let kavaPage: KavaPage;

		test.beforeEach(async ({ page }) => {
			kavaPage = new KavaPage(page);
			kavaPage.visit();
		});

		test("Choose all the branches", async ({ page }) => {
			await kavaPage.chooseLocation("0");
			await kavaPage.assertLocationFilterTurnedOn("Kdekoliv");
			await kavaPage.removeAnyFilter();
			await kavaPage.assertLocationFilterTurnedOff("-1");
		});

		test("Filter discounts", async ({ page }) => {
			await kavaPage.chooseSpecialOfferItem("Slevy");
			await kavaPage.assertCategoryChosen("Slevy na kávu");
			await kavaPage.removeAnyFilter();
			await kavaPage.assertCategoryChosen("Káva");
		});
	});
