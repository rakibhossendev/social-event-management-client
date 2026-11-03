import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background px-4 py-8 sm:py-10">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl md:grid-cols-2">

                {/* Left Banner */}
                <div className="relative flex min-h-60 flex-col justify-center overflow-hidden bg-primary p-6 text-white sm:p-8">
                    <div className="absolute -right-16 -top-16 size-48 rounded-full border-25 border-white/10" />
                    <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-white/5" />

                    <div className="relative z-10 w-full">
                        <Skeleton className="mb-5 size-11 rounded-xl bg-white/20" />

                        <Skeleton className="h-8 w-40 rounded-lg bg-white/20" />
                        <Skeleton className="mt-2 h-8 w-32 rounded-lg bg-white/20" />
                        <Skeleton className="mt-2 h-8 w-48 rounded-lg bg-white/20" />

                        <div className="mt-4 space-y-2">
                            <Skeleton className="h-4 w-full bg-white/20" />
                            <Skeleton className="h-4 w-5/6 bg-white/20" />
                        </div>

                        <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5">
                            <Skeleton className="size-5 rounded-full bg-white/20" />
                            <Skeleton className="h-4 w-56 bg-white/20" />
                        </div>
                    </div>
                </div>

                {/* Event Form */}
                <div className="flex flex-col justify-center p-5 sm:p-8">
                    <div className="mb-5">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="mt-3 h-7 w-44 rounded-lg" />
                        <Skeleton className="mt-3 h-4 w-64 max-w-full" />
                    </div>

                    <div className="w-full space-y-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="space-y-2">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-10 w-full rounded-lg" />
                                {index === 3 && <Skeleton className="h-3 w-56" />}
                            </div>
                        ))}

                        <Skeleton className="mt-5 h-11 w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
