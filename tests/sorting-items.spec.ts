import { test, expect } from "@playwright/test";
import { CategoryHeader } from "../page-objects/components/sorting";
import { KavaPage } from "../page-objects/KavaPage";

test.describe("Sorting items", async () => {
	let kavaPage: KavaPage;
	let categoryHeader: CategoryHeader;

	test.beforeEach(async ({ page }) => {
		kavaPage = new KavaPage(page);
		await kavaPage.visit();
		categoryHeader = new CategoryHeader(page);
	});

	test("Sorting Bestsellers", async () => {
		await categoryHeader.sort("Nejprodávanější");
	});

	test("Sorting Freshest", async () => {
		await categoryHeader.sort("Nejčerstvější");
	});

	test("Sorting best reviewed", async () => {
		await categoryHeader.sort("Nejlépe hodnocené");
	});

	test("Sorting cheapest as a whole", async () => {
		await categoryHeader.sort("Nejlevnější");
		await categoryHeader.sort("Od nejnižší celkové ceny");
	});
});
