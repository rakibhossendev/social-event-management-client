import Link from "next/link";
import { CalendarX2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <section className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-background px-4 py-16 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                <CalendarX2 className="size-8" />
            </div>

            <h1 className="mt-6 text-7xl font-bold tracking-tight text-primary sm:text-8xl">
                404
            </h1>

            <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
                Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                Let&apos;s get you back to where the events happen.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <Button className="h-11 bg-primary px-6 font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                    <Link href="/">
                        <ArrowLeft className="mr-2 size-4" />
                        Back to Home
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    className="h-11 border-border px-6 font-semibold transition-all hover:border-primary hover:text-primary"
                >
                    <Link href="/home">Explore Events</Link>
                </Button>
            </div>
        </section>
    );
}
