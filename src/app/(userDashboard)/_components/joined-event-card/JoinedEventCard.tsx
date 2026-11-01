import { EventDataType } from "../../../../../Typescript/main"
import { CalendarDays, MapPin, Eye, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface JoinedEventsProps {
    joinedEvent: EventDataType
}

export default function JoinedEventCard({ joinedEvent }: JoinedEventsProps) {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:bg-[var(--secondary)]/30 sm:flex-row sm:items-center">

            {/* Event Info */}
            <div className="flex min-w-0 flex-1 items-center gap-4">
                <Image
                    width={100}
                    height={100}
                    src={joinedEvent.thumbnail}
                    alt={joinedEvent.title}
                    className="h-16 w-20 shrink-0 rounded-lg object-cover"
                />

                <div className="min-w-0 space-y-1.5">
                    <h3 className="truncate font-semibold text-[var(--foreground)]">
                        {joinedEvent.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted-foreground)]">
                        <span className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            {new Date(joinedEvent.eventDate).toLocaleDateString()}
                        </span>

                        <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {joinedEvent.location}
                        </span>
                    </div>
                </div>
            </div>

            {/* Event Type */}
            <div className="sm:w-36">
                <Badge
                    variant="outline"
                    className="border-[var(--border)] bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                >
                    {joinedEvent.eventType}
                </Badge>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:justify-end">
                <Link
                    href={`/home/${joinedEvent._id}`}
                    className="flex flex-1 sm:flex-none"
                >
                    <Button
                        size="sm"
                        variant="outline"
                        className="w-full cursor-pointer gap-2 border-[var(--border)] text-[var(--primary)] hover:bg-[var(--secondary)]"
                    >
                        <Eye size={16} className="shrink-0" />
                        <span>Details</span>
                    </Button>
                </Link>
                <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 cursor-pointer border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 sm:flex-none"
                >
                    <XCircle size={16} />
                    Cancel Join
                </Button>
            </div>
        </div>
    )
}