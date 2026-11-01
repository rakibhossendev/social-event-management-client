export interface UserFormDataType {
    name: string;
    email: string;
    image: string;
    password: string;
    confirm: string;
}
export interface SignInDataType {
    email: string;
    password: string;
}

export interface EventDataType {
    _id: string
    title: string
    description: string
    eventType: string
    thumbnail: string
    location: string
    eventDate: string
    email: string
}

export interface EventResponseType {
    success: false;
    message: string;
    data: EventDataType[]
    error: {
        code: string
    }
}

export interface CreateEventType {
    _id: string
    title: string
    description: string
    eventType: string
    thumbnail: string
    location: string
    eventDate: string
}

