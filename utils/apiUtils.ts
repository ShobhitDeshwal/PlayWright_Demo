import {APIRequestContext} from '@playwright/test';
import {readUsersFromFile, RegisteredUserData} from './fileUtils';
import{RegisterNewUser, LoginUser} from '../types/user-data';


export  class ApiUtlis{ 
    private baseurl:string = process.env.BASE_API_URL || 'https://api.practicesoftwaretesting.com';
    private resource_register:string = '/users/register';
    private resource_login = '/users/login';
    private apiContext : APIRequestContext;

    constructor(apicontext: APIRequestContext){
        this.apiContext = apicontext;
    }

    public async RegisterAPI(dataToUse:RegisterNewUser): Promise<any> {
        const response = await this.apiContext.post(`${this.baseurl}${this.resource_register}`, {
            data: dataToUse
        });
        return response; 
    }

    public async LoginAPI(dataToUse:LoginUser):Promise<any>{
        return await this.apiContext.post(`${this.baseurl}${this.resource_login}`,{
            data:dataToUse
        });
    }
}

