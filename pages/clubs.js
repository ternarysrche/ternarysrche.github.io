import { useState } from 'react'
import Navbar from "../components/Navbar";
import Link from "next/link"
import { SiGithub, SiDevpost } from "react-icons/si";
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate bg-white justify-center items-center">
        <Navbar />
    <h1 className="text-6xl font-bold text-center py-10">Clubs</h1> 
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Clubs</h2>
        <div class="grid columns-1 gap-4 space-y-6 p-8 justify-center items-center">

            {/* what does it do
            who is it for  */}
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/nhs" legacyBehavior> 
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
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/cs" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-green-100 to-cyan-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Computer Science Club</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">I started the BIF Computer Science club in 9th grade, right as school moved online. Having a student-run club was unprecedented at the time, and I worked hard to foster a collaborative coding community. I'm ecstatic to say our membership has hit 30+ today with 5 student advisors! This club has not only become the community I dreamed of, but has also pioneered other students at my school to start student-run clubs of their own. When I established the Computer Science Club in 9th grade, the club guide had only 9 club listings. This year, the number of club listings had tripled to 27 on the guide.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/math" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-green-100 to-cyan-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Math Club</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Motivated by parent and teacher inquiries as well as the smiles and A-ha moments on club members' faces, my friend and I launched math Club three months after I started the Computer Science Club.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/journalism" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-green-100 to-cyan-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Journalism Club</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">In 10th grade, I joined the newly established Journalism Club, finding it a great opportunity to contribute to a more cohesive school community. I have a reputation of falling asleep in class on the day of the newspaper publication because even if it meant getting an hour of sleep at night, I would make sure the newspaper was of the highest quality. I advanced to co-editor-in-chief at the end of sophomore year, and I helped migrate the newspaper from A4 to Newsprint. I am currently the main graphic designer as well as an editor-in-chief.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/clubs/physics" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-green-100 to-cyan-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Physics Club</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Recently, as I developed a stronger passion for physics, I founded the Physics Club, and I am happily bonding with the 15+ fellow physics enthusiasts.</p>
            <b className='text-lg underline'>Click to view materials!</b>
            </a>
            </Link>
            </div>


            
        </div>
    </div>
    </div>
    );
}