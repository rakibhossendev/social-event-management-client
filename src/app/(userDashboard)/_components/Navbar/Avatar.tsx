'use client'
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DefaultAvatarImage from "@/app/assets/avatar-placeholder.png"
import { useState } from "react";
import ProfileCard from "./ProfileCard";

interface AvatarDataProps {
    userData: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
    };
}

export default function Avatar({ userData }: AvatarDataProps) {
    const [ showProfileCard, showUpdateProfileCard ] = useState<boolean>(false);

    const handleShowProfileCard = () => {
        showUpdateProfileCard(!showProfileCard)
    }

    const router = useRouter();
    const handleSignOut = async () => {
        try {
            await signOut();
            alert("Logout Successfully!");
            showUpdateProfileCard(false)
            router.push("/");
            router.refresh();
        } catch (error) {
            console.log(`Error ${error}`)
        }
    }
    return (
        <div className="relative flex items-center gap-3">
            <button
                type="button"
                onClick={handleShowProfileCard}
                aria-expanded={showProfileCard}
                aria-label="Open profile menu"
                className="flex size-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <Image
                    src={userData.image || DefaultAvatarImage}
                    alt={userData.name || "User avatar"}
                    width={36}
                    height={36}
                    className="size-9 cursor-pointer rounded-full border border-border object-cover"
                />
            </button>

            <Button
                onClick={handleSignOut}
                className="hidden h-9 items-center gap-2 rounded-full bg-[var(--logout)] px-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--logout)]/90 hover:shadow-md active:scale-95 md:inline-flex"
            >
                <LogOut className="size-4" />
                Sign Out
            </Button>

            <div
                className={`absolute right-0 top-full z-50 w-[min(90vw,320px)] origin-top-right transition-all duration-200 ease-out ${showProfileCard
                        ? "visible translate-y-0 scale-100 opacity-100"
                        : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
                    }`}
            >
                <ProfileCard handleSignOut={handleSignOut} />
            </div>
        </div>
    );
}