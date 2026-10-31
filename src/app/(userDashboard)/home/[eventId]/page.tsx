import Image from "next/image";
import { EventCommonDataType } from "../../../../../Typescript/main";

export default async function EventDetails({ params, }: { params: Promise<{ eventId: string }> }) {
    const { eventId } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/event/${eventId}`)
    const event: EventCommonDataType = await response.json();

    return (
        <main className="min-h-screen bg-background py-8 text-foreground md:py-12">
            <section className="container mx-auto max-w-6xl px-4">

                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Home</span>
                    <span>/</span>
                    <span>Events</span>
                    <span>/</span>
                    <span className="font-medium text-primary">Event Details</span>
                </div>

                {/* Main Event */}
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">

                    {/* Thumbnail */}
                    <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[420px]">
                        <Image
                            src={event.thumbnail}
                            width={150}
                            height={150}
                            alt={event.title}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                            <span className="inline-flex rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                                {event.eventType}
                            </span>

                            <h1 className="mt-3 max-w-3xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                {event.title}
                            </h1>
                        </div>
                    </div>

                    {/* Event Content */}
                    <div className="grid grid-cols-1 gap-8 p-5 md:p-8 lg:grid-cols-3">

                        {/* Description */}
                        <div className="space-y-7 lg:col-span-2">

                            <div>
                                <h2 className="text-xl font-bold">About This Event</h2>
                                <p className="mt-3 text-sm leading-8 text-muted-foreground md:text-base">
                                    {event.description}
                                </p>
                            </div>

                            {/* Event Information */}
                            <div>
                                <h2 className="mb-4 text-xl font-bold">Event Information</h2>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                                        <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="18" height="18" x="3" y="4" rx="2" />
                                                <path d="M16 2v4M8 2v4M3 10h18" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground">Event Date</p>
                                            <span>
                                                {new Date(event.eventDate).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                                        <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                                                <circle cx="12" cy="10" r="2.5" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground">Event Location</p>
                                            <p className="mt-1 font-semibold break-words">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                                        <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground">Event Category</p>
                                            <p className="mt-1 font-semibold">{event.eventType}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                                        <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M5 21a7 7 0 0 1 14 0" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground">Organizer</p>
                                            <p className="mt-1 break-all font-semibold">{event.email}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Why Join */}
                            <div className="rounded-xl border border-border bg-secondary/50 p-5">
                                <h3 className="font-bold text-secondary-foreground">
                                    Why Should You Join?
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                    Be part of something meaningful! Connect with like-minded
                                    people, contribute to your community, gain new experiences,
                                    and help create a positive impact through collective action.
                                </p>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <aside className="h-fit space-y-5 rounded-xl border border-border bg-background p-5">

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    Join the Community
                                </span>
                                <h2 className="mt-2 text-xl font-bold">
                                    Be Part of the Change!
                                </h2>
                                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                    Your participation matters. Join this event and make a
                                    difference together with your community.
                                </p>
                            </div>

                            <div className="space-y-3 border-y border-border py-5">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">Event Type</span>
                                    <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                                        {event.eventType}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-3 text-sm">
                                    <span className="text-muted-foreground">Date</span>
                                    <span>
                                        {new Date(event.eventDate).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                            </div>

                            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]">
                                Join Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                            <p className="text-center text-xs leading-5 text-muted-foreground">
                                Together, we can make our community a better place.
                            </p>

                        </aside>
                    </div>
                </div>

                {/* Bottom Information */}
                <div className="mt-8 rounded-xl border border-border bg-card p-5 text-center sm:p-7">
                    <h2 className="text-lg font-bold">
                        Small Actions, Big Changes.
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                        Every community initiative starts with people like you.
                        Explore, participate, and inspire others to make a difference.
                    </p>
                </div>

            </section>
        </main>
    )
}