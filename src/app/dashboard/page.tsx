"use client";

import { redirect } from "next/navigation";
import Header from "../Components/Dashboard/Header";
import SideBar from "../Components/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { SignOut } from "../Components/Signout";
import { useState } from "react";
import CreateTradeForm from "../Components/Dashboard/CreateTradeForm";



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
                <Header onOpenForm={() => setisOpen(true)} />
                { isOpen ? (<CreateTradeForm />) : (
                <main className="flex-1 p-6">
                    {/* Dashboard content */}
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <SignOut />
                </main>
                )
              };
            </div>
        </div>
    );

}