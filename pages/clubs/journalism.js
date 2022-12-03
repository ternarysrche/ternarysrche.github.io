import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { SiGithub, SiDevpost } from "react-icons/si";
import tryout from "../../public/journalism/tryout.jpg"
import jour from "../../public/journalism/jour.jpg"
import { Icon, InlineIcon } from '@iconify/react';
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate bg-white justify-center items-center">
        <h1 className="text-5xl font-bold text-center mt-10">BIF Journalism Club</h1> 
        <h1 className="text-3xl font-medium text-center mt-2 text-gray-600">Materials</h1> 
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Journalism Club</h2>
        <div class="grid columns-1 space-y-3 justify-center">

            {/* what does it do
            who is it for  */}
            
            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className = "mt-10">
            <a href = "https://issuu.com/bifyellowpages" className = "flex items-center justify-center hover:opacity-75 hover:underline">
            <p className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mr-2">View our past publications!</p>
            <Icon icon="websymbol:link" className="text-2xl" inline={true} />
            </a>
            </div>

            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="mt-10 max-w-3xl px-10">
            <div className="h-min overflow-hidden rounded-lg bg-gray-200">
            <Image src={tryout} alt="Tsunami Blades" className="h-full object-fill object-center" />
            </div>
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">The Journalism Club Tryouts (9/2/2022)</h5>
            
            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="max-w-3xl px-20">
            <div className="h-min overflow-hidden rounded-lg bg-gray-200">
            <Image src={jour} alt="Tsunami Blades" className="h-full object-fill object-center" />
            </div>
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Our First Newsprint Issue! (9/30/2022)</h5>
            
            {/* <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div> */}

           
            

            {/* <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200 justify-center">
            <Image src={mathp} alt="Tsunami Blades" className="h-full object-cover mx-auto object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">The club placard I designed for this year</h5> */}
            

            
            <div className = "text-center justify-center">
                  <a className = "btn" href = "/clubs">← Go Back</a>
                  </div>
            </div>

           

            
        </div>
    </div>
    );
}