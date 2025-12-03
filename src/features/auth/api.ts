import { LoginCredentials, RegisterForm } from "./types";

export async function register(user:RegisterForm){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
            method:"POST",
            body:JSON.stringify(user), 
            credentials:"include",
            headers:{
                "Content-Type" : "application/json"
            }
        });
        
        return res.json();
    }catch(err:any){
        console.log(err);
        throw err
    }
}

export async function login(credentials:LoginCredentials){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method:"POST",
        body:JSON.stringify(credentials), 
        credentials:"include"
    });
    
    return res.json();
}

export async function refresh(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
        method:"POST",
        credentials:"include"
    });
    
    return res.json();
}

export async function google(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
        method:"get",
        credentials:"include"
    });
    
    return res.json();
}

export async function verify(token:string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify/?token=${token}`, {
        method:"POST",
        credentials:"include"
    });
    
    return res.json();
}

export async function logout(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method:"POST",
        credentials:"include"
    });
    
    return res.json();
}
