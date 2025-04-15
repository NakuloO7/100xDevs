import prisma from '@/db';  //this is a singleton prisma client which does not reload again and again

//instead of using the axios to fetch the data from server "/api/user"
//we can directly fetch the data from the database 
//unless the server is inside the same app
async function getUserDetails() {
  const user = await prisma.user.findFirst({});
  return({
      username : user?.username
  })
}

export default async function Home() {

  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
            </div>
        </div>
    </div>
  );
}
