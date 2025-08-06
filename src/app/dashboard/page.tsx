"use client";

import Header from "../Components/Dashboard/Header";
import SideBar from "../Components/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Dacă utilizatorul nu este autentificat, redirecționează la pagina principală
        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

    // Afișează loading în timp ce se verifică sesiunea
    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    // Dacă utilizatorul nu este autentificat, nu afișa dashboard-ul
    if (status === "unauthenticated") {
        return null; // Componentă goală în timp ce se face redirect
    }
    return(
        <div className="h-screen bg-[#F9FBFC] w-full flex">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6">
                    {/* Dashboard content */}
                    <h1 className="text-2xl font-semibold ">Dashboard</h1>
                </main>
            </div>
        </div>
    );
}