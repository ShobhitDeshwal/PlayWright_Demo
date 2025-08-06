import {HomePage} from './home-page';
import {LoginPage} from './login-page';
import { RegisterPage } from './register-page';
import {ProductDetail} from './product-detail-page';
import {HandTools} from './tool_categories/handtools';
import {Cart} from './cart/cart-page';
import {Payment} from './cart/payment-page';
import {SignIn} from './cart/signIn-page';
import {BillingAddress} from './cart/billing-address-page';
import {Page} from '@playwright/test';

export class POManager {
    private page:Page;    
    public homePage: HomePage;
    public loginPage: LoginPage;
    public registerPage: RegisterPage;
    public productDetail: ProductDetail;
    public handToolsPage: HandTools;
    public cartPage: Cart;
    public paymentPage: Payment;
    public signIn: SignIn;
    public billingAddress: BillingAddress;

    constructor( page:Page){
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.registerPage = new RegisterPage(this.page);
        this.productDetail = new ProductDetail(this.page);
        this.handToolsPage = new HandTools(this.page);
        this.cartPage = new Cart(this.page);
        this.paymentPage = new Payment(this.page);
        this.signIn = new SignIn(this.page);
        this.billingAddress = new BillingAddress(this.page);
    }

    public getHomePage(): HomePage {   
        return this.homePage;
    }

    public getLoginPage(): LoginPage {
        return this.loginPage;
    }

    public getRegisterPage(): RegisterPage {
        return this.registerPage;
    }

    public getProductDetail(): ProductDetail {
        return this.productDetail;
    }

    public getHandTools(): HandTools {
        return this.handToolsPage;
    }

    public getCart(): Cart {
        return this.cartPage;
    }

    public getPayment(): Payment {
        return this.paymentPage;
    }

    public getSignIn(): SignIn {
        return this.signIn;
    }

    public getBilling(): BillingAddress {
        return this.billingAddress;
    }
}          