import {test, expect} from '@playwright/test';
import{LoginPage} from '../../page_objects/login-page'
import { readUsersFromFile, RegisteredUserData } from '../../utils/fileUtils';
import * as path from 'path';


 test.describe('Test Login page', ()=>{ 
    

    test('Valid login', async({page})=>{
        test.slow();
        //const index = Math.floor( Math.random(),9);
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/auth/login');
        const user:RegisteredUserData[] = await readUsersFromFile();
        await loginPage.login(user[0].email, user[0].password);               
        expect(await loginPage.getPageTitle()).toBe('Overview - Practice Software Testing - Toolshop - v5.0');
    });

    test('Invalid login', async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/auth/login');
        await loginPage.login('first@com.au','#Test1234!');
        expect(await loginPage.fetchLoginMsg()).toBe('Invalid email or password');
    });

    test('login without Email or password', async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/auth/login');
        await loginPage.login('','');
        expect(await loginPage.fetchEmailErrorMsg()).toBe('Email is required');
        expect(await loginPage.fetchPasswordErrorMsg()).toBe('Password is required');
    });
   

    test('login with invalid Email format ', async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/auth/login');
        await loginPage.login('firstlast.com','');
        expect(await loginPage.fetchEmailErrorMsg()).toBe('Email format is invalid');
    });

    test('login with invalid password format ', async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/auth/login');
        await loginPage.login('first@last.com.au','t');
        expect(await loginPage.fetchPasswordErrorMsg()).toBe('Password length is invalid');
    });

 });