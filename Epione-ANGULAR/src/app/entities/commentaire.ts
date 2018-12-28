
export interface commentaire{
    id : number ;
    content : string ; 
    date : Date ; 
    doctor : {
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
    } ;
    patient : {
        id : number ; 
        firstName : string ; 
        lastName : string ; 
        phoneNumber : string ; 
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
    } ;


}