import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage : HomePage;
let registrationPage : RegistrationPage;
let config: TestConfig;

test.beforeEach(async({page})=>{
    //Navigate to app URL
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);

})

test.afterEach(async({page})=>{
    await page.waitForTimeout(3000);
    await page.close();
    
})

test('User Registration test @master @sanity @regression', async()=>{

    //Go to 'My Account' and click on 'Register'
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //Fill the details in Registartion Page
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
    
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinuebtn();

})