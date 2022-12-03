import { useState } from 'react'
import Navbar from "../components/Navbar";
import Link from "next/link"
import { SiGithub, SiDevpost } from "react-icons/si";
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate bg-white justify-center items-center">
        <Navbar />
    <h1 className="text-6xl font-bold text-center py-10">Music</h1> 
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Music</h2>
        <div class="grid columns-1 gap-4 space-y-6 p-8 justify-center items-center">

            {/* what does it do
            who is it for  */}

            <h5 class="mt-20 mb-1 text-3xl italic font-normal tracking-tight text-gray-400 dark:text-white text-center">Currently Unavailable</h5>

        </div>
    </div>
    </div>
    );
}