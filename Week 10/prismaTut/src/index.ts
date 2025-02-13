import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//this is similar to importing  mongoose

//create a user

const createUser = async (email : string,firstName : string, lastName : string, password : string, )=>{
    try{
        const result = await prisma.user.create({
           data : {
            email,
            firstName,
            lastName,
            password
           }
        })

        console.log("User created successfully", result, result.id)
    }catch(e){
        console.log("There is an error in this code", e)
    }
}

// const userId = createUser("rohit@gmail.com", "Rohit", "Dhus", "Ro45");
// console.log(userId);


interface updateParam {
    firstName : string,
    lastName : string
}

//udpatind the user 
const updateUser = async(email : string , {firstName, lastName} : updateParam)=>{
    try{
        const result = await prisma.user.update({
            where : {email},
            data : {
                firstName,
                lastName
            }
        })
        console.log("User updated successfully", result);
    }catch(e){
        console.log("There is an error in this code", e)
    }
}

// updateUser("neha@gmail.com", {
//     firstName : "sneha",
//     lastName : "Varma"
// });

//function to delete the user

const deleteUser = async (email : string)=>{
    try{
        const result = await prisma.user.delete({
            where : {email : email}
        })
        console.log("user deleted successfully", result);

    }catch(e){
        console.log("There is an error in this code", e)
    }
}

// deleteUser("neha@gmail.com");


//function to get data

const getUserData = async(email : string)=>{
    try{
         const result = await prisma.user.findUnique({
             where : {email}
         })
 
        console.log("The user found", result)
    }catch(e){
        console.log("There is an error in this code", e)
    }
}

getUserData("tirtha@gmail.com");



//function to create a todo

// async function createTodo(){
//     try{
//         const result = await prisma.todo.create{

//         }
//     }
// }