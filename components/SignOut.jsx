
import { doSignOut } from "@/app/actions";

const SignOut = () => {
  return (
    <form action={doSignOut}>
        <button type="submit">Sign Out</button>
    </form>
  )
}

export default SignOut