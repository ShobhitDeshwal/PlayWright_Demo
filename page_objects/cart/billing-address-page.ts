import {Page, Locator} from '@playwright/test';
import {BasePage} from '../base-page';

/**
 * Billing page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 * After adding a product to the cart user is checking out. 
 * At billing address page user is to confirm the address for delivery.
 */
export class BillingAddress extends BasePage{
    
    //Locators - private and readonly    
    private readonly btn_proceedToCheckout:Locator;
    
    // Add below later
    //private readonly street:Locator;    

    constructor(page:Page){
        super(page);
        //Initialize locators
        this.btn_proceedToCheckout = this.page.locator('button:has-text("Proceed to checkout")').nth(2);
    }

    /**
     * Clicking on the proceed button
     */
    async proceedToCheckout():Promise<void>{
        await this.safeClick(this.btn_proceedToCheckout);
    }
}