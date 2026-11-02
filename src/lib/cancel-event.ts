import { EventDataType } from "../../Typescript/main";
import { getJWTTokenClient } from "./getJwtTokenClient";

export const cancelJoin = async (event:  EventDataType) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/cancel-event/${event._id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${await getJWTTokenClient()}`
        }
    })
    const data = await response.json();
    if (!data.success) {
        alert(data.message);
        return
    }
    alert(data.message);
}