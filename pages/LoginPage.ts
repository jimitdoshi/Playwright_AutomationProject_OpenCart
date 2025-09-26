import { Page, Locator } from '@playwright/test';

export class LoginPage{
    private readonly page : Page;

    //variables - Locators
    private readonly textEmailAddress : Locator;
    private readonly textPassword : Locator;
    private readonly btnLogin : Locator;
    private readonly textErrorMsg : Locator;

    //constructor
    constructor(page : Page){
        //Initialize locators with CSS Selectors
        this.textEmailAddress = page.locator('#input-email');
        this.textPassword = page.locator('#input-password');
        this.btnLogin = page.locator('input[value="Login"]');
        this.textErrorMsg = page.locator('.alert.alert-danger.alert-dismissible');
    }

    //Action methods

    /** 
     * sets the email in the Login Page
     * Here we are taking email as a parameter
     * @Param email - email to enter
    **/

    async setEmail(email : string): Promise<void>{
        await this.textEmailAddress.fill(email);
    }

    /** 
     * sets the password in the Login Page
     * Here we are taking password as a parameter
     * @Param password - password to enter
    **/

    async setPassword(password : string): Promise<void>{
        await this.textPassword.fill(password);
    }

    /** 
     * Clicks on Login button
    **/
    async clickOnLoginbtn(): Promise<void>{

        await this.btnLogin.click();
    }

    /**
     * Performs complete login action
     * @param email - Email address to enter
     * @param password - Password to enter
     */
    async login(email: string, password: string){
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickOnLoginbtn();
    }

    async getloginErrorMessage():Promise<null | string>{
       
        return(this.textErrorMsg.textContent());
    }

}