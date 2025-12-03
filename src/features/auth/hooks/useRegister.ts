import { useState } from "react"
import { RegisterForm, User } from "../types";
import { register } from "../api";

export default function useRegister(){
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const [error, setError] = useState<string | null>(null); 
    const submit = async (user:RegisterForm) => {
        try{
            setIsLoading(true);
            setError(null);

            const data:User = await register(user);

            return data;
            
        }catch(err:any){
            console.log(err);
        }finally{
            setIsLoading(false);
        }
    }
    
    return {
        submit, error, isLoading
    }
}