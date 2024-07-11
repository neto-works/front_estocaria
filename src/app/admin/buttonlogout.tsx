"use client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
    const route = useRouter();

    const handleLogout = async () => {
        await signOut();
    }

    return <button className="bg-green" onClick={handleLogout}>Logout</button>
}