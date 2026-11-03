"use client";

import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import { UserDataType } from "../../../../../Typescript/main";



export default function NavbarAvatar({ userData }: {userData: UserDataType}) {
    const pathname = usePathname();

    return (
        <Avatar
            key={pathname}
            userData={userData}
        />
    );
}