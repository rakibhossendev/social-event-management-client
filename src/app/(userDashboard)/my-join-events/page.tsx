import { auth } from "@/lib/auth";
import { EventDataType } from "../../../../Typescript/main";
import { headers } from "next/headers";
import { getJWTTokenFormServer } from "@/lib/getJwtTokenServer";
import JoinedEventCard from "../_components/joined-event-card/JoinedEventCard";
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const myJoinedEventsPromise = async (): Promise<EventDataType[]> => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/my-joined-event/${session?.user.email}`, {
        headers: {
            authorization: `Bearer ${await getJWTTokenFormServer()}`
        }
    })
    const joinedEvents = await response.json();

    return joinedEvents.data
}

export default async function JoinedEvents() {
    const joinedEvents: EventDataType[] = await myJoinedEventsPromise()

    return (
        <section className="container mx-auto space-y-6 px-4 py-8">

            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                        Joined Events
                    </h1>
                    <p className="text-sm text-[var(--muted-foreground)]">
                        Manage and keep track of the events you have joined.
                    </p>
                </div>

                <div className="flex w-fit items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--secondary)] text-[var(--primary)]">
                        <CalendarDays size={20} />
                    </div>

                    <div>
                        <p className="text-2xl font-bold leading-none text-[var(--foreground)]">
                            {joinedEvents.length}
                        </p>
                        <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                            Total Joined
                        </p>
                    </div>
                </div>
            </div>

            {/* Event List */}
            <div className="space-y-3">
                {joinedEvents.length > 0 ? (
                    joinedEvents.map(value => (
                        <JoinedEventCard
                            key={value._id}
                            joinedEvent={value}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)] px-5 py-16 text-center">
                        <CalendarDays
                            size={36}
                            className="mb-4 text-[var(--muted-foreground)]"
                        />

                        <h2 className="text-lg font-semibold text-[var(--foreground)]">
                            No Joined Events Yet
                        </h2>

                        <p className="mt-2 max-w-sm text-sm text-[var(--muted-foreground)]">
                            {`You haven't joined any events yet. Explore available events
                            and find something meaningful to participate in.`}
                        </p>

                        <Button  className="mt-5">
                            <Link href="/events">
                                Explore Events
                            </Link>
                        </Button>
                    </div>
                )}
            </div>

        </section>
    )

}