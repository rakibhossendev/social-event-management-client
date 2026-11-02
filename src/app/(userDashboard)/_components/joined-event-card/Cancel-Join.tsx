'use client'
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { EventDataType } from "../../../../../Typescript/main";
import { getJWTTokenClient } from "@/lib/getJwtTokenClient";
import { useRouter } from "next/navigation";

interface CancelEventProps{
    event: EventDataType
}

export default function CancelJoinEvent({event}: CancelEventProps) {
    const router = useRouter();
    const handleCancelJoin =  async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/cancel-event/${event._id}`,{
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
        router.refresh()
    }

    return (
        <Button
            onClick={async () => await handleCancelJoin()}
            size="sm"
            variant="outline"
            className="flex-1 cursor-pointer border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 sm:flex-none"
        >
            <XCircle size={16} />
            Cancel Join
        </Button>
    )
}