import {Page, Locator} from '@playwright/test';
import {BasePage} from '../base-page';

/**
 *  Cart page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 */
export class Cart extends BasePage{
    //Locators - private & readonly
    private readonly btn_proceed_to_checkout:Locator;
    // Add below later
    //private readonly inpt_quantity:Locator;
    //private readonly btn_remove:Locator;

    constructor(page:Page){
        super(page);

        //Initialize locators
        this.btn_proceed_to_checkout = this.page.locator('button:has-text("Proceed to checkout")').nth(0);
    }

    /**
     * Clicking on the proceed button
     */
    async proceedToCheckout():Promise<void>{
        await this.safeClick(this.btn_proceed_to_checkout);
    }
}