import { test, expect, chromium } from "@playwright/test";

test.skip("Test case to demonstrate tab switching", async () => {
  const browser = await chromium.launch();

  // 2. Create the Context (The "Isolated Session")
  const context = await browser.newContext();

  // 3. Create a Page (The "Tab") within that context
  const page = await context.newPage();

  await page.goto("E:\\dummy_wesbites\\dummy.html");

  // Code No. 1 - One way to handle the new tab 

  //const newPagePromise= context.waitForEvent("page")

  //await page.getByRole("button", { name: "Open Yahoo in New Tab" }).click();

  // const newPage = await newPagePromise;
  // await newPage.waitForLoadState();
  // console.log("New page title  is: " + (await newPage.title()));
  // await page.bringToFront();
  // console.log("Current page title is: " + (await page.title()));

  //Code No. 2 - will wait for the new tab to open and then switch to it
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open Yahoo in New Tab" }).click(),
  ]);
  await newPage.waitForLoadState();
  console.log("New page title  is: " + (await newPage.title()));
  await page.bringToFront();
  console.log("Current page title is: " + (await page.title()));

  await page.pause();
});


test('Test case to demonstrate tab switching using fixtures', async ({page, context}) => {
  await page.goto("E:\\dummy_wesbites\\dummy.html");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open Yahoo in New Tab" }).click(),
  ]);
  await newPage.waitForLoadState();
  console.log("New page title  is: " + (await newPage.title()));
  await page.bringToFront();
  console.log("Current page title is: " + (await page.title()));
})