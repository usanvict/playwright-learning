import { test, expect } from "@playwright/test";

test.describe("API tests in parallel", () => {
	const baseURL = "https://petstore.swagger.io/v2";

	test("POST Request - Create new dog", async ({ request }) => {
		const response = await request.post(`${baseURL}/pet`, {
			data: {
				id: 65488,
				name: "Alex",
				category: {
					id: 5,
				},
				status: "available",
			},
		});

		const responseBody = JSON.parse(await response.text());
		expect(responseBody.id).toBeTruthy();
	});

	test("Simple API Test - Assert Invalid Endpoint", async ({ request }) => {
		const response = await request.get(`${baseURL}/non-existing-endpoint`);
		expect(response.status()).toBe(404);
	});

	test("GET Request - Get Dog Detail", async ({ request }) => {
		const response = await request.get(`${baseURL}/pet/65488`);
		const responseBody = JSON.parse(await response.text());
		expect(response.status()).toBe(200);
		expect(responseBody.id).toBe(65488);
		expect(responseBody.name).toBeTruthy();
		expect(responseBody.status).toBeTruthy();
	});

	test("GET Request - Login", async ({ request }) => {
		const response = await request.get(`${baseURL}/user/login`, {
			data: {
				username: "admin",
				password: "admin",
			},
		});
		expect(response.status()).toBe(200);
	});

	test.skip("GET Request - Login Failed", async ({ request }) => {
		const response = await request.get(`${baseURL}/user/login`, {
			data: {
				username: "admin",
				password: "",
			},
		});
		expect(response.status()).toBe(400);
	});

	test("PUT Request - Update dog", async ({ request }) => {
		const response = await request.put(`${baseURL}/pet`, {
			data: {
				id: 65488,
				name: "Alexis",
				category: {
					id: 5,
				},
			},
		});
		expect(response.status()).toBe(200);

		const responseBody = JSON.parse(await response.text());
		expect(responseBody.name).toBe("Alexis");
	});

	test("DELETE Request - Delete Dog", async ({ request }) => {
		const response = await request.delete(`${baseURL}/pet/65488`);
		expect(response.status()).toBe(200);
	});
});
