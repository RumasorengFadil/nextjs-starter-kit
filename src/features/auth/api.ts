import { api } from "@/lib/api";
import { LoginCredentials, RegisterForm } from "./types";

export async function registerUser(user:RegisterForm){
    const res = await api.post("/auth/register", user);

    return res.data;
}

export async function loginUser(credentials:LoginCredentials){
    const res = await api.post("/auth/login", credentials);

    return res.data;
    
}

export async function refreshToken(){
    const res = await api.post("/auth/refresh");

    return res.data;
}

export async function loginGoogle(){
    const res = await api.get("/auth/google");

    return res.data;
}

export async function me(){
    const res = await api.get("/auth/me");

    return res.data;
}

export async function verifyEmail(token:string){
     const res = await api.get(`/auth/verify/?token=${token}`);

    return res.data;
}

export async function logout(){
    const res = await api.post(`/auth/logout`);

    return res.data;
}
