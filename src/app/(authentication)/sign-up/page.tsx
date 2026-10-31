'use client'
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"



import { Input } from "@/components/ui/input"
import { signUp } from "@/lib/auth-client";
import { ArrowRight, Heart, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { UserFormDataType } from "../../../../Typescript/main";


export default function SignUp() {
    const router = useRouter();

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const getUserData = Object.fromEntries(formData.entries()) as unknown as UserFormDataType;

        if (getUserData.password !== getUserData.confirm) {
            alert("Password are not matched");
            return
        } else if (getUserData.password.length < 6) {
            alert("Password length need must be 6 character");
            return
        } else if (!/[A-Z]/.test(getUserData.password)) {
            alert("Must have an uppercase letter");
            return
        }

        const { error } = await signUp.email({
            name: getUserData.name,
            email: getUserData.email,
            image: getUserData.image,
            password: getUserData.password
        })

        if (error) {
            alert(error.message);
            return
        }
        alert("Account created successfully")
        router.push("/home")
        router.refresh();
    }

    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background px-4 py-6 sm:py-8">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl md:grid-cols-2">

                {/* Left Banner */}
                <div className="relative flex min-h-55 flex-col justify-center overflow-hidden bg-primary p-6 text-white sm:p-8">
                    <div className="absolute -right-16 -top-16 size-48 rounded-full border-25 border-white/10" />
                    <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-white/5" />

                    <div className="relative z-10">
                        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-white/15">
                            <Users className="size-5" />
                        </div>

                        <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
                            Be Part of
                            <br />
                            Something
                            <br />
                            <span className="text-green-200">Meaningful.</span>
                        </h1>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                            Join our community, discover exciting events, and make a
                            positive impact through small acts of kindness.
                        </p>

                        <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5">
                            <Heart className="size-5 text-red-200" />
                            <span className="text-sm font-medium">
                                Connect. Participate. Make a Difference.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Registration Form */}
                <div className="flex flex-col justify-center p-5 sm:p-8">
                    <div className="mb-4">
                        <span className="text-sm font-semibold text-primary">
                            GET STARTED
                        </span>

                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                            Create Account
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Create your account and start making a difference.
                        </p>
                    </div>

                    <FieldSet className="w-full border-0 p-0">
                        <form onSubmit={handleSignUp}>
                            <FieldGroup className="gap-3">
                                <Field>
                                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Mr. Alice"
                                        required
                                        className="h-10"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        required
                                        className="h-10"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="url">Photo URL</FieldLabel>
                                    <Input
                                        id="url"
                                        type="url"
                                        name="image"
                                        placeholder="https://your-photo-url.com"
                                        className="h-10"
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
                                        className="h-10"
                                    />
                                    <FieldDescription>
                                        At least 6 characters, including uppercase and lowercase letters.
                                    </FieldDescription>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="confirm">Confirm Password</FieldLabel>
                                    <Input
                                        id="confirm"
                                        type="password"
                                        name="confirm"
                                        placeholder="Confirm your password"
                                        required
                                        className="h-10"
                                    />
                                </Field>
                            </FieldGroup>

                            <Button
                                type="submit"
                                className="mt-5 h-10 w-full bg-primary font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                            >
                                Create Account
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </form>
                    </FieldSet>

                    {/* Divider */}
                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            className="h-10 gap-2 border-border"
                           
                        >
                            <FcGoogle className="size-5" />
                            Google
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="h-10 gap-2 border-border"
                            
                        >
                            <FaGithub  className="size-5" />
                            GitHub
                        </Button>
                    </div>

                    <p className="mt-4 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="font-semibold text-primary transition-colors hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );



}