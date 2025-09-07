import { Anvil } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAuthsession } from "@/lib/auth";
import Image from 'next/image';
import SignOut from "./signout";



export default async function Navbar() {
  const session = await getAuthsession();
  console.log(session, 'session')
  const tempUser = {
    name: 'User',
    username: 'user'
  }
  return (
    <div className="w-full flex justify-between px-8">
      <Link href="/" className="flex gap-2">
        <Anvil />
        <span className="font-extrabold">GeekCMS</span>
      </Link>
      {session ? (
        <UserModalComponent user={session?.user}/>
      ) : (
        <Link href="/sign-in">Sign in</Link>
      )}
    </div>
  );
}

const UserModalComponent = ({ user }) =>{
    return <DropdownMenu>
  <DropdownMenuTrigger><Image className="rounded-full border-2 border-[#fb04fb]" src={user.image} width={40} height={40} /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href={`/profile/${user.username}`}>Go to Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <SignOut />
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
}