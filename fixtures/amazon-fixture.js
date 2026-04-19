import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    loginAndSearch: async ({page}, use) => {
        await page.goto("https://www.amazon.in/");
        await page.getByRole("searchbox", { name: "Search Amazon.in" })
                  .fill("Nike Shoes");
        await page
                .locator('[role="rowgroup"] div[role="button"]')
                .filter({ hasText: "nike shoes for man running" })
                .click();

        await use(page);
    }
})

// ADD THIS LINE AT THE BOTTOM
export { expect };