"use server"
import prisma from '@/db'; 

export const signup = async (username : string, password : string) =>{
   try {
    const user = await prisma.user.create({
        data : {
            username,
            password
        }
    })
    return true;
   } catch (error) {
    return false;
   }
}