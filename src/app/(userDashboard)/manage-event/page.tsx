import { auth } from "@/lib/auth"
import { getJWTTokenFormServer } from "@/lib/getJwtTokenServer"
import { headers } from "next/headers"
import ManageEventCard from "../_components/manage-event/manage-event-card"
import { CalendarDays } from "lucide-react"
import { EventDataType, EventResponseType } from "../../../../Typescript/main"

const manageEventResponse = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/my-events/${session?.user.email}`, {
        headers: {
            authorization: `Bearer ${await getJWTTokenFormServer()}`
        }
    })
    const myEvents: EventResponseType = await response.json();

    return myEvents.data
}

export default async function ManageEvent() {
    const myEvents: EventDataType[] = await manageEventResponse()


    return (
        <section className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Dashboard / Events
                    </p>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Manage Your Events
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View, update, and manage all the events you have created.
                    </p>
                </div>

                <div className="flex w-fit items-center gap-3 rounded-xl border border-primary/20 bg-secondary px-5 py-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <CalendarDays className="size-5" />
                    </div>

                    <div>
                        <p className="text-2xl font-bold leading-none text-foreground">
                            {myEvents.length}
                        </p>
                        <p className="mt-1 text-xs font-medium text-muted-foreground">
                            Total Events
                        </p>
                    </div>
                </div>
            </div>

            {/* Event Cards */}
            {myEvents.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {myEvents.map((value) => (
                        <ManageEventCard
                            key={value._id}
                            eventData={value}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                        <CalendarDays className="size-8" />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-foreground">
                        No Events Found
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                        {`You haven't created any events yet. Start by creating your first
                        community event.`}
                    </p>
                </div>
            )}
        </section>
    );
}