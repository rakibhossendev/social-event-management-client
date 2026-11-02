'use client'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

import { Pencil, Save } from "lucide-react"
import { EventDataType } from "../../../../../Typescript/main"
import { getJWTTokenClient } from "@/lib/getJwtTokenClient"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface EditEventProps {
    eventData: EventDataType
}

const eventCategories = [ "Cleanup", "Plantation", "Donation", "Education", "Community Service", "Other" ]

export default function EditEvent({ eventData }: EditEventProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleEditEvent = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const getEditData = Object.fromEntries(formData.entries()) as unknown as EventDataType;

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/edit-event/${eventData._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                authorization: `Bearer ${await getJWTTokenClient()}`
            },
            body: JSON.stringify(getEditData)
        })
        const data = await response.json();

        if (!data.success) {
            alert(data.message);
            return
        }
        setOpen(false)
        alert(data.message);
    }

    return (
       <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                    <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="h-9 gap-2 cursor-pointer border-sky-200 bg-sky-50 px-3 text-sky-700 hover:bg-sky-600 hover:text-white"
                    >
                        <Pencil className="size-4 shrink-0" />
                        <span>Edit</span>
                    </Button>
                }
            />

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl">Edit Event</DialogTitle>
                    <DialogDescription>
                        Update your event information below.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleEditEvent}>
                    <div className="grid gap-4 py-2">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Event Title</Label>
                            <Input
                                id="title"
                                name="title"
                                defaultValue={eventData.title}
                                placeholder="Enter event title"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                defaultValue={eventData.description}
                                placeholder="Describe your event..."
                                rows={4}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="eventType">Event Category</Label>
                            <Select
                                name="eventType"
                                defaultValue={eventData.eventType}
                            >
                                <SelectTrigger id="eventType" className="w-full">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {eventCategories.map(category => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
                            <Input
                                id="thumbnail"
                                name="thumbnail"
                                type="url"
                                defaultValue={eventData.thumbnail}
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                name="location"
                                defaultValue={eventData.location}
                                placeholder="Enter event location"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="eventDate">Event Date</Label>
                            <Input
                                id="eventDate"
                                name="eventDate"
                                type="date"
                                defaultValue={eventData.eventDate?.slice(0, 10)}
                            />
                        </div>
                    </div>
                    <DialogFooter className="flex-row gap-2">
                        <DialogClose
                            render={
                                <Button type="button" variant="outline" className="flex-1">
                                    Cancel
                                </Button>
                            }
                        />
                        <Button type="submit" className="flex-1">
                            <Save className="mr-2 size-4" />
                            Save Changes
                        </Button>


                    </DialogFooter>
                </form>



            </DialogContent>
        </Dialog >
    )

}