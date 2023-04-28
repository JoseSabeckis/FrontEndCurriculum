export class JwtDto{
    token!:string;//accessToken
    id?:number;
    type!:string;
    username!:string;
    email!:string;
    roles!:string[];
    authorities?:string;
}