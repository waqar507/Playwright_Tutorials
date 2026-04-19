import { test, expect } from '../fixtures/amazon-fixture.js';

test('Example of opening Amazon Site and search using Custom Fixtures', async({loginAndSearch})=> {
    await expect(loginAndSearch).toHaveTitle(/Nike/i);
})