import{RegisterNewUser} from '../types/user-data';


export class RegistrationUserData {
    static readonly NewUser :RegisterNewUser = {
    firstname:'first',
    lastname:'last',
    dob: '1999-08-30',
    street: 'XX Bogus Street',
    postcode: '3029',
    city: 'Melbourne',
    state: 'Victoria',
    country: 'Australia',
    phone: '0411111111',
    email: `first${Math.floor(Math.random()*99)}@last.com.au`,
    password:'#Testing123!',
    };    
       
}



