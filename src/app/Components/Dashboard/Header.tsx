"use client"

import Image from "next/image";
import { useSession } from "next-auth/react";


export default function Header ({setisOpen}: {setisOpen: () => void }) {

     const { data: session} = useSession();
     console.log("Session:", session);

    return(
        <div className="w-full h-[80px] max-h-[100px] bg-white border-b border-gray-200 flex items-center px-6 flex-row justify-between">
        
        <div className="bg-white border-gray-200 w-[300px] h-full flex items-center">
            <div className="relative w-full">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    {/* Search icon (Cu icon de search) */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="#767676" strokeWidth="2"/>
                        <line x1="14.1213" y1="14.1213" x2="18" y2="18" stroke="#767676" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>

        <div className="flex items-center gap-4">
            {/* Gift Icon */}
            <button aria-label="Gifts" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.07424 9.88889V9.88889C2.09371 9.88889 1.29883 9.09401 1.29883 8.11347V7.44444C1.29883 6.33988 2.19426 5.44444 3.29883 5.44444H9.2882M3.07424 9.88889V15C3.07424 16.1046 3.96968 17 5.07425 17H9.2882M3.07424 9.88889H15.5022M15.5022 9.88889V9.88889C16.4827 9.88889 17.2776 9.09401 17.2776 8.11347V7.44445C17.2776 6.33988 16.3822 5.44444 15.2776 5.44444H9.2882M15.5022 9.88889V15C15.5022 16.1046 14.6067 17 13.5022 17H9.2882M9.2882 17V5.44444M9.2882 5.44444V3.22222M9.2882 3.22222C9.2882 1.99492 8.2946 1 7.06893 1C5.84326 1 4.84966 1.99492 4.84966 3.22222C4.84966 4.44952 5.84326 5.44444 7.06893 5.44444M9.2882 3.22222C9.2882 1.99492 10.2818 1 11.5075 1C12.7331 1 13.7267 1.99492 13.7267 3.22222C13.7267 4.44952 12.7331 5.44444 11.5075 5.44444" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* Notifications Icon */}
            <button onClick={setisOpen}  aria-label="Notifications" className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.24986 3.22222C9.55995 3.22222 11.4327 5.21207 11.4327 7.66667V9.65742C11.4327 10.0928 11.5831 10.5131 11.8553 10.8385L12.9224 12.1142C13.6418 12.974 13.0673 14.3333 11.9846 14.3333H2.51511C1.43237 14.3333 0.857896 12.974 1.57722 12.1142L2.64441 10.8385C2.91664 10.5131 3.06702 10.0928 3.06702 9.65742L3.06704 7.66667C3.06704 5.21207 4.93975 3.22222 7.24986 3.22222ZM7.24986 3.22222V1M6.41321 17C6.41321 17 7.24984 18 8.24852 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Notification dot */}
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

              {/* Create Icon */}
              <button aria-label="Create Trade" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.21533 9H12.2074M9.21135 6V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.21106 17C13.6235 17 17.2004 13.4183 17.2004 9C17.2004 4.58172 13.6235 1 9.21106 1C4.79865 1 1.22168 4.58172 1.22168 9C1.22168 13.4183 4.79865 17 9.21106 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                    <Image
                        src={session?.user?.image ?? "/default-avatar.png"}
                        alt="Profile Image"
                        width={100}
                        height={100}
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        priority
                    />
                </div>
                {session ? (
                    
                    <div className="hidden sm:block">
                    <div className="text-sm font-semibold text-gray-900">{session?.user?.name}</div>
                    <div className="text-xs text-gray-500">{session?.user?.email}</div>
                </div>
                ) : (
                    <>
                    <div className="flex flex-col gap-3">
                    <h1 className="text-sm font-semibold text-gray-900">User not found</h1>
                    <p className="text-xs text-gray-500">No data...</p>
                    </div>
                    </>
                )
            } 
            </div>
        </div>
     </div>
    );
}