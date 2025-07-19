import {test, expect} from '@playwright/test';
import {HomePage} from '../page_objects/home-page';
import {LoginPage} from '../page_objects/login-page';
import { HandTools } from '../page_objects/tool_categories/handtools';
import { readUsersFromFile, RegisteredUserData } from '../utils/fileUtils';


test('check Price', async({page})=>{
    const loginPage = new LoginPage(page);
    const user:RegisteredUserData[] = await readUsersFromFile();
    await loginPage.navigateTo('/auth/login');
    await loginPage.login(user[0].email, user[0].password);    
    const homepage = new HomePage(page);   
    await page.waitForTimeout(2000); 
    await homepage.selectCategories('Hand Tools');
    const handtools = new HandTools(page);    
    await page.waitForTimeout(5000);
    console.log(await handtools.getPrice('Combination Pliers'));   
})