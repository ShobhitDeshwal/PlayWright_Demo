import{test, expect} from '@playwright/test';
import {ApiUtlis} from '../../utils/apiUtils';
import {readUsersFromFile} from '../../utils/fileUtils';


test.describe('API login test scenarios',()=>{
    test('API successful login', async({request})=>{          
        const apiUtil = new ApiUtlis(request);
        const response = await apiUtil.LoginAPI((await readUsersFromFile())[0]);        
        const resJson = await response.json(); 
        //console.log('Response from login API:', resJson);              
        expect(await response.status()).toBe(200);        

    });
    
});