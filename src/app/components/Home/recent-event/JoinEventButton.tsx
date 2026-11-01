'use client'

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { Users } from "lucide-react";
import { EventCommonDataType } from "../../../../../Typescript/main";

interface JoinEventProps{
    eventData: EventCommonDataType
}

const JoinEventButton = ({eventData}: JoinEventProps) => {
    const {data: session} = useSession()
    const handleJoinEvent = async () => {
        const postJoinEvent = {
            participateEmail: session?.user.email,
            ...eventData
        }
        if(eventData.email == session?.user.email){
            alert("This event is yours");
            return
        }
        
        console.log(postJoinEvent)
    }

    return (
        <Button  
            onClick={async () => await handleJoinEvent()}
            type="button"
            className="h-10 cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-95"
        >
            <Users className="size-4 shrink-0" />
            <span>Join Event</span>
        </Button>

    );
};

export default JoinEventButton;