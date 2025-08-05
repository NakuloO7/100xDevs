
import prisma from '@/db'

const fetchData = async () => {
  // const response = await axios.get('http://localhost:3000/api/user')
  // return response.data.user;

  const user = await prisma.user.findFirst();
  return user;

  //as this is the server component the backend code will never reach the frontend
  //only the final render i.e in this case div will reach the frontend 
};
export default async function User() {
  const data = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {data?.email}</div>

          {data?.password}
        </div>
      </div>
    </div>
  );
}
