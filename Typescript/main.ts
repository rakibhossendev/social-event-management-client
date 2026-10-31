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

export interface EventCommonDataType {
    _id: string
    title: string
    description: string
    eventType: string
    thumbnail: string
    location: string
    eventDate: string
    email: string
}