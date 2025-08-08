import {test, expect} from '../../fixture/loginfixture';


test('Matching user profile name', async({homePage})=>{
    
    console.log(await homePage.getPageTitle());
    
    const user = await homePage.getProfileName();
    expect(user).toBe(' first last ');    
   
});