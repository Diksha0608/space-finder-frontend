import { User } from "../modal/Modal";



export class AuthService{
    public async login(userName:string, password:string ):Promise< User | undefined>{
     
        if( userName === 'user' && password === '12345' ){
            return {
                userName: userName,
                email:'abc@gmail.com'
            }
        }
        else{
            return undefined
        }
    }

}