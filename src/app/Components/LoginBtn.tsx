
"use client"

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button className="bg-white px-6 py-2 --border" onClick={() => signIn("google", { redirectTo: "/dashboard" })}>Get Started</button>
}
