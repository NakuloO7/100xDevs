import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const  NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name : "Email",
            credentials : {
                username : {label : "Email", type: 'text', placeholder : 'Email'},
                password : {label : "Password", type: 'password', placeholder : 'Password'},
            },
            async authorize(credentials : any){
                console.log(credentials)
                return {
                    id : "1",
                    name : "Nakul",
                    email : "nakul@gmail.com"
                }
            }
        }),
        // GoogleProvider ({
        //     clientId : process.env.GOOGLE_CLIENT_ID || "",
        //     clientSecret : process.env.GOOGLE_CLIENT_SECRET || "",
        // })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks :{
        session : ({token, session, user} : any) =>{
            console.log(session);
            if(session && session.user){
                session.user.id = token.sub;   //sending the userId field in the session
            }
            return session;
        } 
    },
    pages : {
        signIn : '/signin'
    }
}