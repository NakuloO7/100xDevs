

import { prisma } from "@/db"

import axios from "axios";

const getUserData = async () => {
  // // await new Promise((r) => setTimeout(r, 3000));   //artificial delay
  // const response = await axios.get("http://localhost:3000/api/user");
  // return response.data;

  //better fetches
  //this is the get request
  const user = await prisma.account.findFirst({});
  return {
    name: user?.username,
  };
};

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.name}
        </div>
      </div>
    </div>
  );
}
