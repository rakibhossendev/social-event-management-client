import Image from "next/image";
import { CalendarDays, Eye, MapPin, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EventDataType } from "../../../../../Typescript/main";

interface ManageEventCardProps {
    eventData: EventDataType
}

export default function ManageEventCard({ eventData }: ManageEventCardProps) {

    return (
        <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Event Management
                </span>

                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {eventData.eventType}
                </span>
            </div>

            {/* Event Content */}
            <div className="flex flex-col gap-5 p-5 sm:flex-row">
                {/* Thumbnail */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-36 sm:w-40">
                    <Image
                        src={eventData.thumbnail}
                        alt={eventData.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Information */}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <h3 className="line-clamp-2 text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">
                        {eventData.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {eventData.description}
                    </p>

                    <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                        <div className="flex min-w-0 items-center gap-2">
                            <MapPin className="size-4 shrink-0 text-primary" />
                            <span className="truncate">{eventData.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CalendarDays className="size-4 shrink-0 text-primary" />
                            <span>
                                {new Date(`${eventData.eventDate}T00:00:00`).toLocaleDateString(
                                    "en-GB",
                                    {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    }
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Management Actions */}
            <div className="border-t border-border bg-muted/40 p-4">
                <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Manage this event
                    </span>

                    <span className="text-xs text-muted-foreground">
                        ID: {eventData._id.slice(-8)}
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {/* Details */}
                    <Link
                        href={`/home/${eventData._id}`}
                        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-primary/20 bg-view px-2 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-95"
                    >
                        <Eye className="size-4 shrink-0" />
                        <span>Details</span>
                    </Link>

                    {/* Edit */}
                    <Link
                        href={`/edit-event/${eventData._id}`}
                        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-sky-200 bg-edit px-2 text-sm font-semibold text-sky-700 transition-all duration-200 hover:bg-sky-600 hover:text-white active:scale-95 dark:border-sky-900 dark:text-sky-300"
                    >
                        <Pencil className="size-4 shrink-0" />
                        <span>Edit</span>
                    </Link>

                    {/* Delete */}
                    <Button
                        type="button"
                        className="h-10 gap-1.5 rounded-lg border border-red-200 bg-delete px-2 text-sm font-semibold text-red-600 shadow-none transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-95 dark:border-red-900 dark:text-red-400"
                    >
                        <Trash2 className="size-4 shrink-0" />
                        <span>Delete</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}