
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    Heart,
    MoveUpRight,
    Users,
} from "lucide-react";

const quickLinks = [
    { label: "Upcoming Events", href: "/home" },
    { label: "Sign In", href: "/sign-in" },
    { label: "Sign Up", href: "/sign-up" },
];

const eventCategories = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Education",
    "Community Service",
];

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-border bg-card">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/home" className="inline-flex items-center gap-3">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                                <CalendarDays size={23} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold tracking-tight text-foreground">
                                    Social Event
                                </h2>
                                <p className="text-xs font-medium tracking-widest text-primary">
                                    MANAGEMENT SYSTEM
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                            Discover meaningful events, connect with passionate
                            people, and make a positive impact in your community.
                            Together, we can turn small actions into meaningful
                            change.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary">
                                <Users size={17} />
                            </div>
                            <p className="text-sm font-medium text-foreground">
                                Connect. Participate. Make a Difference.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Event Categories */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground">
                            Explore Events
                        </h3>

                        <ul className="space-y-4">
                            {eventCategories.map((category) => (
                                <li
                                    key={category}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/15 bg-secondary/50 p-6 sm:flex-row sm:items-center md:p-8">
                    <div>
                        <h3 className="text-xl font-bold text-foreground">
                            Be part of something meaningful.
                        </h3>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                            Find an event that matters to you and start making
                            a difference in your community today.
                        </p>
                    </div>

                    <Link
                        href="/sign-up"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                        Join Our Community
                        <MoveUpRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Social Event Management System.
                        All rights reserved.
                    </p>

                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        Built with
                        <Heart size={13} className="fill-red-500 text-red-500" />
                        for a better community.
                    </p>
                </div>
            </div>
        </footer>
    );
}
