import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { SiGithub, SiDevpost } from "react-icons/si";
import math from "../../public/math/math.jpg"
import mathp from "../../public/math/mathp.png"
import { Icon, InlineIcon } from '@iconify/react';
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate bg-white justify-center items-center">
        <h1 className="text-5xl font-bold text-center mt-10">BIF Math Club</h1> 
        <h1 className="text-3xl font-medium text-center mt-2 text-gray-600">Materials</h1> 
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Math Club</h2>
        <div class="grid columns-1 space-y-3 justify-center">

            {/* what does it do
            who is it for  */}
            <div className="mt-10 h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/clubBot" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-3 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-teal-100 to-purple-100">
            <h5 class="mb-1 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Math Club Bot</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">In order to better engage club members in online Math Club, my fellow student advisor and I created a Discord Bot that would post questions, accept answer submissions, and announce correct solutions and their authors in a public chat.</p>
            <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">Built with @switchpiggy</p>
            </a>
            </Link>
            </div>


            <div>
            <hr class="thin my-10 bg-gray-400 border-0 dark:bg-gray-300"/>
            </div>
            <div className="max-w-3xl px-10">
            <div className="h-min overflow-hidden rounded-lg bg-gray-200">
            <Image src={math} alt="Tsunami Blades" className="h-full object-fill object-center" />
            </div>
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Club Time! (3/2/2022)</h5>
            
            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div>
            <a href = "https://drive.google.com/drive/u/2/folders/1sHGLCZmJvgxXs33WAQJ5hT-tBgN2-sMF" className = "flex items-center justify-center hover:opacity-75 hover:underline">
            <p className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mr-2">View our 2022 BIF Math Tournament Papers!</p>
            <Icon icon="websymbol:link" className="text-2xl" inline={true} />
            </a>
            </div>
            

            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200 justify-center">
            <Image src={mathp} alt="Tsunami Blades" className="h-full object-cover mx-auto object-center" />
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