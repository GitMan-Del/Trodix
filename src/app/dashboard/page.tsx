"use client";

import { redirect } from "next/navigation";
import Header from "../Components/Dashboard/Header";
import SideBar from "../Components/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { SignOut } from "../Components/Signout";
import { useState } from "react";
import CreateTradeForm from "../Components/Dashboard/CreateTradeForm";
import DashboardCards from "../Components/Dashboard/DashboardCards";



export default function Dashboard() {

    const user = useSession()
    if (!user) {
        redirect('/')
    }

    const [isOpen , setisOpen] = useState(false);

  
    return(
        <div className="h-screen bg-[#F9FBFC] w-full flex relative">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Header setisOpen={() => setisOpen(true)} />
                <main className="flex-1 p-6 space-y-6">
                    {/* Dashboard content */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">Dashboard</h1>
                        <SignOut />
                    </div>
                    <DashboardCards />
                </main>

                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <button
                            aria-label="Închide overlay"
                            className="fixed inset-0 bg-black/30 backdrop-blur-[1px]"
                            onClick={() => setisOpen(false)}
                        />
                        <div className="relative z-10 w-full max-w-[600px] transition-all duration-200 ease-out">
                            <CreateTradeForm onClose={() => setisOpen(false)} onSuccess={() => setisOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}