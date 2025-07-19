export interface RegisterNewUser{
    firstname:string;
    lastname:string;
    dob:string;
    street:string;
    postcode:string;
    city:string;
    state:string;
    country:string;
    phone:string;
    email:string;
    password:string;

}

export interface LoginUser{
    email:string;
    password:string
}