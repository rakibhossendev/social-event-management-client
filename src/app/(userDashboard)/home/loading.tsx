import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="min-h-screen bg-background py-10 md:py-14">
            <section className="container mx-auto px-4">

                {/* Hero Section */}
                <div className="mb-10 rounded-2xl border border-border bg-muted/30 px-6 py-10 md:px-10 md:py-14">
                    <div className="max-w-2xl">
                        <Skeleton className="mb-4 h-6 w-56 rounded-full" />

                        <Skeleton className="h-10 w-full max-w-md rounded-lg" />
                        <Skeleton className="mt-2 h-10 w-2/3 max-w-xs rounded-lg" />

                        <Skeleton className="mt-5 h-4 w-full" />
                        <Skeleton className="mt-2 h-4 w-5/6" />

                        <div className="mt-7 flex flex-wrap items-center gap-6">
                            <div>
                                <Skeleton className="h-8 w-20 rounded-lg" />
                                <Skeleton className="mt-2 h-4 w-32" />
                            </div>

                            <div className="h-10 w-px bg-border" />

                            <div>
                                <Skeleton className="h-8 w-28 rounded-lg" />
                                <Skeleton className="mt-2 h-4 w-36" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search + Category Filters */}
                <div className="mb-10">
                    <div className="mb-5">
                        <Skeleton className="h-7 w-56 rounded-lg" />
                        <Skeleton className="mt-2 h-4 w-72" />
                    </div>

                    <Skeleton className="mb-5 h-10 w-full max-w-lg rounded-lg" />

                    <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <Skeleton key={index} className="h-9 w-24 rounded-full" />
                        ))}
                    </div>
                </div>

                {/* Events Heading */}
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <Skeleton className="h-7 w-48 rounded-lg" />
                        <Skeleton className="mt-2 h-4 w-72" />
                    </div>

                    <Skeleton className="h-4 w-44" />
                </div>

                {/* Event Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                            <Skeleton className="h-52 w-full rounded-none" />

                            <div className="p-5">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="mt-3 h-4 w-full" />
                                <Skeleton className="mt-2 h-4 w-2/3" />

                                <div className="mt-4 space-y-2 border-t border-border pt-4">
                                    <Skeleton className="h-4 w-2/3" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>

                                <div className="mt-5 flex items-center gap-3">
                                    <Skeleton className="h-10 flex-1 rounded-lg" />
                                    <Skeleton className="h-10 flex-1 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}
