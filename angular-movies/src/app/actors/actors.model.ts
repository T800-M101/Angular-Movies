export interface actorCreationDTO{
    name:string;
    dateOfBirth:Date;
    picture:File;
    biography:string;
}

export interface actorDTO{
    id:number;
    name:string;
    dateOfBirth:Date;
    picture:any;
    biography:string;
}

export interface actorsMovieDTO{
    id:number;
    name:string;
    character:string;
    picture:string;
}