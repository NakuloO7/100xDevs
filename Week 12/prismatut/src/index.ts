import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async(username: string, password: string, firstname: string, lastname: string, email :string)=>{
    try {
        const result = await prisma.todoUser.create({
            data : {
                username,
                password,
                firstname,
                lastname,
                email
            }
        })

        console.log(result);
    } catch (error) {
        console.log(error)
    }

}


// insertUser("rahul_2", "rae312","rahul","dravid","rahul@gmail.com");


const getUserData = async()=>{
    try {
        const result = await prisma.todoUser.findUnique({
            where : {
                email : "rahul@gmail.com"
            }
        })

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


// getUserData();


const udpdateUserData = async() =>{
    try {
        const response =  await prisma.todoUser.update({
            where : {
                email :"rahul@gmail.com"
            },
            data: {
                email : "rahuldravid@gmail.com"
            }
        })

        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


// udpdateUserData();


const addTodo = async ()=>{
    try {
        const response = await prisma.todoTable.create({
            data : {
                title : "Learn Prisma",
                description : "Learn the complete Prisma ORM",
                userId : 1
            }
        })

        console.log(response);
    } catch (error) {
        console.log(error)
    }

}

// addTodo();


const getTodaandUserData = async(userId : number) =>{
    try {
        // const userId : number = 1;
        const response = await prisma.todoTable.findMany({
            where : {
                userId : userId,
            },
            select :{
                title : true,
                description : true,
                user : true

            }
        });

        console.log(response);
    } catch (error) {
        console.log(error)
    }
}


getTodaandUserData(1);