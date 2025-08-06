import {test, expect} from '@playwright/test';
import {ApiUtlis} from '../../utils/apiUtils';
import * as all  from '../../test_data/APIregister';
import {readUsersFromFile, appendUserToFile} from '../../utils/fileUtils';


test.describe.serial('API registration test scenarios', ()=>{ 
        test('API Successful registration', async({request}, testInfo)=>{
                //const apiContext: any = await request.newContext();
                const apiUtil = new ApiUtlis(request);
                const response = await apiUtil.RegisterAPI(all.datasuccess);        
                expect(await response.status()).toBe(201);

                if(testInfo.status === 'passed'){
                        const responseData = await response.json();
                        const email:string = await responseData.email;        
                        const password:string= "#Testing123!";        
                        await appendUserToFile({email, password});
                        console.log('Test data written to file successfully.');
                } else{
                        console.warn('Skipping test data write - test is not passed');
                }        
        });

        test('API unsuccessful registration due to already existing data', async({request})=>{
                const apiUtil = new ApiUtlis(request);
                all.existingdatafailure.email =  (await readUsersFromFile())[0].email;                
                const response = await apiUtil.RegisterAPI(all.existingdatafailure);                
                const responseBody = await response.json();
                expect(await response.status()).toBe(422);                
                expect(responseBody.email[0]).toEqual('A customer with this email address already exists.');                
        });

        test('API unsuccessful registration due to overused password', async({request})=>{
                const apiUtil = new ApiUtlis(request);
                const response = await apiUtil.RegisterAPI(all.passworddatafalure);                
                const responseBody = await response.json();
                expect(await response.status()).toBe(422);                
                expect(responseBody.password[0]).toEqual('The given password has appeared in a data leak. Please choose a different password.'); 
        });
               
}); 