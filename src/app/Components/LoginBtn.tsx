"use client";

import { signIn } from "next-auth/react";



export default function LoginBtn(){
    return <button className=" bg-white py-1 px-6 --border rounded-2xl text-sec text-sm" onClick={() => signIn("google")}>Get Started</button>
}