"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function UpComingEvents() {
    const pathname = usePathname();


    return (
        <div className="flex items-center gap-1">
            <Link
                href="/home"
                className={`relative rounded-md px-2 py-1.5 text-xs transition-colors duration-200
        after:absolute after:inset-x-2 after:bottom-1 after:h-px
        after:bg-primary after:transition-transform after:duration-300
        sm:px-3 sm:py-2 sm:text-sm
        sm:after:inset-x-3
        ${pathname === "/home"
                        ? "font-medium text-primary after:scale-x-100"
                        : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
                    }`}
            >
                <span className="sm:hidden">Events</span>
                <span className="hidden sm:inline">Upcoming Events</span>
            </Link>
        </div>
    )
}