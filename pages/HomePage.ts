import { Page, expect, Locator } from "@playwright/test";

export class HomePage{

    private readonly page : Page;

    //variables
    private readonly linkMyAcc : Locator;
    private readonly linkRegister : Locator;
    private readonly linkLogin : Locator;
    private readonly textSearchbox : Locator;
    private readonly btnSearch : Locator;


    //constructor
    constructor(page : Page){
        this.page = page;
        this.linkMyAcc = page.locator('//span[normalize-space()="My Account"]');
        this.linkRegister = page.locator('//a[normalize-space()="Register"]');
        this.linkLogin = page.locator('//a[normalize-space()="Login"]');
        this.textSearchbox = page.locator('//input[@placeholder="Search"]');
        this.btnSearch = page.locator('//i[@class="fa fa-search"]');

    }


    //Action Methods

    //check if HomePage exists
    async isHomePageExist(){

        let title : String = await this.page.title();
        if(title){
            return true;
        }
        return false;
    }

    //Click "My Account" link
    async clickMyAccount(){
        try {
            await this.linkMyAcc.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'My Account' : ${error}`);
            throw error;
            
        }
    }

    //Click "Login" link
    async clickLogin(){
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'Login' : ${error}`);
            throw error;
            
        }
    }

    //Enter ProductName in searchBox 
    async enterProductName(productName : string){
        try {
            await this.textSearchbox.fill(productName);
        } catch (error) {
            console.log(`Exception occured while entering product name :' ${error}`);
            throw error;
            
        }
    }

    //Click "Search" link
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'Search' : ${error}`);
            throw error;
            
        }
    }

    // Click "Register" link
    async clickRegister(){
        try {
            await this.linkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

}

