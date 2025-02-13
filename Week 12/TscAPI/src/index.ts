
/*
interface User {
    name : string,
    age : number
};

const sumOfAge = (user1 : User, user2 : User) =>{
    return user1.age + user2.age;
}

const result = sumOfAge({
    name : "lksdhflasj",
    age : 14
}, {
    name : "lkdhfal",
    age : 15
});

console.log(result)

*/

/*
//Pick 
interface User{
    name : string,
    email : string,
    password : number,
    createdAt : Date
}

//in userprofile we only display name and email

type userProfile = Pick<User, 'name' | 'email'>

const data = ((user: userProfile)=>{
    console.log(user.name + " " +  user.email)
});


const user1 = {
    name : "Nakul",
    email : "nakul@gmail.com",
    password : 12312
}

const result = data(user1);  //here even if we pass all the data 
//the result will only display username and email
*/

/*

//Partial 
interface User{
    name : string,
    email : string,
    password : number,
    age : number
}

type updateUser = Pick<User, 'name' | 'email' |'age'>;

type updateUserOptional = Partial<User>;  //if you only udpate few things of the user the typescript will 
//not show any error 
//this is similar to 
// interface updateUserOptional{
//     name ?: string,
//     email ?: string,
//     password ?: number,
//     age ?: number
// }

const data = (user : updateUserOptional) =>{
    console.log(user.name)
    console.log(user.email)
    console.log(user.age)
}

data({
    name : "nakul"
})

*/

/*
//Readonly

const username :  string = "Nakul";
// username = "hdsfdf"; //this will show error beacause it is const

//but if we declare and array or an object

const obj = {
    name : "mohan",
    age : 21
}

obj.name = "Rohan"
console.log(obj.name);  //it will get change to Rohan
//because we are not changing the object itself
//we are chanfing the values inside the object, same applies for arry

// type userData = {
//     readonly name : string,
//     readonly email : string,
//     readonly age : number
// }
type userData = {
     name : string,
     email : string,
     age : number
}

const user1 : Readonly <userData> = {
    name : "rohit",
    email : "rohit@gmail.com",
    age : 24
}  


// user1.age = 25;  // now this will show an error because it is marked as readonly


*/


/*

//Map and Record

//how to declare object in javascript

type User = {
    name : string,
    age : number
}


// type Users = {
//     [key :string] : User
// }

//declaring same using record
type Users = Record<string, User>

const userObj : Users = {
    "as21" : {
        name : "mohan",
        age : 21
    },
    "as22" : {
        name : "rohini",
        age : 22
    }
}

console.log(userObj.as21);


//map
// const mapUser = new Map();
const mapUser = new Map<string, User>();   //we can also specify type in map
mapUser.set("kfd21", {name : "rohit", age : 22});
mapUser.set("kfd22", {name : "neha", age : 23});

const result = mapUser.get("kfd21");
console.log(result)
*/

/*

//Exclude
type events = 'mouse' | 'scroll' | 'hover'

type excludeEvent = Exclude<events, 'scroll'>;

const data = (event : excludeEvent) =>{
    console.log(event)
}

data("mouse")
// data("scroll")  this will show an error

//understand the difference between pick and exclude
*/

import { z } from 'zod';
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// type finalProfile = {
//     name : string,
//     email : string, 
//     age : Number
// }  
//now instead of doing this we can simply use type inferencing 
type finalProfile = z.infer<typeof userProfileSchema>
//this will give define the types same defined in the zod

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);
  const updatedProfile : finalProfile = req.body;  


  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type of updateBody is inferred from userProfileSchema
  const updateBody = result.data;

  // update database here
  res.json({
    message: "User updated",
    updateBody
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));