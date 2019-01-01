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
    adresse : {
        rue : string ; 
        codePostal : string ; 
        ville : string ; 
        numAppart : string ;
    }
    dateCreation? : Date;
    presentation? : string;

}

