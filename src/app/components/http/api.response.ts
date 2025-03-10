export interface PeopleResponse 
{
    results : Results[];
    info : Info;
}

export interface Results{
    gender : string;
    name : Name;
    location : Location;
    email : string;
    login : Login;
    dob : Dob;
    registered : Registered;
    phone : string;
    cell : string;
    id : Id;
    picture : Picture;
}

export interface Name{
    tittle : string;
    first : string;
    last : string;
}