'use client'
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"


import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { ArrowRight, Heart, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInDataType } from "../../../../Typescript/main";

export default function SignIn() {
    const router = useRouter();

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const getUserData = Object.fromEntries(formData.entries()) as unknown as SignInDataType;

        const {error} = await signIn.email({
            email: getUserData.email,
            password: getUserData.password
        });

        if(error){
            alert(error.message);
            return
        }
        router.push("/home");
        router.refresh();
        alert("Login successfully")

    }

    return (
  <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background px-4 py-10">
    <div className="grid w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl md:grid-cols-2">

      {/* Left Banner */}
      <div className="relative flex min-h-55 flex-col justify-center overflow-hidden bg-primary p-7 text-white sm:p-9 md:min-h-115">
        <div className="absolute -right-16 -top-16 size-48 rounded-full border-25 border-white/10" />
        <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-white/5" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-white/15">
            <Users className="size-6" />
          </div>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Welcome
            <br />
            <span className="text-green-200">Back!</span>
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
            Your community is waiting for you. Sign in to discover events,
            connect with people, and create meaningful memories.
          </p>

          <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
            <Heart className="size-5 text-red-200" />
            <span className="text-sm font-medium">
              Connect. Participate. Make a Difference.
            </span>
          </div>
        </div>
      </div>

      {/* Sign In Form */}
      <div className="flex flex-col justify-center p-6 sm:p-9">
        <div className="mb-7">
          <span className="text-sm font-semibold text-primary">
            WELCOME BACK
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
            Sign In
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Enter your credentials to access your account.
          </p>
        </div>

        <FieldSet className="w-full border-0 p-0">
          <form onSubmit={handleSignIn}>
            <FieldGroup className="gap-5">
              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="h-11"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="h-11"
                />
              </Field>
            </FieldGroup>

            <Button
              type="submit"
              className="mt-7 h-11 w-full bg-primary font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Sign In
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
        </FieldSet>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            OR CONTINUE WITH
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            type="button"
            variant="outline"
            className="h-11 gap-2 border-border hover:cursor-pointer"
            
          >
            <FcGoogle className="size-5" />
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2 border-border hover:cursor-pointer"
          >
            <FaGithub className="size-5" />
            GitHub
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {`Don't have an account?`}{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-primary transition-colors hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  </section>
);

}