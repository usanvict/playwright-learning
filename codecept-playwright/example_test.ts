Feature("example");

Scenario("should load kofio.cz", ({ I }) => {
	I.amOnPage("https://kofio.cz");
	I.see("Nejprodávanější kávové radosti");
	I.dontSee("Google");
	I.seeElement("svg");
	I.dontSeeElement("#idontexist");
});

Scenario("should load kofio.cz - second test", ({ I }) => {
	I.amOnPage("https://kofio.cz");
	I.see("Nejprodávanější kávové radosti");
	I.dontSee("Google");
	I.seeElement("svg");
	I.dontSeeElement("#idontexist");
});

Scenario("should load kofio.cz - third test", ({ I }) => {
	I.amOnPage("https://kofio.cz");
	I.see("Nejprodávanější kávové radosti");
	I.dontSee("Google");
	I.seeElement("svg");
	I.dontSeeElement("#idontexist");
});
