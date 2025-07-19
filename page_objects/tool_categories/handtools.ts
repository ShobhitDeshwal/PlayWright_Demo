import {Page, Locator} from '@playwright/test';
import {BasePage} from '../base-page'

/**
 * Handtools page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 */
export class HandTools extends BasePage{    

    constructor(page:Page){
        super(page);     
    }

    /**
     * Open the product details in a new page
     * @param productName - product to open
     */
    async openAProduct(productName: string):Promise<void>{        
        const product = this.page.getByText(`${productName}`,{exact:true});        
        await this.safeClick(product);    
    }

    /**
     * To get the price of a product
     * @param productName - Exact Name of the product to get price
     * @returns - Return price in string format
     */
    async getPrice(productName: string):Promise<string|null>{
        const product_view = this.page.locator(`a.card:has-text("${productName}")`);        
        const price = await product_view.locator('div.card-footer span.float-end span').textContent();          
        return price;
    }
}