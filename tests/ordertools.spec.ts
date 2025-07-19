import {test, expect} from '@playwright/test';
import {readUsersFromFile,RegisteredUserData} from '..//utils/fileUtils'
import {LoginPage} from '..//page_objects/login-page';
import { HomePage } from '../page_objects/home-page';
import { HandTools } from '../page_objects/tool_categories/handtools';
import { ProductDetail } from '..//page_objects/product-detail-page';
import { Cart } from '..//page_objects/cart/cart-page';
import { SignIn } from '..//page_objects/cart/signIn-page';
import { BillingAddress } from '..//page_objects/cart/billing-address-page';
import { Payment } from '..//page_objects/cart/payment-page';


//End - to - End placing an order
//Create a POManger to move all the initialization to one place for code to look cleaner.
//There are other approaches as well..Application class- group class for each usuability/test...
test.describe('Ordering a tool', ()=>{
    test('order success', async({page})=>{
        const tool_category = process.env.tool_category_1!;
        const product_name = process.env.product_Name!;
        const payment_type = process.env.payemnt_Type;

        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/auth/login');
        const user:RegisteredUserData[] =await readUsersFromFile();
        await loginPage.login(user[0].email, user[0].password);

        const homepage = new HomePage(page);
        await homepage.selectCategories(tool_category);

        const handtools = new HandTools(page);
        await handtools.openAProduct(product_name);

        const productDetail = new ProductDetail(page);
        await productDetail.quantityByFill('2');
        await productDetail.addToCart();
        await page.waitForTimeout(10000);
        await homepage.gotToCart();

        const cart = new Cart(page);
        await cart.proceedToCheckout();

        const signIn = new SignIn(page);
        await signIn.proceedToCheckout();

        const billingAddress = new BillingAddress(page);
        await billingAddress.proceedToCheckout();   

        const payment = new Payment(page);
        await payment.choosePaymentMethod(payment_type);
        await payment.confirmOrder();
        await payment.successMessageDisplayed();
        
    });
});