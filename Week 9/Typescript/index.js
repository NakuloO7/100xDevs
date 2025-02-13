"use strict";
/*
//Interfaces and Types
interface User  {
    firstName : string,
    lastName :string,
    age : number,
    email ?: string   //this tells that the email is a optiional argument
}


//type and interfaces are almost the similar just the little syntax diff
//only there are specific use cases where we can only use type
type User2 = {
    firstName : string,
    address : string,
    phonenum : number
}

function isLegal(user : User){
    if(user.age > 19){
        return true;
    }else{
        return false;
    }
}
 
const ans = isLegal({
    firstName : "nakul",
    lastName : "gite",
    age : 24
});

if(ans){
    console.log("User is legal")
}else{
    console.log("user is illeagal")
}



// const greeting = (id : (number | string))=>{
//     console.log(id);
// }

// we can define a type for it

type arg = number | string;

const greeting = (id : arg) =>{
    console.log(id);
}


greeting(3);
greeting("2");



type Employee = {
    id : number,
    name : String
}

interface Manager {
    role : string,
    age : number
}


type CompanyEmp = Employee & Manager
//this can be only done with type
//interface does not support this
//interface can only implements a class
//types can be used for and and or, Union and Intersections
type CompanyEmp2 = {
    id : number,
    name : string,
    role : string,
    age : number
}

const info = (person : CompanyEmp)=>{
    console.log(person)
}

info({
    id : 43,
    name : "dhfkdf",
    role : "dlkfhalk",
    age : 34
});
*/
const firstElement = (num) => {
    return num[4];
};
let ans = firstElement(["nakul", "gite", 4, 2, 5]);
console.log(ans);
//there is an issue in this approach the return does not not either it is a stirng or an number
//thus we use generics for solving this problem
const identityFun = (arg) => {
    return arg;
};
const output1 = identityFun("myString");
const output2 = identityFun(200);
console.log(output1.toUpperCase());
console.log(output2 + 100);
const getFirstEelement = (arr) => {
    return arr[0];
};
const value = getFirstEelement(["rohit", "mohit"]);
const value2 = getFirstEelement([1, 2, 3]);
console.log(value.toUpperCase());
console.log(value2 + 100);
