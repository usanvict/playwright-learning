import { test } from "@playwright/test";
import { KavaPage } from "../../page-objects/KavaPage";

test.describe("Kava Page visual tests", () => {
	let kavaPage: KavaPage;

	test.beforeEach(async ({ page }) => {
		kavaPage = new KavaPage(page);
		await kavaPage.visit();
	});

	test("Empty location filter", async ({ page }) => {
		await kavaPage.snapshotLocationFilterEmpty();
	});

	test("Anywhere location filter", async ({ page }) => {
		await kavaPage.chooseLocation("0");
		await kavaPage.assertLocationFilterTurnedOn("Kdekoliv");
		await kavaPage.snapshotLocationFilter();
	});
});
