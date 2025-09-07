'use client'
import { Icons } from "@/components/ui/icons";
import { Anvil } from "lucide-react";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";


export default function SignIn() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const onSignin = async()=>{
    try {
      setLoading(true);
      await signIn('google')
    } catch (error) {
      console.error(error.message);
      toast({
        variant: "destructive",
        title: 'uh-oh!',
        description: "Failed to sign in"
      }) 
    } finally{
      setLoading(false);
    }
  }
  return (
    <section className="w-full flex h-screen justify-center items-center">
      <div className="w-full sm:w-1/2 md:w-1/5 mx-4 p-4 rounded-large bg-zinc-800 flex flex-col items-center gap-4">
            <Anvil className="size-10 text-gray-300" />
            <p className="text-center text-sm text-gray-200">Welcome, by continuing with GeekCMS you'll be a Geek</p>
            <button onClick={onSignin} className="flex gap-2 items-center bg-gray-500/50 hover:bg-gray-500/40 transition-colors duration-200 px-10 py-2 rounded font-bold text-lg"> <Icons.GoogleLogo className="size-7" /> {loading? 'Loading...':'Sign In'}</button>
      </div>
    </section>
  );
}
