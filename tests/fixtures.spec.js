import { test, expect } from '../fixtures/amazon-fixture.js';

// Change this line
test.beforeEach(async () => {
    console.log("This will execute before each test case");
     await page.goto("https://www.amazon.in/");
     await page.getByRole("searchbox", { name: "Search Amazon.in" })
                  .fill("Nike Shoes");
     await page
                .locator('[role="rowgroup"] div[role="button"]')
                .filter({ hasText: "nike shoes for man running" })
                .click();
});

test('Example of opening Amazon Site and search using Custom Fixtures 1', async({loginAndSearch})=> {
    await expect(loginAndSearch).toHaveTitle(/Nike/i);
})

test('Example of opening Amazon Site and search using Custom Fixtures 2', async({loginAndSearch})=> {
    await expect(loginAndSearch).toHaveTitle(/Yahoo/i);
})

test('Example of opening Amazon Site and search using Custom Fixtures 3', async({loginAndSearch})=> {
    await expect(loginAndSearch).toHaveTitle(/Jabong/i);
})

test('Example of opening Amazon Site and search using Custom Fixtures 4', async({loginAndSearch})=> {
    
})