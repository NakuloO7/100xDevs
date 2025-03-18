"use server"
import { prisma } from "@/db"

export async function singnup(username : string, password  : string){

     try {
        //extract the body
        // const body = await req.json();  //this we will reecive as the function parameters
        //store the body in the database
        // console.log(body);
    
        const res = await prisma.account.create({
          data: {
            username: username,
            password: password,
          },
        });
    
        console.log(res);
        return true;
      } catch (error) {
        return false;
      }
}