import { useState } from 'react'
import Navbar from "../components/Navbar";
export default function Coding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
    <div className="isolate bg-white">
        <Navbar />
    <h1 className="text-6xl font-bold text-center py-10">Coding</h1> 
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <h2 className="sr-only">Coding Projects</h2>
        <div class="columns-1 gap-4 space-y-10 p-8">
            <div className="aspect-w-6 aspect-h-1 h-min w-full overflow-hidden rounded-3xl bg-gray-200">
                
            </div>
            <div className="aspect-w-6 aspect-h-1 h-min w-full overflow-hidden rounded-3xl bg-gray-200">
                
            </div>
            <div className="aspect-w-6 aspect-h-1 h-min w-full overflow-hidden rounded-3xl bg-gray-200">
                
            </div>
            <div className="aspect-w-6 aspect-h-1 h-min w-full overflow-hidden rounded-3xl bg-gray-200">
                
            </div>
        </div>
    </div>
    </div>
    );
}