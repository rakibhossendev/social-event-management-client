"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function UpComingEvents() {
    const pathname = usePathname();


    return (
        <div className="hidden items-center gap-1 md:flex">
            <Link
                href="/home"
                className={`relative rounded-md px-3 py-2 text-sm transition-colors duration-200
        after:absolute after:inset-x-3 after:bottom-1 after:h-px
        after:bg-primary after:transition-transform after:duration-300
        ${pathname === "/home"
                        ? "font-medium text-primary after:scale-x-100"
                        : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
                    }`}
            >
                Upcoming Events
            </Link>
        </div>
    )
}