import Image from "next/image";
import { EventCommonDataType } from "../../../../../Typescript/main"
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Button } from "@base-ui/react";
import Link from "next/link";

interface RecentEventCardProps {
    recentEventData: EventCommonDataType
}
export default function EventCard({ recentEventData }: RecentEventCardProps) {

    return (
        <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Event Thumbnail */}
            <div className="relative h-52 overflow-hidden bg-secondary">
                <Image
                    src={recentEventData.thumbnail}
                    alt={recentEventData.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm backdrop-blur-sm">
                    {recentEventData.eventType}
                </span>
            </div>

            {/* Event Information */}
            <div className="p-5">
                <h3 className="line-clamp-1 text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">
                    {recentEventData.title}
                </h3>

                <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-muted-foreground">
                    {recentEventData.description}
                </p>

                <div className="mt-4 space-y-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 shrink-0 text-primary" />
                        <span className="line-clamp-1">{recentEventData.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="size-4 shrink-0 text-primary" />
                        <span>
                            {new Date(recentEventData.eventDate).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex items-center gap-3">
                    <Button
                        type="button"
                        className="h-10 flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-95"
                    >
                        <Users className="size-4 shrink-0" />
                        <span>Join Event</span>
                    </Button>

                    <Link
                        href={`/events/${recentEventData._id}`}
                        className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition-all duration-200 hover:bg-accent hover:text-primary active:scale-95"
                    >
                        Details
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}