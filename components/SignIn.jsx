import { doGithubSignIn, doSignIn } from "@/app/actions"


const SignIn = () => {
  return (
    <>
    <form action={doSignIn}>
        <button className="btn btn-success p-2" type="submit">Sign In With Google</button>
    </form>
    <form action={doGithubSignIn} className="mt-4">
        <button className="btn btn-primary p-2" type="submit">Sign In With Github</button>
    </form>
    </>
  )
}

export default SignIn