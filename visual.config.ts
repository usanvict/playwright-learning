import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	testDir: "tests/visual",
	timeout: 60000,
	retries: 0,
	use: {
		viewport: { width: 1200, height: 720 },
		actionTimeout: 15000,
		ignoreHTTPSErrors: true,
		video: "off",
		screenshot: "off",
		baseURL: "https://www.kofio.cz/",
	},
};

export default config;
