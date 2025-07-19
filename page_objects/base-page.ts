import { Page,Locator} from "@playwright/test";
import path from "path";


/**
 * Base page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 * It contains all the common methods that other classes would use
 */
export abstract class BasePage{

    protected readonly page:Page;
    protected readonly lnk_homepage:Locator;
    
    constructor(page:Page){

        //Initialize locators
        this.page = page;   
        this.lnk_homepage = this.page.locator('.nav-link:has-text("Home")');     
    }

    public async navigateTo(path:string=''):Promise<void>{
        const fullUrl:string = `${process.env.BASE_URL}${path}`;
        await this.page.goto(fullUrl);
    }

    /**
     * Wait for page to load
     */
    public async waitForPageLoad():Promise<void>{
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * get page title
     */
    public async getPageTitle():Promise<string>{        
        return await this.page.title();
    }

    /**
     * Take screenshot for debugging purpose
     * @param name - name of the screenshot
     */
    public async getScreenshot(name:string):Promise<void>{
        await this.page.screenshot({path:`screenshots/${name}.png`});
    }

    /**
     * Wait for element to be visible for 2 seconds
     * @param Locator - element for which to wait
     */
    protected async waitForElement(Locator:Locator, timeout:number =3000):Promise<void>{
        await Locator.waitFor({state:'visible', timeout});
    }

    /**
     * Safe filling the input field
     * @param Locator - Field where text is to be entered
     * @param text - text to be entered in the field
     */
    protected async safeFill(Locator:Locator, text:string ):Promise<void>{
        await this.waitForElement(Locator);
        await Locator.clear();
        await Locator.fill(text);
    }

    /**
     * Safe click with wait
     * @param Locator - element to be clicked
     */
    protected async safeClick(Locator:Locator):Promise<void>{        
        await this.waitForElement(Locator);
        await Locator.click();
    }

    /**
     * To naivgate to home page
     */
    public async goToHomePage():Promise<void>{
        await this.safeClick(this.lnk_homepage);
        await this.page.waitForLoadState('networkidle');
    }
    
}