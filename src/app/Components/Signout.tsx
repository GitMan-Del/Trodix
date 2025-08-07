"use client"
import React from "react"
import { signOut } from "next-auth/react"
 
export function SignOut() {
  return <button className="text-red-600" onClick={() => signOut( { redirectTo: "/" })}>Sign Out</button>
}