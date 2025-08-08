import {test, expect} from '@playwright/test';
import {BasePage} from '../../page_objects/base-page'
import {RegisterPage} from '../../page_objects/register-page';
import { appendUserToFile, readUsersFromFile } from '../../utils/fileUtils';

test.describe('Registration test scenarios', ()=>{
    test('Register a new user', async({page, request})=>{                   
        const registerPage = new RegisterPage(page);                 
        await registerPage.navigateTo("/auth/register");
        const email:string = await registerPage.fillAndRegisterUser();        
        const password:string = '#Testing123!';            
        await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
        appendUserToFile({email,password});         
    });
});