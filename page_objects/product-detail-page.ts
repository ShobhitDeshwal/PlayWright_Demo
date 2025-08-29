import {Page, Locator} from '@playwright/test';
import {BasePage} from '../page_objects/base-page'
export class ProductDetail extends BasePage{

    private readonly btn_addToCart:Locator;
    private readonly btn_addToFav:Locator;
    private readonly btn_inc_counter:Locator;
    private readonly btn_dec_counter:Locator;
    private readonly inp_quantity:Locator;
    private readonly pop_up_toast:Locator;

    

    constructor(page:Page){
        super(page); 
        this.btn_inc_counter = this.page.locator('#btn-increase-quantity');
        this.btn_dec_counter= this.page.locator('#btn-decrease-quantity');  
        this.inp_quantity = this.page.locator('#quantity-input');  
        this.btn_addToCart = this.page.getByText('Add to cart');
        this.btn_addToFav = this.page.getByText('Add to favourites');
        this.pop_up_toast = this.page.locator('#toast-container');
    }

    async quantityByFill(quantity: string){        
        await this.safeFill(this.inp_quantity, quantity);            
    }

    async quantityIncrease(quantity: number){        
        for(let i=0; i<=quantity; i++){
            await this.safeClick(this.btn_inc_counter);
        }          
    }

    async quantityDecrease(quantity: number){        
        for(let i=0; i<=quantity; i++){
            await this.safeClick(this.btn_dec_counter);
        }          
    }

    async addToCart():Promise<void>{
        await this.safeClick(this.btn_addToCart);
    }

    async toastVisible():Promise<boolean>{
        await this.pop_up_toast.waitFor({state:'visible'});
        console.log('Toast is visible');
        return true;   
    }

    async toastNotVisible():Promise<void>{
        await this.pop_up_toast.waitFor({state:'hidden'});   
        console.log('Toast is gone');
    }
}