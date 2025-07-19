import {Page, Locator} from '@playwright/test';
import {BasePage} from '../base-page';

/**
 * SignIn page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 * User is prompted again while ordering to sign in if not yet or logged out during navigation
 */
export class SignIn extends BasePage{
    
    //Locators- private & readonly
    private readonly btn_proceed_to_checkout:Locator;
    // Add below later
    //private readonly msg_already_signIn:Locator;   

    constructor(page:Page){
        super(page);
        
        //Initialize locators
        this.btn_proceed_to_checkout = this.page.locator('button:has-text("Proceed to checkout")').nth(1);
    }

    /**
     * Click on proceed button
     */
    async proceedToCheckout():Promise<void>{
        await this.safeClick(this.btn_proceed_to_checkout);
    }
}