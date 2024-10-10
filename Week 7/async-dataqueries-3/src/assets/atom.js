import axios from 'axios';
import {atom, selector} from 'recoil';


//asnchronoous data queries
export const todoAtom = atom({
    key : "todoAtom",
    default : selector({
        key : "todoSelector",
        get : async ()=>{
            const res =  await axios.get("https://jsonplaceholder.typicode.com/todos/1")  
            return res.data
        }
    })
});