import { test, expect } from '../fixtures/amazon-fixture.js';

test('Example of opening Amazon Site and search using Custom Fixtures 1', async({loginAndSearch})=> {
    await expect(loginAndSearch).toHaveTitle(/Nike/i);
})