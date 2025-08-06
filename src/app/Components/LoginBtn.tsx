"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginBtn(){
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <button className="bg-white py-1 px-6 --border rounded-2xl text-sec text-sm" disabled>
                Loading...
            </button>
        );
    }

    if (session) {
        return (
            <button 
                className="bg-red-500 hover:bg-red-600 py-1 px-6 rounded-2xl text-white text-sm transition-colors" 
                onClick={() => signOut({ callbackUrl: "/" })}
            >
                Logout
            </button>
        );
    }

    return (
        <button 
            className="bg-white py-1 px-6 --border rounded-2xl text-sec text-sm hover:bg-gray-50 transition-colors" 
            onClick={() => signIn("google")}
        >
            Get Started
        </button>
    );
}