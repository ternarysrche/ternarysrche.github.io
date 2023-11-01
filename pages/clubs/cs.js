import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { SiGithub, SiDevpost } from "react-icons/si";
import meeting from "../../public/cs/meet.png"
import csmeeting from "../../public/cs/csmeeting.jpg"
import csp from "../../public/cs/csp.png"
import { Icon, InlineIcon } from '@iconify/react';
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate justify-center items-center bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
        <h1 className="text-5xl font-bold text-center pt-10 dark:text-white">BIF Computer Science Club</h1> 
        <h1 className="text-3xl font-medium text-center mt-2 text-gray-600 dark:text-gray-300">Materials</h1> 
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Computer Science Club</h2>
        <div class="grid columns-1 space-y-3 justify-center">

            {/* what does it do
            who is it for  */}
            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200">
            <Image src={meeting} alt="Tsunami Blades" className="h-full object-fill object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Online Club Time! (4/23/2021)</h5>
            
            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div>
            <a href = "https://codeforces.com/group/4hyDxvc2aO/contests" className = "flex items-center justify-center hover:opacity-75 hover:underline">
            <p className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mr-2">View our Past contests </p>
            <Icon icon="websymbol:link" className="text-2xl" inline={true} />
            </a>
            </div>
            

            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200 justify-center">
            <Image src={csmeeting} alt="Tsunami Blades" className="h-full object-cover mx-auto object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Back In-Person! (2/8/2022)</h5>

            <div>
            <hr class="thin my-10 bg-gray-400 border-0 dark:bg-gray-300"/>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/simulations" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Simulations</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">HTML5 simulations that make physics concepts more tangible for students.</p>
            <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">Built with the BIF Computer Science Club</p>
            </a>
            </Link>
            </div>

            <div>
            <hr className="my-10 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <div className="mt-10 h-min max-w-3xl overflow-hidden rounded-lg bg-gray-200 justify-center">
            <Image src={csp} alt="Tsunami Blades" className="h-full object-cover mx-auto object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">The club placard I designed for this year</h5>
                      {/* <Link href="/clubs/nhs" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-green-100 to-cyan-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF National Honors Society</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Our school's first ever NHS Chapter began last December. I thought the chapter was a great opportunity to collaborate for the most high-achieving students at our school to give back to the community, both in and out of school. I ran for President and won the election. In the past year we've done a variety of projects:</p>
            <ul className = "ml-4 list-disc"><li>School food drive for the Alameda County Community Food Bank, 2022</li>
            <li>2022 STEM Summer Camp, 2022</li>
            <li>Raising awareness about trash and recycling, 2022</li>
            <li>Community Garden, 2022</li>
            <li>Created wchool-wide book club, 2022</li>
            </ul>
            <b className='text-lg underline'>Click to view some photos of our chapter!</b>
            </a>
            </Link> */}
            <div className = "text-center justify-center">
                  <a className = "btn" href = "/clubs">← Go Back</a>
                  </div>
            </div>

           

            
        </div>
    </div>
    );
}