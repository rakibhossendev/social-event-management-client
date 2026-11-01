'use client'

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { Users } from "lucide-react";
import { EventCommonDataType, ResponseType } from "../../../../../Typescript/main";
import { getJWTTokenClient } from "@/lib/getJwtTokenClient";
import { useState } from "react";

interface JoinEventProps {
    eventData: EventCommonDataType
}

const JoinEventButton = ({ eventData }: JoinEventProps) => {
    const [join,updateJoin] = useState<boolean>(false);

    const { data: session } = useSession()
    const handleJoinEvent = async () => {
        const postJoinEvent = {
            participateEmail: session?.user.email,
            ...eventData
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/join-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${await getJWTTokenClient()}`
            },
            body: JSON.stringify({
                eventId: eventData._id,
                email: session?.user.email,
                postJoinEvent
            })
        })
        const responseData: ResponseType = await response.json();
        if(!responseData.success){
            alert(responseData.message);
            return
        }
        alert(responseData.message);
        updateJoin(!join)
    }

    return (
        <Button
            onClick={async () => await handleJoinEvent()}
            type="button"
            className="h-10 cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-95"
        >
            <Users className="size-4 shrink-0" />
            <span>{join ? "Cancel Join" : `Join Event`}</span>
        </Button>

    );
};

export default JoinEventButton;