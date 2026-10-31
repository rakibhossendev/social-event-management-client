"use client";

import Link from "next/link";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiBars3, HiXMark } from "react-icons/hi2";


const links = [{ label: "Upcoming Events", href: "#" }]

export default function LoginAndTheme() {

    const [ open, setOpen ] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div>

            <div className="flex items-center gap-2">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="grid size-9 place-items-center rounded-full text-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-90"
                >
                    <MdDarkMode className="size-5 dark:hidden" />
                    <MdLightMode className="hidden size-5 dark:block" />
                </button>

                <Link
                    href="/sign-in"
                    className="hidden rounded-full bg-login px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95 md:inline-block"
                >
                    Login
                </Link>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className="grid size-9 place-items-center rounded-full text-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-90 md:hidden"
                >
                    {open ? <HiXMark className="size-5" /> : <HiBars3 className="size-5" />}
                </button>
            </div>

            <div
                className={`grid transition-all duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 pb-4">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/sign-in"
                            onClick={() => setOpen(false)}
                            className="mt-1 rounded-full bg-login px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}