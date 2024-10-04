import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	timeout: 60000,
	retries: 0,
	use: {
		headless: false,
		viewport: { width: 1200, height: 720 },
		actionTimeout: 15000,
		ignoreHTTPSErrors: true,
		video: "off",
		screenshot: "off",
		baseURL: "https://www.kofio.cz/",
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
