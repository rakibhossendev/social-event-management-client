import { EventCommonDataType } from "../../../../../Typescript/main";
import {
  CalendarDays,
  MapPin,
  Tag,
  UserRound,
  ArrowRight,
  Heart,
  HandHeart,
  Leaf,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";



export default async function EventDetails({ params, }: { params: Promise<{ eventId: string }> }) {
    const { eventId } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/event/${eventId}`)
    const event: EventCommonDataType = await response.json();
    
    const formattedDate = new Date(event.eventDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

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
                <Card className="gap-0 overflow-hidden border-border bg-card py-0 shadow-sm">

                    {/* Thumbnail */}
                    <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[420px]">
                        <Image
                            src={event.thumbnail}
                            alt={event.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                            <Badge className="border-0 bg-primary px-4 py-1.5 text-xs text-primary-foreground">
                                {event.eventType}
                            </Badge>

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

                                    <Card className="gap-0 rounded-xl border-border bg-background py-4 shadow-none">
                                        <CardContent className="flex items-start gap-3 px-4">
                                            <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                                <CalendarDays size={21} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs text-muted-foreground">Event Date</p>
                                                <p className="mt-1 font-semibold">{formattedDate}</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="gap-0 rounded-xl border-border bg-background py-4 shadow-none">
                                        <CardContent className="flex items-start gap-3 px-4">
                                            <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                                <MapPin size={21} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs text-muted-foreground">Event Location</p>
                                                <p className="mt-1 break-words font-semibold">
                                                    {event.location}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="gap-0 rounded-xl border-border bg-background py-4 shadow-none">
                                        <CardContent className="flex items-start gap-3 px-4">
                                            <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                                <Tag size={21} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs text-muted-foreground">Event Category</p>
                                                <p className="mt-1 font-semibold">{event.eventType}</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="gap-0 rounded-xl border-border bg-background py-4 shadow-none">
                                        <CardContent className="flex items-start gap-3 px-4">
                                            <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                                <UserRound size={21} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs text-muted-foreground">Organizer</p>
                                                <p className="mt-1 break-all font-semibold">{event.email}</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            </div>

                            {/* Why Join */}
                            <div className="rounded-xl border border-border bg-secondary/50 p-5">
                                <h3 className="flex items-center gap-2 font-bold text-secondary-foreground">
                                    <Heart size={18} />
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
                                    <Badge variant="secondary">{event.eventType}</Badge>
                                </div>

                                <div className="flex items-center justify-between gap-3 text-sm">
                                    <span className="text-muted-foreground">Date</span>
                                    <span className="text-right font-medium">{formattedDate}</span>
                                </div>
                            </div>

                            <Button className="w-full gap-2">
                                Join Now
                                <ArrowRight size={18} />
                            </Button>

                            <p className="text-center text-xs leading-5 text-muted-foreground">
                                Together, we can make our community a better place.
                            </p>

                        </aside>
                    </div>
                </Card>

                {/* Bottom Information */}
                <Card className="mt-8 border-border bg-card py-6 text-center shadow-none sm:py-7">
                    <CardContent>
                        <div className="mb-3 flex justify-center gap-3 text-primary">
                            <HandHeart size={22} />
                            <Leaf size={22} />
                            <Sparkles size={22} />
                        </div>

                        <h2 className="text-lg font-bold">
                            Small Actions, Big Changes.
                        </h2>

                        <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                            Every community initiative starts with people like you.
                            Explore, participate, and inspire others to make a difference.
                        </p>
                    </CardContent>
                </Card>

            </section>
        </main>
    )
}