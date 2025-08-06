import {test as baseTest}from '@playwright/test';
import { LoginPage } from '../page_objects/login-page';

type MyFixtures ={
    logingPage : LoginPage
}

export const test = basetTest.extend({
    loginPage :[async({browser,request}, use)=>{
        const page = await browser.newPage();
    }]
});