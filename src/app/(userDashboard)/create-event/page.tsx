'use client'
import {
    FieldSet,
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
    CalendarPlus,
    Heart,
    ArrowRight,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const eventCategories = [ "Cleanup", "Plantation", "Donation", "Education", "Community Service", "Other" ]

export default function CreateEvent() {
    const { data: session } = useSession();
    const router = useRouter();

    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(
        today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const handleAddEvent = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const getEventData = Object.fromEntries(formData.entries());

        const postEventData = {
            email: session?.user.email,
            ...getEventData
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/add-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postEventData),
        });

        const status = await response.json();

        if (status.success) {
            alert("Event added successfully");
            router.push("/home")
        }

    }


    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background px-4 py-8 sm:py-10">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl md:grid-cols-2">

                {/* Left Banner */}
                <div className="relative flex min-h-60 flex-col justify-center overflow-hidden bg-primary p-6 text-white sm:p-8">
                    <div className="absolute -right-16 -top-16 size-48 rounded-full border-25 border-white/10" />
                    <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-white/5" />

                    <div className="relative z-10">
                        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-white/15">
                            <CalendarPlus className="size-5" />
                        </div>

                        <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
                            Create an
                            <br />
                            Event &
                            <br />
                            <span className="text-green-200">Make an Impact.</span>
                        </h1>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                            Bring people together for meaningful activities. Create an event,
                            invite your community, and make a positive difference.
                        </p>

                        <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5">
                            <Heart className="size-5 text-red-200" />
                            <span className="text-sm font-medium">
                                Create. Connect. Make a Difference.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Event Form */}
                <div className="flex flex-col justify-center p-5 sm:p-8">
                    <div className="mb-5">
                        <span className="text-sm font-semibold text-primary">
                            ORGANIZE AN EVENT
                        </span>

                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                            Create Event
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Fill in the details to create your community event.
                        </p>
                    </div>

                    <FieldSet className="w-full border-0 p-0">
                        <form onSubmit={handleAddEvent}>
                            <FieldGroup className="gap-3">

                                <Field>
                                    <FieldLabel htmlFor="title">Event Title</FieldLabel>
                                    <Input
                                        id="title"
                                        type="text"
                                        name="title"
                                        placeholder="e.g. Jashore City Cleanup"
                                        required
                                        className="h-10"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="description">Event Description</FieldLabel>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Describe your event, its purpose and activities..."
                                        required
                                        className="min-h-24 resize-y"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="eventType">Event Type</FieldLabel>
                                    <Select name="eventType" required>
                                        <SelectTrigger id="eventType" className="h-10 w-full">
                                            <SelectValue placeholder="Select event type" />
                                        </SelectTrigger>
                                        <SelectContent>

                                            {eventCategories.map((item, index) => <SelectItem key={index} value="cleanup">{item}</SelectItem>)}

                                        </SelectContent>
                                    </Select>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="image">Thumbnail Image URL</FieldLabel>
                                    <Input
                                        id="image"
                                        type="url"
                                        name="image"
                                        placeholder="https://example.com/event-image.jpg"
                                        required
                                        className="h-10"
                                    />
                                    <FieldDescription>
                                        Add a clear image that represents your event.
                                    </FieldDescription>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="location">Event Location</FieldLabel>
                                    <Input
                                        id="location"
                                        type="text"
                                        name="location"
                                        placeholder="e.g. Jashore Central Shaheed Minar"
                                        required
                                        className="h-10"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="date">Event Date</FieldLabel>
                                    <Input
                                        id="date"
                                        type="date"
                                        name="date"
                                        required
                                        className="h-10"
                                        min={minDate}
                                    />
                                </Field>

                            </FieldGroup>

                            <Button
                                type="submit"
                                className="mt-5 h-11 w-full bg-primary font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                            >
                                <CalendarPlus className="mr-2 size-4" />
                                Create Event
                                <ArrowRight className="ml-auto size-4" />
                            </Button>
                        </form>
                    </FieldSet>
                </div>
            </div>
        </section>
    );
}