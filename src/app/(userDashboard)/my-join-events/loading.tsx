import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="container mx-auto space-y-6 px-4 py-8">

            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-56 rounded-lg" />
                    <Skeleton className="h-4 w-80 max-w-full" />
                </div>

                <div className="flex w-fit items-center gap-3 rounded-xl border border-border bg-card px-5 py-3">
                    <Skeleton className="size-10 rounded-lg" />
                    <div>
                        <Skeleton className="h-7 w-12 rounded-lg" />
                        <Skeleton className="mt-2 h-3 w-24" />
                    </div>
                </div>
            </div>

            {/* Event List */}
            <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                            <Skeleton className="h-16 w-20 shrink-0 rounded-lg" />

                            <div className="min-w-0 flex-1 space-y-2">
                                <Skeleton className="h-5 w-2/3" />
                                <div className="flex flex-wrap items-center gap-3">
                                    <Skeleton className="h-4 w-28" />
                                    <Skeleton className="h-4 w-36" />
                                </div>
                            </div>
                        </div>

                        <div className="sm:w-36">
                            <Skeleton className="h-6 w-28 rounded-full" />
                        </div>

                        <div className="flex items-center gap-2">
                            <Skeleton className="h-9 w-20 rounded-lg" />
                            <Skeleton className="h-9 w-24 rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
