
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background px-6 py-20 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Connect • Participate • Make a Difference
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Social Event{" "}
                        <span className="text-primary">Management</span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                        A social event platform where users can create, discover, and
                        join community-driven events and activities.
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#"
                            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:w-auto"
                        >
                            Join Event
                            <span className="ml-2 text-lg">→</span>
                        </Link>

                        <Link
                            href="#"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-edit px-7 py-3.5 font-semibold text-foreground transition-all hover:border-primary hover:bg-edit/80 sm:w-auto"
                        >
                            + Add Event
                        </Link>
                    </div>

                    {/* Bottom text */}
                    <p className="mt-8 text-sm text-muted-foreground">
                        Bring people together and create meaningful experiences.
                    </p>
                </div>
            </div>
        </section>
    );
}
