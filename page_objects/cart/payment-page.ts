import {Page, Locator} from '@playwright/test';
import {BasePage} from '../base-page';

/**
 *  Payment page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 */
export class Payment extends BasePage{
    
    //Locators - private and readonly
    private readonly drpdwn_payment_method:Locator;    
    private readonly btn_confirm:Locator;
    private readonly msg_success:Locator;

    constructor(page:Page){
        super(page);
        //Initialize locators
        this.drpdwn_payment_method = this.page.locator('#payment-method');
        this.btn_confirm = this.page.locator('button:has-text(" Confirm ")');
        this.msg_success = this.page.locator('.alert .help-block:has-text("Payment was successful")');
    }

    /**
     * Confirm the order
     */
     async confirmOrder():Promise<void>{
        await this.safeClick(this.btn_confirm);
    }

    /**
     * Choose the payment type
     * @param - provide the payment type as string
     */
    async choosePaymentMethod(paymentType:string):Promise<void>{
        await this.drpdwn_payment_method.selectOption(paymentType);
       // this.drpdwn_payment_method.sel
    }

    /**
     * Capture the success message 
     * @returns - the saame message
     */
    async successMessageDisplayed():Promise<string|null>{
        await this.waitForElement(this.msg_success);
        return this.msg_success.textContent();
    }
}