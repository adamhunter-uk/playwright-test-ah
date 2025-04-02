// loginPage.ts
import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async consentDialog() {
    const consentButton = this.page.getByLabel('Consent', { exact: true });
    await expect(consentButton).toBeVisible();
    await consentButton.click();
    await expect(consentButton).not.toBeVisible();
  }
  
  async automationPage() {
    await this.page.goto('https://automationexercise.com/');
    console.log('Navigated to Automation Exercise');
    await expect(this.page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  }

  async navLoginRegPage() {
    await this.page.getByRole('link', { name: ' Signup / Login' }).click();
  }

  async loginIn() {
    await this.page.getByPlaceholder('Email Address').fill('test@email.com');
    await this.page.getByPlaceholder('Password').fill('Password12345!');
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async registerUser(name: string, email: string) {
    await this.page.getByPlaceholder('Name').fill(name);
    await this.page
      .locator('form')
      .filter({ hasText: 'Signup' })
      .getByPlaceholder('Email Address')
      .fill(email);
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }
}
