import { expect } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class KavaPage extends AbstractPage {
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

	async snapshotLocationFilterEmpty() {
		expect(
			await this.page
				.locator('button[data-id="availability_location"]')
				.screenshot(),
		).toMatchSnapshot("location-filter-empty.png");
	}

	async snapshotLocationFilter() {
		expect(
			await this.page
				.locator(
					"div.category_filter_selected_opts > label.checked > div > span",
				)
				.screenshot(),
		).toMatchSnapshot("location-filter-anywhere.png");
	}
}
