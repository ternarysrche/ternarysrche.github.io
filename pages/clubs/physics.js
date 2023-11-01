import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { SiGithub, SiDevpost } from "react-icons/si";
import carnage from "../../public/physics/carnage.jpg"
import lecture from "../../public/physics/lecture.png"
import physp from "../../public/physics/physicsp.png"
import { Icon, InlineIcon } from '@iconify/react';
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate justify-center items-center bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
        <h1 className="text-5xl font-bold text-center pt-10">BIF Physics Club</h1> 
        <h1 className="text-3xl font-medium text-center mt-2 text-gray-600 dark:text-gray-300">Materials</h1> 
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Physics Club</h2>
        <div class="grid columns-1 space-y-3 justify-center">

            {/* what does it do
            who is it for  */}

            {/* <div>
            <hr class="thin my-10 bg-gray-400 border-0 dark:bg-gray-300"/>
            </div> */}
            <div className="mt-10 max-w-3xl px-10">
            <div className="h-min overflow-hidden rounded-lg bg-gray-200">
            <Image src={carnage} alt="Tsunami Blades" className="h-full object-fill object-center" />
            </div>
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">The mathematical carnage after a tricky club problem (9/27/2022)</h5>
            
            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>
            <div className="mt-10 max-w-3xl px-20">
            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200 justify-center">
            <Image src={lecture} alt="Tsunami Blades" className="h-full object-cover mx-auto object-center" />
            </div>
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Lecture notes for the lesson on accelerated reference frames</h5>

            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200 justify-center">
            <Image src={physp} alt="Tsunami Blades" className="h-full object-cover mx-auto object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">The club placard I designed for this year</h5>
            

            
            <div className = "text-center justify-center">
                  <a className = "btn" href = "/clubs">← Go Back</a>
                  </div>
            </div>

           

            
        </div>
    </div>
    );
}