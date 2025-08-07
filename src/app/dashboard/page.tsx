"use client";

import { redirect } from "next/navigation";
import Header from "../Components/Dashboard/Header";
import SideBar from "../Components/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { SignOut } from "../Components/Signout";



export default function Dashboard() {

    const user = useSession()
    if (!user) {
        redirect('/')
    }
        
    return(
        <div className="h-screen bg-[#F9FBFC] w-full flex">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6">
                    {/* Dashboard content */}
                    <h1 className="text-2xl font-semibold ">Dashboard</h1>
                    <SignOut />
                </main>
            </div>
        </div>
    );

}