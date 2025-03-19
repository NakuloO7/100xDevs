
"use server"
import client from '@/db';

export async function signup(username : string, password : string) {

    const response = await client.user.create({
        data : {
            username :  username,
            password : password
        }
    })
    console.log(response.id)
    return "User signed up"
}

//created a server side component fuction to post the data onto database
//we can call this as a function call anywhere eg : SignUp.tsx