import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';

let config : TestConfig;
let homePage : HomePage;
let loginPage : LoginPage;
let myAccountPage : MyAccountPage;

test.beforeEach(async({page})=>{
    //Navigate to app URL
    config = new TestConfig();
    await page.goto(config.appUrl);

    //Initialize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
});

test.afterEach(async({page})=>{
    await page.close();
});

test('User login test @master @sanity @regression', async()=>{
    //Navigate to LoginPage from HomePage
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter valid credentials and login
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickOnLoginbtn();

    //Verify successful login by checking 'My Account' page presence
    const isLoggedIn = myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();
})