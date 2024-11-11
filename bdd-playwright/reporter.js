const reporter = require("cucumber-html-reporter");

const options = {
	theme: "bootstrap",
	jsonFile: ".\\bdd-playwright\\cucumber_report.json",
	output: ".\\bdd-playwright\\reports\\cucumber_report.html",
	reportSuiteAsScenario: true,
	scenarioTimestamp: true,
	launchReport: false,
	metadata: {
		"App Version": "2.0.0",
		"Test Environment": "STAGING",
		Browser: "Chrome 120.1",
		Platform: "Windows 11",
	},
};

reporter.generate(options);
