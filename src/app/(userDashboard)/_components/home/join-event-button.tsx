'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { getJWTTokenClient } from "@/lib/getJwtTokenClient";
import { useState } from "react";
import { EventDataType, EventResponseType } from "../../../../../Typescript/main";


interface JoinEventProps{
    event: EventDataType
}

export default function JoinEvent({event}: JoinEventProps) {
    const [join,updateJoin] = useState<boolean>(false);

    const {data: session} = useSession();
    const handelJoinEvent = async () => {
        const postJoinEvent = {
            participateEmail: session?.user.email,
            ...event
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/join-event`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                authorization: `Bearer ${await getJWTTokenClient()}`
            },
            body: JSON.stringify({
                eventId: event._id,
                email: session?.user.email,
                postJoinEvent
            })
        })

        const data: EventResponseType = await response.json();

        if(!data.success){
            alert(data.message);
            return
        }
        alert(data.message)
        updateJoin(!join)
    }

    return (
        <Button onClick={async () => await handelJoinEvent()} className="w-full cursor-pointer gap-2">
            {join ? 'Cancel Join' : `Join Now`}
            <ArrowRight size={18} />
        </Button>

    )
}