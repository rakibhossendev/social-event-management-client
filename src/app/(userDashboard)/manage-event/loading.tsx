import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex-1">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="mt-3 h-8 w-72 max-w-full rounded-lg" />
                    <Skeleton className="mt-3 h-4 w-80 max-w-full" />
                </div>

                <div className="flex w-fit items-center gap-3 rounded-xl border border-border bg-secondary px-5 py-3">
                    <Skeleton className="size-10 rounded-lg" />
                    <div>
                        <Skeleton className="h-7 w-12 rounded-lg" />
                        <Skeleton className="mt-2 h-3 w-24" />
                    </div>
                </div>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        {/* Card Header */}
                        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-3">
                            <Skeleton className="h-3 w-32" />
                            <Skeleton className="h-5 w-24 rounded-full" />
                        </div>

                        {/* Event Content */}
                        <div className="flex flex-col gap-5 p-5 sm:flex-row">
                            <Skeleton className="h-44 w-full shrink-0 rounded-xl sm:h-36 sm:w-40" />

                            <div className="flex min-w-0 flex-1 flex-col justify-center">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="mt-3 h-4 w-full" />
                                <Skeleton className="mt-2 h-4 w-2/3" />

                                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-36" />
                                </div>

                                <div className="mt-5 flex items-center gap-3">
                                    <Skeleton className="h-9 w-24 rounded-lg" />
                                    <Skeleton className="h-9 w-24 rounded-lg" />
                                    <Skeleton className="h-9 w-24 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
