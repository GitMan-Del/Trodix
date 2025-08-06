import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
    return(
        <div className="max-w-md w-[280px] bg-white flex flex-col py-4 h-screen border-r border-gray-200">
            {/* Header */}
            <div className="flex items-center gap-2 px-6 mb-8">
                <Image src="/logo.svg" alt="logo" width={30} height={30} priority />
                <h1 className="text-xl font-protest-strike text-blue-600">
                    <Link href="/">TORDIX</Link>
                </h1> 
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4">
                {/* GENERAL Section */}
                <div className="mb-6">
                    <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">
                        GENERAL
                    </h3>
                    <div className="space-y-1">
                        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M11.3125 1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H11.3125M11.3125 1H5.6875M11.3125 1C11.3125 1 12.25 4.75 12.25 8.5C12.25 12.25 11.3125 16 11.3125 16M5.6875 1H3C1.89543 1 1 1.89543 1 3V14C1 15.1046 1.89543 16 3 16H5.6875M5.6875 1C5.6875 1 4.75 4.75 4.75 8.5C4.75 12.25 5.6875 16 5.6875 16M5.6875 16H11.3125M1 11.3125C1 11.3125 1.87877 11.5301 3.15071 11.7486C4.57567 11.9933 6.53783 12.25 8.5 12.25C10.4622 12.25 12.4243 11.9933 13.8493 11.7486C15.1212 11.5301 16 11.3125 16 11.3125M1 5.6875L3.15071 5.25141C4.57567 5.00667 6.53783 4.75 8.5 4.75C10.4622 4.75 12.4243 5.00667 13.8493 5.25141L16 5.6875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Dashboard</span>
                        </Link>
                        
                        <Link href="/trades" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M8.5 16H4C2.34315 16 1 14.6569 1 13V4C1 2.34315 2.34315 1 4 1H13C14.6569 1 16 2.34315 16 4V8.5M8.5 16V11.5C8.5 9.84315 9.84315 8.5 11.5 8.5H16M8.5 16L16 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Trades</span>
                        </Link>
                    </div>
                </div>

                {/* TOOLS Section */}
                <div className="mb-6">
                    <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">
                        TOOLS
                    </h3>
                    <div className="space-y-1">
                        <Link href="/calculator" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M16 12H14.3333M1 12H2.66667M14.3333 11V1H2.66667V11M14.3333 11H2.66667M14.3333 11V12M2.66667 11V12M14.3333 12H2.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Calculator</span>
                        </Link>
                        
                        <Link href="/gallery" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M13.1875 16L14.0013 15.9995C15.1054 15.9987 16 15.1035 16 13.9995V3.00306C16 1.89867 15.1049 1.00332 14.0005 1.00306L8.52767 1.00177L3.00364 1.00047C1.89923 1.00021 1.00365 1.89519 1.00317 2.99961L1 10.3737M13.1875 16H3.0026C1.89859 16 1.00339 15.1054 1.0026 14.0014L1 10.3737M13.1875 16L6.16014 8.19108C5.39364 7.33933 4.06964 7.30445 3.25935 8.11465L1 10.3737M13.1875 6.62414C13.1875 7.65956 12.348 8.49893 11.3125 8.49893C10.277 8.49893 9.43749 7.65956 9.43749 6.62414C9.43749 5.58872 10.277 4.74934 11.3125 4.74934C12.348 4.74934 13.1875 5.58872 13.1875 6.62414Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Gallery</span>
                        </Link>
                        
                        <Link href="/market-news" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M3.5 8.42857C3.44373 8.42857 3.38404 8.42857 3.3216 8.42857C2.03951 8.42857 1 7.38923 1 6.10714V6.10714C1 4.82505 2.03934 3.78571 3.32143 3.78571H3.5M3.5 8.42857V8.42857C3.02106 8.42857 2.61424 8.77907 2.54339 9.25274L1.98451 12.9893C1.9049 13.5215 2.31715 14 2.8553 14V14C3.23915 14 3.57877 13.7513 3.69467 13.3854L5.16667 8.73809M3.5 8.42857C3.50002 6.84207 3.5 3.78571 3.5 3.78571M3.5 8.42857L8.5 9.35714M3.5 3.78571L8.5 2.85714M8.5 2.85714L11.8333 1V11.2143L8.5 9.35714M8.5 2.85714V9.35714M14.3333 5.64286H16M14.3333 1.92857L16 1M14.3333 9.35714L16 10.2857" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Market news</span>
                            <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                BETA
                            </span>
                        </Link>
                    </div>
                </div>

                {/* SUPPORT Section */}
                <div className="mb-6">
                    <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">
                        SUPPORT
                    </h3>
                    <div className="space-y-1">
                        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.1667 2.09308C10.1667 1.48939 9.67728 1 9.07358 1H7.92642C7.32272 1 6.83333 1.48939 6.83333 2.09308V2.3073C6.83333 2.66381 6.59406 2.97354 6.2648 3.11024V3.11024C5.93542 3.247 5.5519 3.19488 5.29971 2.94269L5.06917 2.71215C4.58381 2.22679 3.7969 2.22679 3.31155 2.71215L2.71214 3.31155C2.22679 3.7969 2.22679 4.58382 2.71214 5.06917L2.94269 5.29972C3.19488 5.5519 3.247 5.93542 3.11024 6.2648V6.2648C2.97354 6.59406 2.66381 6.83333 2.3073 6.83333H2.09308C1.48939 6.83333 1 7.32272 1 7.92642V9.07358C1 9.67728 1.48939 10.1667 2.09308 10.1667H2.43314C2.715 10.1667 2.96055 10.3549 3.06291 10.6176V10.6176C3.16127 10.8699 3.11438 11.1589 2.92285 11.3504L2.65753 11.6157C2.20233 12.0709 2.20233 12.8089 2.65753 13.2641L3.46157 14.0682C3.86406 14.4707 4.51663 14.4707 4.91912 14.0682L4.95621 14.0311C5.26956 13.7177 5.74988 13.6648 6.15559 13.8431V13.8431C6.54591 14.0146 6.83333 14.3841 6.83333 14.8104V14.9069C6.83333 15.5106 7.32272 16 7.92642 16H9.07358C9.67728 16 10.1667 15.5106 10.1667 14.9069V14.6927C10.1667 14.3362 10.4059 14.0265 10.7352 13.8898V13.8898C11.0646 13.753 11.4481 13.8051 11.7003 14.0573L11.7729 14.1299C12.1413 14.4983 12.7386 14.4983 13.107 14.1299L14.1299 13.107C14.4983 12.7386 14.4983 12.1413 14.1299 11.7729L14.0573 11.7003C13.8051 11.4481 13.753 11.0646 13.8898 10.7352V10.7352C14.0265 10.4059 14.3362 10.1667 14.6927 10.1667H14.9069C15.5106 10.1667 16 9.67728 16 9.07358V7.92642C16 7.32272 15.5106 6.83333 14.9069 6.83333H14.8104C14.3841 6.83333 14.0146 6.54591 13.8431 6.15559V6.15559C13.6648 5.74988 13.7177 5.26956 14.0311 4.95621L14.0682 4.91912C14.4707 4.51664 14.4707 3.86408 14.0682 3.46159L13.2641 2.65754C12.8089 2.20234 12.0709 2.20234 11.6157 2.65754L11.3504 2.92285C11.1589 3.11438 10.8699 3.16127 10.6176 3.06291V3.06291C10.3549 2.96055 10.1667 2.715 10.1667 2.43314V2.09308ZM8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="currentColor" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Settings</span>
                        </Link>
                        
                        <Link href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M8.50748 10.1667V8.5C8.50748 8.5 11 8.5 11 6.83333C11 5.16667 10.1742 4.33333 8.50748 4.33333C6.84082 4.33333 6 5.16667 6 6.83333M8.5 12.6667H8.50748M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium">Help</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Bottom Section - Trading Account */}
            <div className="px-4 mb-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                            #1
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Trading Account</div>
                            <div className="text-sm text-gray-500">Account 001</div>
                        </div>
                        <div className="ml-auto">
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-5">
                                    <path d="M11 6L6 1L1 6M11 14L6 19L1 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}