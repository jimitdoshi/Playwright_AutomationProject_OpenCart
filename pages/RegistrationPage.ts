import { Page, expect, Locator } from "@playwright/test";

export class RegistrationPage {

    private readonly page: Page;

    //variables
    private readonly textFirstName: Locator;
    private readonly textLastName: Locator;
    private readonly textEmail: Locator;
    private readonly textTelephone: Locator;
    private readonly textPassword: Locator;
    private readonly textConfirmPassword: Locator;
    private readonly checkedPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;


    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.textFirstName = page.locator('#input-firstname');
        this.textLastName = page.locator('#input-lastname');
        this.textEmail = page.locator('#input-email');
        this.textTelephone = page.locator('#input-telephone');
        this.textPassword = page.locator('#input-password');
        this.textConfirmPassword = page.locator('#input-confirm');
        this.checkedPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('input[value="Continue"]');
        this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
    }

    //Action methods

    /** 
     * sets the firstName in the registration Page
     * Here we are taking firstName as a parameter
     * @Param fname - FirstName to enter
    **/

    async setFirstName(fname : string): Promise<void>{
        await this.textFirstName.fill(fname);
    }

    /** 
     * sets the lastName in the registration Page
     * Here we are taking firstName as a parameter
     * @Param lname - LastName to enter
    **/

    async setLastName(lname : string): Promise<void>{
        await this.textLastName.fill(lname);
    }

    /** 
     * sets the email in the registration Page
     * Here we are taking email as a parameter
     * @Param email - email to enter
    **/

    async setEmail(email : string): Promise<void>{
        await this.textEmail.fill(email);
    }

    /** 
     * sets the telephone in the registration Page
     * Here we are taking telephone as a parameter
     * @Param telephone - telephone to enter
    **/

    async setTelephone(telephone : string): Promise<void>{
        await this.textTelephone.fill(telephone);
    }

    /** 
     * sets the password in the registration Page
     * Here we are taking password as a parameter
     * @Param password - password to enter
    **/

    async setPassword(password : string): Promise<void>{
        await this.textPassword.fill(password);
    }

    /** 
     * sets the confirmpassword in the registration Page
     * Here we are taking confirmpassword as a parameter
     * @Param confirmpassword - confirmpassword to enter
    **/

    async setConfirmPassword(confirmpassword : string): Promise<void>{
        await this.textConfirmPassword.fill(confirmpassword);
    }

    /** 
     * checks the privacy policy checkbox
    **/
    async setPrivacyPolicy(): Promise<void>{

        await this.checkedPolicy.check();
    }

    /** 
     * Clicks on continue button
    **/
    async clickContinuebtn(): Promise<void>{

        await this.btnContinue.click();
    }

    /**
     * Gets the confirmation message text
     * @returns Promise<string> - Confirmation message text
     */
    async getConfirmationMsg(): Promise<string> {
        return await this.msgConfirmation.textContent() ?? '';
    }


    async completeRegistration(userData : {
        firstName: string;
        lastName: string;
        email: string;
        telephone: string;
        password: string;
    }): Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.setPrivacyPolicy();
        await this.clickContinuebtn();
        await expect(this.msgConfirmation).toBeVisible();
    }


}