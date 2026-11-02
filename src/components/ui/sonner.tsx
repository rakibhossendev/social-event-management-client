
"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
    return (
        <Sonner
            position="top-right"
            duration={4000}
            visibleToasts={4}
            closeButton
            richColors={false}
            toastOptions={{
                classNames: {
                    toast: "mac-toast",
                    title: "mac-toast-title",
                    description: "mac-toast-description",
                    closeButton: "mac-toast-close",
                    actionButton: "mac-toast-action",
                    cancelButton: "mac-toast-cancel",
                },
            }}
            {...props}
        />
    );
}
