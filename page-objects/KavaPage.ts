import { expect, type Locator, type Page } from "@playwright/test";

export class KavaPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async visit() {
		await this.page.goto("/kava");
	}

	async chooseLocation(location: string) {
		await this.page.selectOption("#availability_location", location);
	}

	async assertLocationFilterTurnedOn(location: string) {
		await expect(
			this.page.locator(
				"div.category_filter_selected_opts > label.checked > div > span",
			),
		).toContainText(location);
	}

	async removeAnyFilter() {
		await this.page.locator("a.deleteAllFiltersBtn").click();
	}

	async assertLocationFilterTurnedOff(location: string) {
		await expect(this.page.locator("#availability_location")).toHaveValue("-1");
	}

	async chooseSpecialOfferItem(specialOffer: string) {
		await this.page
			.locator(
				`//span[contains(text(), '${specialOffer}')]/preceding-sibling::input`,
			)
			.click();
	}

	async assertCategoryChosen(category: string) {
		await expect(this.page.locator("#filterTab")).toHaveText(category);
	}
}
