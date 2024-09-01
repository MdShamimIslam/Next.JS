import { auth } from "@/auth"
import Image from "next/image";
import SignIn from "./SignIn";
import SignOut from "./SignOut";


const Header = async() => {
    const session = await auth();
  return (
    <div>
        {
            session?.user ? (
                <div className="flex items-center gap-5">
                    <p>{session?.user?.name}</p>
                    <span className="mx-1">|</span>
                    <SignOut/>
                    <span className="mx-1">|</span>
                    <Image
                        src={session?.user?.image}
                        alt={session?.user?.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            ) : <SignIn/>
        }
    </div>
  )
}

export default Header