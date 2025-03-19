import axios from "axios";
import Image from "next/image";

// import { PrismaClient } from "@prisma/client";
// const client  = new PrismaClient();
import client from '@/db'

//this is the api call made at the home page3
const getUser = async()=>{
  const data = await client.user.findFirst({}); 

  //as we were sending request form a server back to the server
  //so brought the prisma client directly here

  return {
    name : data?.username,
    email : data?.username
  }
}


export default async function Home() {
  const data = await getUser();
  return (
    <div>
      This is the main page...
      <div className="border-solid border-2 m-4 p-4">
        {data.name}
        <br />
        {data.email}
      </div>
    </div>
  );
}
