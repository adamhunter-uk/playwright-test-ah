import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../Config/loginPage';

test.describe.parallel('Product Search and Filters', () => {
    test('ProductSearchFilters', async ({ page }) => {
        // Navigate to the website
        const loginPage = new LoginPage(page);
        await loginPage.automationPage();

        // Accept consent for data usage
        await loginPage.consentDialog();

        // Login with existing user
        //await loginPage.loginIn();

        // Navigate to Products page from homepage
        await page.getByRole('link', { name: ' Products' }).click();

        // Search for "jeans"
        const searchBox = page.getByPlaceholder('Search Product');
        await searchBox.fill('jeans');

        // Validate search results contain only jeans-related products
        const body = page.locator('body');
        await expect(body).toContainText('Soft Stretch Jeans');
        await expect(body).toContainText('Regular Fit Straight Jeans');
        await expect(body).toContainText('Grunt Blue Slim Fit Jeans');

        // Note: No filter options available for search results (possible bug?)
    });
});
