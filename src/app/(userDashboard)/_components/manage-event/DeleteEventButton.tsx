'use client'

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { EventDataType } from "../../../../../Typescript/main";
import { getJWTTokenClient } from "@/lib/getJwtTokenClient";
import { useRouter } from "next/navigation";


interface DeleteEventProps{
    event: EventDataType
}

export default function DeleteEvent({event}: DeleteEventProps) {
    const router = useRouter();

    const handleDeleteEvent = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/delete-event/${event._id}`,{
            method: "DELETE",
            headers: {
                authorization: `Bearer ${await getJWTTokenClient()}`
            }
        })
        const data = await response.json();

        if(!data.success){
            alert(data.message);
            return
        }
        alert(data.message);
        router.push("/manage-event")

    }
    return (
        <Button
            onClick={async () => await handleDeleteEvent()}
            type="button"
            className="h-10 cursor-pointer gap-1.5 rounded-lg border border-red-200 bg-delete px-2 text-sm font-semibold text-red-600 shadow-none transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-95 dark:border-red-900 dark:text-red-400"
        >
            <Trash2 className="size-4 shrink-0" />
            <span>Delete</span>
        </Button>
    )
}