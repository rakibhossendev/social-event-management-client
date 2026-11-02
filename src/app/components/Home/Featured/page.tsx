import {
    CalendarDays,
    Users,
    HeartHandshake,
    MapPin,
    Megaphone,
    Sprout,
    HandHeart,
    GraduationCap,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        icon: Megaphone,
        title: "Create & Share Events",
        description:
            "Create social events and share your initiatives with people who care about making a difference.",
        color: "bg-green-100 text-green-700",
    },
    {
        icon: Users,
        title: "Join Community Events",
        description:
            "Discover meaningful activities and join events that match your interests and passion.",
        color: "bg-blue-100 text-blue-700",
    },
    {
        icon: HeartHandshake,
        title: "Make a Real Impact",
        description:
            "Connect with people, support local initiatives, and work together to create positive change.",
        color: "bg-rose-100 text-rose-700",
    },
    {
        icon: CalendarDays,
        title: "Discover Upcoming Events",
        description:
            "Explore upcoming community activities, check event details, and plan your participation.",
        color: "bg-amber-100 text-amber-700",
    },
];

const eventTypes = [
    {
        icon: Sprout,
        title: "Plantation",
        description: "Help build a greener environment.",
    },
    {
        icon: HeartHandshake,
        title: "Donation",
        description: "Support people in need.",
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Share knowledge and learning.",
    },
    {
        icon: MapPin,
        title: "Community Service",
        description: "Improve your local community.",
    },
    {
        icon: HandHeart,
        title: "Social Welfare",
        description: "Stand together for a better society.",
    },
    {
        icon: Users,
        title: "Cleanup",
        description: "Keep public spaces clean.",
    },
];

export default function FeaturedSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <Badge className="mb-4 border-green-200 bg-green-100 text-green-700 hover:bg-green-100">
                    <HeartHandshake size={14} className="mr-1" />
                    Community Together
                </Badge>

                <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
                    Bring People Together,
                    <span className="text-primary"> Create Positive Change</span>
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                    A community-driven platform where people can create social
                    events, discover meaningful activities, and join hands to
                    make a difference.
                </p>
            </div>

            {/* Main Features */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <Card
                            key={feature.title}
                            className="group border-green-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                        >
                            <CardContent className="p-6">
                                <div
                                    className={`mb-5 flex size-12 items-center justify-center rounded-xl ${feature.color}`}
                                >
                                    <Icon size={23} />
                                </div>

                                <h3 className="mb-2 text-lg font-semibold text-green-950">
                                    {feature.title}
                                </h3>

                                <p className="text-sm leading-6 text-muted-foreground">
                                    {feature.description}
                                </p>

                                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary">
                                    <CheckCircle2 size={15} />
                                    Community Powered
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Event Categories */}
            <div className="mt-20 rounded-3xl border border-green-100 bg-green-50/70 p-6 sm:p-10">
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                            Explore Opportunities
                        </p>

                        <h3 className="text-2xl font-bold text-green-950 sm:text-3xl">
                            Find Your Way to Make a Difference
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Discover different types of social activities and
                            become part of something meaningful.
                        </p>
                    </div>

                    <ArrowUpRight className="hidden size-8 text-primary sm:block" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {eventTypes.map((event) => {
                        const Icon = event.icon;

                        return (
                            <div
                                key={event.title}
                                className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md"
                            >
                                <div className="rounded-lg bg-green-100 p-3 text-primary">
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-950">
                                        {event.title}
                                    </h4>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
