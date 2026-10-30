import Link from "next/link";

export default function SignIn(){


    return (
        <div>
            <h1>SignIn page Rendered</h1>

            <p>Are you new? <Link href={"/sign-up"}>Sign In</Link></p>
        </div>
    )
}