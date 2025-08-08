import {test as baseTest}from '@playwright/test';
import { LoginPage } from '../page_objects/login-page';
import { HomePage } from '../page_objects/home-page';
import {ApiUtlis} from '../utils/apiUtils';
import * as all  from '../test_data/APIregister';
import { readUsersFromFile, appendUserToFile } from '../utils/fileUtils';

type MyFixtures ={
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = baseTest.extend<MyFixtures>({
    homePage :[async({browser,request}, use)=>{
        
        const apiUtils = new ApiUtlis(request);
        const responseR = await apiUtils.RegisterAPI(all.datasuccess);
        const status = (await responseR.status());
        console.log('Response status:', status);
        
        if( status !== 201){
            throw Error('Registration failed- skipping login and test setup');
        } 
              
        const responseData = await responseR.json();
        const email:string = await responseData.email;        
        const password:string= "#Testing123!";        
        await appendUserToFile({email, password});
        console.log('Test data written to file successfully.');

        const response = await apiUtils.LoginAPI((await readUsersFromFile())[0]);
        const JsonResponse = await response.json();
        const token = JsonResponse.access_token;
        const token_type = JsonResponse.token_type;

        const page = await browser.newPage();
        await page.goto('https://practicesoftwaretesting.com/account');
        await page.evaluate(([token])=>{
            localStorage.setItem('auth-token', token);
        }, [token]);
        await page.goto('https://practicesoftwaretesting.com/account');
        await use(new HomePage(page));
        //await page.close();
    },{scope:'test', auto:true}],
    
});

export {expect} from '@playwright/test';

// This file sets up a custom test fixture that includes a home page instance.
// It also uses the ApiUtlis class to perform a login API call and store the authentication token in local storage for the test session. 
// The LoginPage class is used to interact with the login page in tests.