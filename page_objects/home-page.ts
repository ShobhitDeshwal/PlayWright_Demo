import {Page, Locator} from '@playwright/test';
import {BasePage} from '../page_objects/base-page'

/**
 * Home page containing all the page interraction
 * Follows POM pattern with clear separtion of concerns
 */
export class HomePage extends BasePage{

    //Locators - private & readonly
    private readonly lnk_home:Locator;
    private readonly drp_dwn_categories:Locator;
    private readonly lnk_contact:Locator;
    private readonly drp_dwn_profile:Locator;
    private readonly lnk_cart:Locator;
    private readonly drp_dwn_language : Locator;
    private readonly profile_name: Locator;

    constructor(page:Page){
        
        super(page);
        //Initialize locators
        this.lnk_home = this.page.getByText('Home');
        this.drp_dwn_categories = this.page.locator('a.dropdown-toggle').first();
        this.lnk_contact = this.page.getByText('Contact');
        this.drp_dwn_profile = this.page.locator('ul.dropdown-menu').nth(1);
        this.lnk_cart = this.page.getByLabel('cart');
        this.drp_dwn_language = this.page.locator('div #dropdown-animated');
        this.profile_name = this.page.locator('#menu');
    }
    /**
     * Go to homepage
     */
     async navigateToHome():Promise<void>{
        await this.safeClick(this.lnk_homepage);
    }

    /**
     * Select a category of tools
     * @param - name of the category to be selected
     */
    async selectCategories(tool_category: string):Promise<void>{
        await this.safeClick(this.drp_dwn_categories);     
        //await this.safeClick(this.drp_dwn_categories.locator(`a:has-text('${tool_category}')`));
        await this.safeClick(this.page.locator('ul.dropdown-menu').first().locator(`a:has-text('${tool_category}')`));
    }

    /**
     * Go to contact us page
    */
    async navigateToContactPage():Promise<void>{
        await this.safeClick(this.lnk_contact);
    }

    /**
     * Go to profile page
     * @param - provide the profile name option 
    */
    async navigateToMyProfile(profile:string):Promise<void>{
        await this.waitForElement(this.drp_dwn_profile);
        await this.drp_dwn_profile.selectOption(profile);
    }

    /**
     * Go to cart page
    */
    async gotToCart():Promise<void>{
        await this.safeClick(this.lnk_cart);
    }

    /**
     * select language
     * @param - provide language initials as variable
    */
    async selectLanguage(language:string):Promise<void>{
        await this.waitForElement(this.drp_dwn_language);
        await this.drp_dwn_language.selectOption(language);
    }

    async getProfileName():Promise<string>{
        await this.waitForElement(this.profile_name);
        return await this.profile_name.textContent() || '';
    }
}