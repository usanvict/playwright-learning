import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	timeout: 60000,
	retries: 0,
	testDir: "tests/api",
	workers: 1,
	use: {
		viewport: { width: 1200, height: 720 },
		actionTimeout: 15000,
		ignoreHTTPSErrors: true,
		video: "off",
		screenshot: "off",
		baseURL: "https://www.reqres.in/",
	},
};

export default config;
