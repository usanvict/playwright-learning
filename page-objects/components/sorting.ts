import { expect, type Locator, type Page } from "@playwright/test";

export class CategoryHeader {
	readonly page: Page;
	readonly categoryTop: Locator;
	readonly categoryBestseller: Locator;
	readonly categoryFreshest: Locator;
	readonly categoryReviews: Locator;
	readonly categoryCheapest: Locator;
	readonly categoryCheapestAsWhole: Locator;
	readonly categoryCheapestPerGram: Locator;
	readonly categoryExpensive: Locator;

	constructor(page: Page) {
		this.page = page;
		this.categoryTop = page.getByRole("link", { name: "Top" });
		this.categoryBestseller = page.getByRole("link", {
			name: "Nejprodávanější",
		});
		this.categoryFreshest = page.getByRole("link", { name: "Nejčerstvější" });
		this.categoryReviews = page.getByRole("link", {
			name: "Nejlépe hodnocené",
		});
		this.categoryCheapest = page.getByRole("link", {
			name: "Nejlevnější",
		});
		this.categoryCheapestAsWhole = page.getByRole("link", {
			name: "Od nejnižší celkové ceny",
		});
		this.categoryCheapestPerGram = page.getByRole("link", {
			name: "Od nejnižší ceny za 1 g kávy",
		});
		this.categoryExpensive = page.locator(
			`a[onclick="return setLabel('price_up')"]`,
		);
	}

	async sort(category: string) {
		switch (category) {
			case "Top":
				await this.categoryTop.click();
				break;
			case "Nejprodávanější":
				await this.categoryBestseller.click();
				break;
			case "Nejčerstvější":
				await this.categoryFreshest.click();
				await expect(this.categoryFreshest).toHaveClass("current");
				break;
			case "Nejlépe hodnocené":
				await this.categoryReviews.click();
				break;
			case "Od nejnižší celkové ceny":
				await this.categoryCheapestAsWhole.click();
				break;
			case "Nejlevnější":
                await this.categoryCheapest.click();
				break;
			default:
				throw new Error("This category doesn't exist");
		}
	}
}
