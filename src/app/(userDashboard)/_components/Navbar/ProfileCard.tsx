import { CalendarDays, ChevronRight, LogOut, PlusCircle, Users } from "lucide-react";
import Link from "next/link";


interface ProfileDataProps {
    handleSignOut: () => void
}

export default function ProfileCard({ handleSignOut }: ProfileDataProps) {

    return (
        <div className="mt-3 w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Dashboard Menu
            </h3>

            <div className="space-y-2">
                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-card-foreground transition-all hover:bg-secondary hover:text-primary"
                >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <PlusCircle className="size-5" />
                    </div>
                    <span>Create Event</span>
                    <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>

                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-card-foreground transition-all hover:bg-secondary hover:text-primary"
                >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <CalendarDays className="size-5" />
                    </div>
                    <span>Manage Events</span>
                    <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>

                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-card-foreground transition-all hover:bg-secondary hover:text-primary"
                >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Users className="size-5" />
                    </div>
                    <span>Joined Events</span>
                    <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
            </div>

            <div className="my-4 border-t border-border" />

            <button
                type="button"
                onClick={handleSignOut}
                className="group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[var(--logout)] transition-all hover:bg-[var(--logout)]/10"
            >
                <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--logout)]/10 text-[var(--logout)] transition-colors group-hover:bg-[var(--logout)] group-hover:text-white">
                    <LogOut className="size-5" />
                </div>
                <span>Sign Out</span>
                <ChevronRight className="ml-auto size-4 opacity-60 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
    )
}