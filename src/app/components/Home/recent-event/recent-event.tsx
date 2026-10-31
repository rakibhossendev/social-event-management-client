import { EventCommonDataType } from "../../../../../Typescript/main";
import RecentEventCard from "./event-card";

export default async function RecentEvent() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/recent-event`);
    const recentEvent: EventCommonDataType[] = await response.json();


    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Make a Difference
                    </span>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Recent Events
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                        Discover upcoming community events and join hands to create positive
                        change.
                    </p>
                </div>

                <span className="text-sm font-medium text-muted-foreground">
                    {recentEvent.length} {recentEvent.length === 1 ? "Event" : "Events"}
                </span>
            </div>

            {/* Event Grid */}
            {recentEvent.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recentEvent.map((value) => (
                        <RecentEventCard
                            key={value._id}
                            recentEventData={value}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
                    <h3 className="text-lg font-semibold text-foreground">
                        No Events Available
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        There are no upcoming events right now. Check back later for new
                        community activities.
                    </p>
                </div>
            )}
        </section>
    );
}