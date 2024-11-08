import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	timeout: 60000,
	retries: 0,
	testDir: "tests/tips",
	use: {
		// headless: false,
		viewport: { width: 1200, height: 720 },
		actionTimeout: 15000,
		ignoreHTTPSErrors: true,
		video: "off",
		screenshot: "off",
	},
	// projects: [
	//     {
	//         name: 'setup',
	//         testMatch: /.*\.setup\.ts/
	//     },
	//     {
	//         name: 'logging out',
	//         testMatch: '**/logging-out.spec.ts',
	//         use: {
	//             storageState: 'playwright/.auth/user.json',
	//         },
	//         dependencies: ['setup'],
	//     },
	// ],

	//globalSetup: require.resolve('./global-setup')
};

export default config;
