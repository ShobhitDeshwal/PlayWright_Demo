export interface RegisterNewUser{
    first_name:string;
    last_name:string;
    dob:string;
    street:string;
    postal_code:string;
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