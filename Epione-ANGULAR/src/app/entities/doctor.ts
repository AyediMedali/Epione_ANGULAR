export interface doctor{
    id : number ; 
    firstName : string ; 
    lastName : string ; 
    phoneNumber : string ; 
    specialite : string; 
    email : string ; 
    image : string ; 
    birthDay : Date ; 
    password : string ; 
    adesse : {
        street : string ; 
        postalCode : string ; 
        city : string ; 
        AppartNumber : string ;
    }

}