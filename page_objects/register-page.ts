import {Page, Locator} from '@playwright/test';
import {BasePage} from '../page_objects/base-page';
import{RegistrationUserData} from '../test_data/register'
import { appendUserToFile, readUsersFromFile } from '../utils/fileUtils';

export class RegisterPage extends BasePage{
    
    //private readonly page:Page;
    private readonly input_firstname:Locator;
    private readonly input_lastname:Locator;    
    private readonly input_dob:Locator;
    private readonly input_street:Locator;
    private readonly input_postcode:Locator;
    private readonly input_city:Locator;
    private readonly input_state:Locator;
    private readonly input_country:Locator;
    private readonly input_phone:Locator;
    private readonly input_email:Locator;
    private readonly input_password:Locator;
    private readonly btn_submit: Locator;

    constructor(page:Page){
        //this.page =page;
        super(page);
        this.input_firstname = this.page.locator('#first_name');
        this.input_lastname = this.page.locator('#last_name');
        this.input_dob = this.page.locator('#dob');
        this.input_street = this.page.locator('#street');
        this.input_postcode = this.page.locator('#postal_code');
        this.input_city = this.page.locator('#city');
        this.input_state = this.page.locator('#state');
        this.input_country = this.page.locator('#country');
        this.input_phone= this.page.locator('#phone');
        this.input_email = this.page.locator('#email');
        this.input_password= this.page.locator('#password');
        this.btn_submit = this.page.locator('.btnSubmit');
        this.page.waitForLoadState('networkidle');  
           
    }
      

    public async fillCountry(country:string):Promise<void>{
        await this.waitForElement(this.input_country);
        await this.input_country.selectOption({label:country});
    }

    private async getUserEmail():Promise<string>{                     
        return RegistrationUserData.NewUser.email; 
    }

    public async fillAndRegisterUser():Promise<string>{  
        let email: string = await this.getUserEmail();       
        await this.safeFill(this.input_firstname, RegistrationUserData.NewUser.first_name);
        await this.safeFill(this.input_lastname, RegistrationUserData.NewUser.last_name);
        /**
         * fill is a native method of playwright which works on type=date 
         * for type = text try fill otherwise try to focus on field by click method and the use press sequentially and
         * then press a tab to trigger its validation
         */
        //await this.safeFill(this.input_dob, RegistrationUserData.NewUser.dob); 
        await this.input_dob.pressSequentially(RegistrationUserData.NewUser.dob);
        await this.safeFill(this.input_street, RegistrationUserData.NewUser.street);
        await this.safeFill(this.input_postcode, RegistrationUserData.NewUser.postal_code);
        await this.safeFill(this.input_city, RegistrationUserData.NewUser.city);
        await this.safeFill(this.input_state, RegistrationUserData.NewUser.state);
        await this.fillCountry(RegistrationUserData.NewUser.country);
        await this.safeFill(this.input_phone, RegistrationUserData.NewUser.phone);
        await this.safeFill(this.input_email, email);
        await this.safeFill(this.input_password, RegistrationUserData.NewUser.password);
        await this.safeClick(this.btn_submit);  
        await this.page.waitForLoadState('networkidle');        
        return email; 
        
    }

}