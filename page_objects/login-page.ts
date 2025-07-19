
import {Page, Locator} from '@playwright/test';
import{BasePage} from './base-page';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Login page containing all the page interactions
 * Follows POM pattern with clear separtion of concerns
 */
export class LoginPage extends BasePage{
    
    //Locators - private & readonly 
    private readonly input_email:Locator;
    private readonly input_password:Locator;
    private readonly btn_view_password:Locator;
    private readonly btn_login:Locator;
    private readonly lnk_forgot_password:Locator;
    private readonly lnk_register_account:Locator;
    private readonly msg_login_error:Locator;
    private readonly msg_email_error:Locator;
    private readonly msg_pswd_error:Locator;

    constructor(page:Page){
        //this.page = page;
        super(page);
        //Initialization of locators
        this.input_email = page.locator('#email');
        this.input_password = page.locator('#password');
        this.btn_view_password = page.locator('div.auth-form button .ng-fa-icon');
        this.btn_login = page.locator('div [aria-label="Login"]');
        this.lnk_forgot_password = page.getByText('Forgot your Password?');
        this.lnk_register_account = page.getByLabel('Register your account');
        this.msg_login_error = page.locator('div[data-test="login-error"]');
        this.msg_email_error = page.locator('#email-error');
        this.msg_pswd_error = page.locator('#password-error');
    }

    /**
     * Login using email and password
     * @param email_id - emiail of the user
     * @param password - password for the account
     */
    public async login(email_id:string, password:string) :Promise<void>{
        await this.safeFill(this.input_email, email_id);
        await this.safeFill(this.input_password,password );
        await this.safeClick(this.btn_login);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * To view the password entered
     */
    public async ClickViewPassword():Promise<void>{
        await this.safeClick(this.btn_view_password);
    }

    /**
     * To click on the forgot password link
     */
    public async ClickforgotPassword():Promise<void>{
        await this.safeClick(this.lnk_forgot_password);
    }

    /**
     * To click on the register account link
     */
    public async registerAccount():Promise<void>{
        await this.safeClick(this.lnk_register_account);
    }

    /**
     * To get the login message
     * @return - the content of the message body
     */
    public async fetchLoginMsg():Promise<null|string>{
        await this.waitForElement(this.msg_login_error,3000);
        return await this.msg_login_error.textContent();
    }

    /**
     *  To get the login error message
     * @returns - the content of the message body
     */
    public async fetchEmailErrorMsg():Promise<null|string>{
        await this.waitForElement(this.msg_email_error,3000);
        return await this.msg_email_error.textContent();
    }

    /**
     *  To get the password error message
     * @returns - the content of the message body
     */
    public async fetchPasswordErrorMsg():Promise<null|string>{
        await this.waitForElement(this.msg_pswd_error,3000);
        return await this.msg_pswd_error.textContent();
    }




}
