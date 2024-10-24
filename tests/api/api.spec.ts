import { test, expect } from "@playwright/test";

test.describe
	.parallel("API tests in parallel", () => {
		const baseURL = "https://petstore.swagger.io/v2";

		test("Simple API Test - Assert Response Status", async ({ request }) => {
			const response = await request.get(`${baseURL}/pet/2`);
			expect(response.status()).toBe(200);
		});

		test("Simple API Test - Assert Invalid Endpoint", async ({ request }) => {
			const response = await request.get(`${baseURL}/non-existing-endpoint`);
			expect(response.status()).toBe(404);
		});

		test("GET Request - Get Dog Detail", async ({ request }) => {
			const response = await request.get(`${baseURL}/pet/101`);
			const responseBody = JSON.parse(await response.text());
			expect(response.status()).toBe(200);
			expect(responseBody.id).toBe(2);
			expect(responseBody.name).toBeTruthy();
			expect(responseBody.status).toBeTruthy();
		});

		test("POST Request - Create new dog", async ({ request }) => {
			const response = await request.post(`${baseURL}/pet`, {
				data: {
					name: "Alex",
					category: {
						id: 5,
					},
				},
			});

			const responseBody = JSON.parse(await response.text());
			expect(responseBody.id).toBeTruthy();
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
			const response = await request.delete(`${baseURL}/pet/2`);
			expect(response.status()).toBe(204);
		});
	});
