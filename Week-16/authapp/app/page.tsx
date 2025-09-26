import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { NEXT_AUTH } from "./lib/auth";

export default async function Home() {

  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar />
      {JSON.stringify(session)}
    </div>
  );
}
