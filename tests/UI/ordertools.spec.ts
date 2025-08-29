import {test, expect} from '@playwright/test';
import {readUsersFromFile,RegisteredUserData} from '../../utils/fileUtils'
import {LoginPage} from '../../page_objects/login-page';
import { HomePage } from '../../page_objects/home-page';
import { HandTools } from '../../page_objects/tool_categories/handtools';
import { ProductDetail } from '../../page_objects/product-detail-page';
import { Cart } from '../../page_objects/cart/cart-page';
import { SignIn } from '../../page_objects/cart/signIn-page';
import { BillingAddress } from '../../page_objects/cart/billing-address-page';
import { Payment } from '../../page_objects/cart/payment-page';
import { POManager } from '../../page_objects/PO-manager';


//End - to - End placing an order
//Create a POManger to move all the initialization to one place for code to look cleaner.
//There are other approaches as well..Application class- group class for each usuability/test...
test.describe('Ordering a tool', ()=>{
    test('order success', async({page})=>{
        const tool_category = process.env.tool_category_1!;
        const product_name = process.env.product_Name!;
        const payment_type = process.env.payemnt_Type;

        //const loginPage = new LoginPage(page);        
        const poManager =  new POManager(page);
        await poManager.loginPage.navigateTo('/auth/login');
        const user:RegisteredUserData[] =await readUsersFromFile();
        await poManager.loginPage.login(user[0].email, user[0].password);
        
        await poManager.homePage.selectCategories(tool_category);
        
        await poManager.handToolsPage.openAProduct(product_name);
        
        await poManager.productDetail.quantityByFill('2');
        await poManager.productDetail.addToCart();
        
        expect.soft(await poManager.productDetail.toastVisible()).toBeTruthy();
        await poManager.productDetail.toastNotVisible();
        await poManager.homePage.gotToCart();
        
        await poManager.cartPage.proceedToCheckout();
        
        await poManager.signIn.proceedToCheckout();
        
        await poManager.billingAddress.proceedToCheckout();    

        await poManager.paymentPage.choosePaymentMethod(payment_type);
        await poManager.paymentPage.confirmOrder();
        await poManager.paymentPage.successMessageDisplayed();
        
    });
});