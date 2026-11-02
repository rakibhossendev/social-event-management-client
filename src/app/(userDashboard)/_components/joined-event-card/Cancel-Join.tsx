'use client'
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { EventDataType } from "../../../../../Typescript/main";
import { useRouter } from "next/navigation";
import { cancelJoin } from "@/lib/cancel-event";


export default function CancelJoinEvent({event}: {event: EventDataType}) {
    const router = useRouter();
    const handleCancelJoin = async () => {
        await cancelJoin(event)
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