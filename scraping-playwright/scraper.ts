import playwright from "playwright";
import random_user_agent from "random-useragent";
import fs from "node:fs";

const BASE_URL = "https://github.com/topics/playwright";
(async () => {
	// Create random agent
	const agent = random_user_agent.getRandom();
	// Setup browser
	const browser = await playwright.chromium.launch({ headless: true });
	const context = await browser.newContext({
		bypassCSP: true,
		userAgent: agent,
	});
	const page = await context.newPage();
	page.setDefaultTimeout(30000);
	await page.setViewportSize({ width: 800, height: 600 });
	await page.goto(BASE_URL);

	// Get Data
	const repositories = await page.$$eval("article.border", (repoCards) => {
		return repoCards.map((card) => {
			const [user, repo] = card.querySelectorAll<HTMLElement>("h3 a");

			const formatText = (element: HTMLElement) => element?.innerText.trim();

			return {
				user: formatText(user),
				repo: formatText(repo),
				url: (repo as HTMLLinkElement).href,
			};
		});
	});
	// Store data
	const logger = fs.createWriteStream("data.txt", { flags: "w" });
	logger.write(JSON.stringify(repositories, null, " "));

	// Close browser
	await browser.close();
})().catch((error) => {
	console.log(error);
	process.exit(1);
});
