
import {readUsersFromFile, RegisteredUserData} from '..//utils/fileUtils';
import{RegisterNewUser} from '../types/user-data';

export const datasuccess:RegisterNewUser  = {
                first_name: 'first',
                last_name: 'last',
                dob: '1999-08-30',
                street: 'XX Bogus Street',
                postal_code: '3029',
                city: 'melbourne',
                state: 'victoria',
                country: 'Australia',
                phone: '0411111111',
                password: '#Testing123!' ,                 
                email: `first${Math.floor(Math.random() * 99)}@last.com`                  

            };
            
export const existingdatafailure: RegisterNewUser = {
                first_name: 'first',
                last_name: 'last',
                dob: '1999-08-30',
                street: 'XX Bogus Street',
                postal_code: '3029',
                city: 'melbourne',
                state: 'victoria',
                country: 'AU',
                phone: '0411111111',
                password: '#Testing123!' ,
                email: ''           
                 
            };

export const passworddatafalure:RegisterNewUser  = {
                first_name: 'first',
                last_name: 'last',
                dob: '1999-08-30',
                street: 'XX Bogus Street',
                postal_code: '3029',
                city: 'melbourne',
                state: 'victoria',
                country: 'AU',
                phone: '0411111111',
                password: 'Testing123!' ,                 
                email: `first${Math.floor(Math.random() * 99)}@last.com`                  

            };