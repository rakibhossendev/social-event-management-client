import EventCard from "@/app/components/Home/recent-event/event-card";
import { getJWTTokenFormServer } from "@/lib/getJwtTokenServer";
import { EventDataType, EventResponseType } from "../../../../Typescript/main";


const eventCategories = [ "Cleanup", "Plantation", "Donation", "Education", "Community Service", "Other" ]

const userDashboardResponse = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/all-events`, {
        headers: {
            authorization: `Bearer ${await getJWTTokenFormServer()}`
        }
    });
    const allEvents: EventResponseType = await response.json();

    return allEvents.data
}

export default async function UserDashboard() {

    const allEvents: EventDataType[] = await userDashboardResponse()


    return (
        <main className="min-h-screen bg-background py-10 md:py-14">
            <section className="container mx-auto px-4">

                {/* Hero Section */}
                <div className="mb-10 rounded-2xl border bg-muted/30 px-6 py-10 md:px-10 md:py-14">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            Make a Difference Together
                        </span>

                        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                            Discover Events.
                            <span className="block text-primary">
                                Create Real Impact.
                            </span>
                        </h1>

                        <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                            Explore community events, connect with people, and take part
                            in meaningful activities. From cleaning your city to planting
                            trees, every small action can make a big difference.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-6">
                            <div>
                                <h3 className="text-2xl font-bold">{allEvents.length}+</h3>
                                <p className="text-xs text-muted-foreground">Community Events</p>
                            </div>

                            <div className="h-10 w-px bg-border" />

                            <div>
                                <h3 className="text-2xl font-bold">Together</h3>
                                <p className="text-xs text-muted-foreground">Stronger Community</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Section */}
                <div className="mb-10">
                    <div className="mb-5">
                        <h2 className="text-xl font-bold md:text-2xl">
                            Explore Categories
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Find events based on your interests and passion.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {eventCategories.map((category) => (
                            <button
                                key={category}
                                className="rounded-full border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Heading */}
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-bold md:text-2xl">
                            Upcoming Events
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Discover opportunities to participate and make an impact.
                        </p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Showing {allEvents.length} events
                    </p>
                </div>

                {/* Event Cards */}
                {allEvents.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {allEvents.map((value) => (
                            <EventCard
                                key={value._id}
                                recentEventData={value}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl border border-dashed py-16 text-center">
                        <h3 className="text-lg font-semibold">No Events Found</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            There are no events available right now. Check back later!
                        </p>
                    </div>
                )}

            </section>
        </main>
    )
}