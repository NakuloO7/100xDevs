import client from '@/db';

const getUserDetails = async()=>{
  // const response = await axios.get('http://localhost:3000/api/user') //call for dummy hardcodeda api
  // return response.data;

  const user = await client.user.findFirst({});
  return {
    name : user?.username,
    password : user?.password
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData.name}
                </div>
                {userData.password}
            </div>
        </div>
    </div>
  );
}
