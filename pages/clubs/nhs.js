import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { SiGithub, SiDevpost } from "react-icons/si";
import cardboard from "../../public/nhs/cardboard.jpg"
import foundation from "../../public/nhs/foundation.jpg"
import camp from "../../public/nhs/camp.png"
import droppings from "../../public/nhs/droppings.jpg"
import firstMeeting from "../../public/nhs/firstMeeting.jpg"
import team from "../../public/nhs/team.jpg"
import trash from "../../public/nhs/trash.jpg"
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate justify-center items-center bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
        <h1 className="text-5xl font-bold text-center pt-10 text-black dark:text-white">BIF National Honors Society</h1> 
        <h1 className="text-3xl font-medium text-center mt-2 text-gray-600 dark:text-gray-400">Photos</h1> 
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <div class="grid columns-1 space-y-3 justify-center items-center">

            {/* what does it do
            who is it for  */}
            <div className="mt-10 h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Image src={foundation} alt="Tsunami Blades" className="h-full max-w-lg object-cover object-center" />
          </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Laying the foundations of the planter boxes.</h5>
            <br/>
            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                <Image src={cardboard} alt="Tsunami Blades" className="h-full max-w-lg object-cover object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">It's me cardboarding up the planter box</h5>
            <br/>
            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                <Image src={droppings} alt="Tsunami Blades" className="h-full max-w-lg object-cover object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Lasagna gardening</h5>
            <br/>
            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                <Image src={team} alt="Tsunami Blades" className="h-full max-w-lg object-cover object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Planter box filled!</h5>
            <br/>
            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                <Image src={trash} alt="Tsunami Blades" className="h-full max-w-lg object-cover object-center" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">Trash & Recycling Awareness Presentations</h5>
            <br/>
            <div className="nhsImageContainer">
                <Image src={camp} layout="fill" className="h-min max-w-lg object-cover object-center group-hover:opacity-75 nhsImage" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">STEM Summer Camp 2022</h5>
            <br/>
            <div className="nhsImageContainer">
                <Image src={firstMeeting} layout="fill" className="h-min max-w-lg object-cover object-center group-hover:opacity-75 nhsImage" />
            </div>
            <h5 class="mb-1 text-xl italic font-normal tracking-tight text-gray-900 dark:text-white text-center">First meeting of new school year! WOO!</h5>
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