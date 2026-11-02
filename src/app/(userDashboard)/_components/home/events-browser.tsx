'use client'

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import EventCard from "@/app/components/Home/recent-event/event-card";
import { EventDataType } from "../../../../../Typescript/main";

const eventCategories = ["Cleanup", "Plantation", "Donation", "Education", "Community Service", "Other"]

const ALL_CATEGORIES = "All"

interface EventsBrowserProps {
    events: EventDataType[]
}

export default function EventsBrowser({ events }: EventsBrowserProps) {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES)

    const filteredEvents = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()

        return events.filter((event) => {
            const matchesCategory =
                activeCategory === ALL_CATEGORIES ||
                event.eventType.toLowerCase() === activeCategory.toLowerCase()

            if (!matchesCategory) return false

            if (!query) return true

            return (
                event.title.toLowerCase().includes(query) ||
                event.description.toLowerCase().includes(query) ||
                event.location.toLowerCase().includes(query)
            )
        })
    }, [events, searchQuery, activeCategory])

    const hasActiveFilters = searchQuery.trim() !== "" || activeCategory !== ALL_CATEGORIES

    const clearFilters = () => {
        setSearchQuery("")
        setActiveCategory(ALL_CATEGORIES)
    }

    return (
        <>
            {/* Search + Category Filters */}
            <div className="mb-10">
                <div className="mb-5">
                    <h2 className="text-xl font-bold md:text-2xl">
                        Explore Categories
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Find events based on your interests and passion.
                    </p>
                </div>

                {/* Search Input */}
                <div className="relative mb-5 max-w-lg">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search events by title, description, location..."
                        aria-label="Search events"
                        className="h-10 rounded-lg border-border bg-background pl-9 pr-9"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            aria-label="Clear search"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <X className="size-4" />
                        </button>
                    )}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                    {[ALL_CATEGORIES, ...eventCategories].map((category) => {
                        const isActive = activeCategory === category

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isActive
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border bg-background hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        )
                    })}
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

                <div className="flex items-center gap-3">
                    <p className="text-sm text-muted-foreground">
                        Showing {filteredEvents.length} of {events.length} events
                    </p>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                            Clear filters
                        </button>
                    )}
                </div>
            </div>

            {/* Event Cards */}
            {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((value) => (
                        <EventCard
                            key={value._id}
                            recentEventData={value}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-xl border border-dashed py-16 text-center">
                    <h3 className="text-lg font-semibold">
                        {events.length > 0 ? "No Matching Events" : "No Events Found"}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {events.length > 0
                            ? "Try a different search term or category."
                            : "There are no events available right now. Check back later!"}
                    </p>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Clear filters
                        </button>
                    )}
                </div>
            )}
        </>
    )
}
