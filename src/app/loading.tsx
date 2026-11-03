import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background px-6 py-20 md:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <Skeleton className="mx-auto mb-6 h-9 w-72 rounded-full" />

                        <Skeleton className="mx-auto h-14 w-full max-w-2xl rounded-xl" />
                        <Skeleton className="mx-auto mt-3 h-14 w-2/3 max-w-xl rounded-xl" />

                        <Skeleton className="mx-auto mt-6 h-5 w-full max-w-2xl" />
                        <Skeleton className="mx-auto mt-2 h-5 w-4/5 max-w-lg" />

                        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Skeleton className="h-12 w-full rounded-xl sm:w-44" />
                            <Skeleton className="h-12 w-full rounded-xl sm:w-44" />
                        </div>

                        <Skeleton className="mx-auto mt-8 h-4 w-72" />
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <Skeleton className="mx-auto mb-4 h-6 w-44 rounded-full" />
                    <Skeleton className="mx-auto h-9 w-full max-w-lg rounded-xl" />
                    <Skeleton className="mx-auto mt-4 h-5 w-3/4" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                            <Skeleton className="mb-5 size-12 rounded-xl" />
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="mt-3 h-4 w-full" />
                            <Skeleton className="mt-2 h-4 w-5/6" />
                            <Skeleton className="mt-5 h-4 w-1/2" />
                        </div>
                    ))}
                </div>

                {/* Event Categories */}
                <div className="mt-20 rounded-3xl border border-border bg-muted/40 p-6 sm:p-10">
                    <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                        <div className="w-full sm:max-w-md">
                            <Skeleton className="mb-3 h-4 w-40" />
                            <Skeleton className="h-8 w-full rounded-lg" />
                            <Skeleton className="mt-3 h-4 w-5/6" />
                        </div>
                        <Skeleton className="hidden size-8 rounded-lg sm:block" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="rounded-xl border border-border bg-card p-5">
                                <div className="flex items-start gap-4">
                                    <Skeleton className="size-11 shrink-0 rounded-lg" />
                                    <div className="min-w-0 flex-1">
                                        <Skeleton className="h-5 w-1/2" />
                                        <Skeleton className="mt-2 h-4 w-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Events Section */}
            <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="mt-3 h-8 w-56 rounded-lg" />
                        <Skeleton className="mt-3 h-5 w-full max-w-xl" />
                    </div>
                    <Skeleton className="h-5 w-24" />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                            <Skeleton className="h-48 w-full rounded-none" />
                            <div className="p-5">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="mt-3 h-4 w-full" />
                                <Skeleton className="mt-2 h-4 w-2/3" />
                                <div className="mt-4 flex items-center justify-between">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-9 w-24 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery + Newsletter */}
            <section className="container mx-auto px-4 py-12">
                <Skeleton className="mb-6 h-8 w-56 rounded-lg" />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton key={index} className="aspect-square rounded-xl" />
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="rounded-3xl border border-border bg-muted/40 px-6 py-12 text-center sm:px-10">
                    <Skeleton className="mx-auto h-8 w-72 rounded-lg" />
                    <Skeleton className="mx-auto mt-4 h-5 w-full max-w-xl" />
                    <div className="mx-auto mt-7 flex max-w-lg gap-3">
                        <Skeleton className="h-12 flex-1 rounded-xl" />
                        <Skeleton className="h-12 w-32 rounded-xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}
