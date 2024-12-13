import { useState } from 'react'
import Navbar from "../components/Navbar";
import Link from "next/link"
import { SiGithub, SiDevpost } from "react-icons/si";
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate justify-center items-center bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
        <Navbar />
    <h1 className="text-6xl font-bold text-center py-10">Clubs</h1> 
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Clubs</h2>
        <div class="grid columns-1 gap-4 space-y-4 p-8 justify-center items-center">

            {/* what does it do
            who is it for  */}
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/nhs" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF National Honors Society (2022-present)</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Our school's first ever NHS Chapter began in the December of 2022. I thought the chapter was a great opportunity to collaborate for the most high-achieving students at our school to give back to the community, both in and out of school. I ran for President and won the election. In the past two years we've done a variety of projects:</p>
            <ul className = "ml-4 list-disc"><li>School food drive for the Alameda County Community Food Bank, 2022</li>
            <li>2022 STEM Summer Camp</li>
            <li>Hosted canned food drive for the Alameda County Community Food Bank</li>
            <li>Built a school community garden</li>
            <li>Raised awareness about trash and recycling</li>
            <li>Painted a mural promoting inclusivity and diversity</li>
            </ul>
            <b className='text-lg underline'>Click to view some photos of our chapter!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/cs" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Computer Science Club (2020-present)</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">I started the BIF Computer Science club in 9th grade, right as school moved online. Having a student-run club was unprecedented at the time, and I worked hard to foster a collaborative coding community.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/math" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Math Club (2021-present)</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Motivated by parent and teacher inquiries as well as the smiles and A-ha moments on club members' faces, my friend and I launched math Club three months after I started the Computer Science Club.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/journalism" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Journalism Club (2021-present)</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">In 10th grade, I joined the newly established Journalism Club, finding it a great opportunity to contribute to a more cohesive school community. I'm currently a graphic designer as well as an editor-in-chief.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/physics" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Physics Club (2022-present)</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Recently, as I developed a stronger passion for physics, I founded the Physics Club, seeking to share the magical beauty of the subject.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>


            
        </div>
    </div>
    </div>
    );
}
