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


//Arrys in Typescript


// const maxValue = (arr : number[])=>{
//     let max : number = Math.max(...arr);
//     return max;
// }

//we can also do this with the help of type
//interface cannot do this


/*
type numberArr = number[];
const maxValue = (arr : numberArr)=>{
    let max : number = Math.max(...arr);
    return max;
}

const arr = [3,4,5,1];
console.log(maxValue(arr));


interface User {
    firstName : string,
    lastName : string,
    age : number
}


const findUser = (arr : User[]) =>{
    return arr.filter(i => i.age >= 18)
}



let ans = findUser([{
    firstName : "nakul",
    lastName : "gite",
    age : 24
}, {
    firstName : "Neha",
    lastName : "Sharma",
    age : 18
},{
    firstName : "Rohan",
    lastName : "maid",
    age : 16
}])

console.log(ans);

*/

/*
//Eums in typescript

enum Direction {
    up ,
    down,
    left, 
    right
}

const navigateFun = (keyPressed : Direction)=>{
    if(keyPressed === Direction.up){
        console.log("go up")
    }
    else if(keyPressed === Direction.down){
        console.log("go down")
    }
    else if(keyPressed === Direction.right){
        console.log("go right")
    }
}


navigateFun(Direction.down);
console.log(Direction.up)
console.log(Direction.down)
console.log(Direction.right)
*/

//Generics

type Input = number | string;

const firstElement  = (num : Input[])=>{
    return num[4];
}

let ans = firstElement(["nakul", "gite", 4,2,5]);
console.log(ans)
//there is an issue in this approach the return does not know either it is a stirng or an number
//thus we use generics for solving this problem

const identityFun = <T>(arg : T) =>{
    return arg;
}

const output1 = identityFun<string>("myString");
const output2 = identityFun<number>(200);
console.log(output1.toUpperCase());
console.log(output2 + 100);


const getFirstEelement =<T>(arr : T[]) =>{
    return arr[0];
}


const value = getFirstEelement(["rohit", "mohit"]);
const value2 = getFirstEelement([1,2,3]);
const value3= getFirstEelement<string | number>(["rohit", "mohit",1,2,3]);
//if you want to prevent the mixed bag then specifically mention the data type
interface User {
    name : string,
    age : number
}
const value4 = getFirstEelement<User>([{name : "neha", age : 24}]);
console.log(value.toUpperCase());
console.log(value2 + 100);



//Exporting and Importing Modules
//Importing : 
//old syntax
// const express = require('express')

//new syntax 
// import express from 'express';

//Exporting 
//old syntax
//module.exports = {a : 1}

//new syntax
//export const a = 1