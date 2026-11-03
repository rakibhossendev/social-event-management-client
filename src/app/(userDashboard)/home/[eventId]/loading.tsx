import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="min-h-screen bg-background py-8 text-foreground md:py-12">
            <section className="container mx-auto max-w-6xl px-4">

                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Home</span>
                    <span>/</span>
                    <span>Events</span>
                    <span>/</span>
                    <Skeleton className="h-4 w-28" />
                </div>

                {/* Main Event */}
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">

                    {/* Thumbnail */}
                    <div className="relative h-64 w-full overflow-hidden bg-muted sm:h-80 lg:h-[420px]">
                        <Skeleton className="h-full w-full rounded-none" />

                        <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                            <Skeleton className="h-6 w-28 rounded-full" />
                            <Skeleton className="mt-3 h-9 w-full max-w-3xl rounded-lg bg-black/20" />
                            <Skeleton className="mt-2 h-9 w-2/3 max-w-xl rounded-lg bg-black/20" />
                        </div>
                    </div>

                    {/* Event Content */}
                    <div className="grid grid-cols-1 gap-8 p-5 md:p-8 lg:grid-cols-3">

                        {/* Description */}
                        <div className="space-y-7 lg:col-span-2">
                            <div>
                                <Skeleton className="h-6 w-48 rounded-lg" />
                                <div className="mt-4 space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </div>

                            {/* Event Information */}
                            <div>
                                <Skeleton className="mb-4 h-6 w-44 rounded-lg" />

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <div key={index} className="rounded-xl border border-border bg-background py-4 shadow-none">
                                            <div className="flex items-start gap-3 px-4">
                                                <Skeleton className="size-11 shrink-0 rounded-lg" />
                                                <div className="min-w-0 flex-1">
                                                    <Skeleton className="h-3 w-24" />
                                                    <Skeleton className="mt-2 h-4 w-3/4" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Join */}
                            <div className="rounded-xl border border-border bg-secondary/50 p-5">
                                <Skeleton className="h-5 w-56" />
                                <div className="mt-3 space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-4/5" />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="h-fit space-y-5 rounded-xl border border-border bg-background p-5">
                            <div>
                                <Skeleton className="h-3 w-44" />
                                <Skeleton className="mt-3 h-6 w-full max-w-xs rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                </div>
                            </div>

                            <div className="space-y-4 border-y border-border py-5">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-5 w-20 rounded-full" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-12" />
                                    <Skeleton className="h-4 w-32" />
                                </div>
                            </div>

                            <Skeleton className="h-11 w-full rounded-lg" />

                            <Skeleton className="mx-auto h-3 w-64" />
                        </aside>
                    </div>
                </div>

                {/* Bottom Information */}
                <div className="mt-8 rounded-xl border border-border bg-card px-6 py-6 text-center shadow-none sm:py-7">
                    <div className="mb-3 flex justify-center gap-3">
                        <Skeleton className="size-6 rounded-full" />
                        <Skeleton className="size-6 rounded-full" />
                        <Skeleton className="size-6 rounded-full" />
                    </div>

                    <Skeleton className="mx-auto h-6 w-64 rounded-lg" />
                    <Skeleton className="mx-auto mt-3 h-4 w-full max-w-xl" />
                </div>

            </section>
        </main>
    );
}
