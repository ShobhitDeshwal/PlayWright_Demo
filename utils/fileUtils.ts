import * as fs from 'fs';
import * as path from 'path';
import { LoginUser } from '../types/user-data';

const USERS_FILE_PATH = path.resolve(__dirname, '../test_data/registeredUsers.json');

export interface RegisteredUserData{
    email:string;
    password:string;
}

export async function readUsersFromFile(): Promise<LoginUser[]> {

    try{
        if(!fs.existsSync(USERS_FILE_PATH)){
            console.warn('User file not found');
            return [];
        }
        const data = await fs.promises.readFile(USERS_FILE_PATH,{encoding:'utf-8'});
        if (data.trim()===''){
            return [];
        }
        return JSON.parse(data);
    } catch(error){
        console.error(error);
        return [];       
    }
}

export async function appendUserToFile(newUser:RegisteredUserData):Promise<void> {
    let users :RegisteredUserData[] = await readUsersFromFile();
    users.fill(newUser);   
    try{        
        await fs.promises.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2),{encoding:'utf-8'});
        console.log(`Added new user to file ${newUser}`);
    } catch(error){
        console.error('New user can not be added due to', error);
        throw error;
    }
    

    
}



    

