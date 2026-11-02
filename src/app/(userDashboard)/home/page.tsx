import EventsBrowser from "../_components/home/events-browser";
import { EventDataType, EventResponseType } from "../../../../Typescript/main";

const userDashboardResponse = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/all-events`);
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

                {/* Search, Categories & Events */}
                <EventsBrowser events={allEvents} />

            </section>
        </main>
    )
}