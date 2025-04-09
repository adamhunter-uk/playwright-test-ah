import { test, expect } from '@playwright/test';
import { LoginPage } from '../Config/loginPage';

test.describe.parallel('User Registration Flow', () => {
    test('UserRegFlow', async ({ page }) => {
        // Navigate to the website
        const loginPage = new LoginPage(page);
        await loginPage.automationPage();

        // Accept consent for data usage
        await loginPage.consentDialog();

        // Use LoginPage class to handle navigation and registration
        const uniqueId = Date.now(); 
        const username = `TestUser1_${uniqueId}`;
        const email = `test1_${uniqueId}@email.com`;
        await loginPage.navLoginRegPage();
        await loginPage.registerUser(username, email);
        console.log('Registering with:', username, email);

        // Fill in Registration form
        await page.getByLabel('Mr.').check();
        await page.getByLabel('Name *', { exact: true }).fill('Adam');
        await expect(page.getByLabel('Email *')).toHaveValue(email);
        await page.getByLabel('Password *').fill('Password12345!');
        await page.locator('#days').selectOption('1');
        await page.locator('#months').selectOption('6');
        await page.locator('#years').selectOption('1990');

        // Select preferences
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();

        // Fill in Address Details
        await page.getByLabel('First name *').fill('Adam');
        await page.getByLabel('Last name *').fill('Test');
        await page.getByLabel('Company', { exact: true }).fill('The Test Co');
        await page.getByLabel('Address * (Street address, P.').fill('First Street, NE1 2AB, The Test Co');
        await page.getByLabel('Country *').selectOption('Australia');
        await page.getByLabel('State *').fill('Queensland');
        await page.getByLabel('City *').fill('Brisbane');
        await page.locator('#zipcode').fill('NE1 4AB');
        await page.getByLabel('Mobile Number *').fill('01234567890');

        // Submit account creation
        await page.getByRole('button', { name: 'Create Account' }).click();

        // Validate account creation success
        const successMessage = page.locator('#form');
        await expect(successMessage).toContainText('Account Created!');
        await expect(successMessage).toContainText('Congratulations! Your new account has been successfully created!');

        // Navigate back to homepage
        await page.getByRole('link', { name: 'Continue' }).click();

        // Validate successful login
        const header = page.locator('#header');
        await expect(header).toContainText('Logout');
        await expect(header).toContainText('Logged in as Adam');
        await page.getByText('Logged in as Adam').click();

        // Delete account after test execution
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await expect(successMessage).toContainText('Account Deleted!');
        await expect(successMessage).toContainText('Your account has been permanently deleted!');

        // Confirm deletion and return to homepage
        await page.getByRole('link', { name: 'Continue' }).click();
    });
});
