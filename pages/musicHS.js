import { useState } from 'react'
import Navbar from "../components/Navbar";
import Link from "next/link"
import { SiGithub, SiDevpost } from "react-icons/si";
export default function Clubs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="isolate justify-center items-center">
        <Navbar />
        <h1 className="text-6xl font-bold text-center mt-10">Music</h1> 
        <h2 className="sr-only">Music</h2>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div class="grid columns-1 space-y-3 justify-center items-center">
        <h1 className="text-4xl font-medium text-center mt-5 text-gray-700 dark:text-gray-400">Covers</h1> 

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Wonder to Wonderland - Anson Seabra</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/wonderland.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">卷珠帘 - 霍尊</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/juan.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Jesus in LA - Alec Benjamin</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/jesus.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Crazier Things - Chelsea Cutler</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/upgraded.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Wildfire - Elijah Woods</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/wildfire.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            {/* <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Head in the Clouds - Hayd</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/head.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div> */}

            {/* <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Airplane Mode - Hayd</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/air.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Closure - Hayd</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/head.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div> */}

            {/* <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div> */}
            <br/><br/><br/>

            

        <h1 className="mt-10 text-4xl font-medium text-center mt-5 text-gray-700 dark:text-gray-400">Covers - Acapella</h1> 
            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Talking to the Moon - Bruno Mars</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/moon.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            
            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">The Misty Mountains Cold - The Hobbit</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/misty.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>
            
            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Producer Man - Lyn Lapid</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/producerMan.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>
            
            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Fly Me to the Moon - Frank Sinatra</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/fly.m4a" type="audio/x-m4a"/>
            Your browser does not support the audio tag.
            </audio>
            </div>
            
            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Golden Hour - JVKE</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/gold1.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>
            
            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            
            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">One Call Away - Charlie Puth</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/ynomrah.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>
            
            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            
            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Cups (song) - Anna Kendrick</h5>
            <div className = "mx-auto">
            <audio controls>
            <source src="/music/cups.mp3" type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
            </div>
            
            <br/><br/><br/>
            <h1 className="text-4xl font-medium text-center mt-5 text-gray-700 dark:text-gray-400">Video Performances</h1> 
            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Ave Maria - 3/20/2019</h5>
            <div className="mt-10 w-screen px-10 max-w-3xl ">
            <div class="aspect-w-16 aspect-h-9 mx-auto video-mask-box">
            <iframe src="https://youtube.com/embed/EXpa9cUuShk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>

            <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">I'll be Home for Christmas</h5>
            <div className="mt-10 w-screen px-10 max-w-3xl">
            <div class="aspect-w-16 aspect-h-9 mx-auto video-mask-box">
            <iframe src="https://youtube.com/embed/rw8njh78SJs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>

            {/* <div>
            <hr className="my-6 thin bg-gray-400 dark:bg-gray-300"/> 
            </div>

            <h5 class="mb-[10px] text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">Ombra Mai Fu</h5>
            <div className="mt-10 w-screen px-10 max-w-3xl">
            <div class="aspect-w-16 aspect-h-9 mx-auto video-mask-box">
            <iframe src="https://youtube.com/embed/40puzs7Kwi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div> */}
            
            <br/>
            <br/>
            {/* <h5 class="mt-20 mb-1 text-3xl italic font-normal tracking-tight text-gray-400 dark:text-white text-center">Currently Unavailable</h5> */}

        </div>
    </div>
    </div>
    );
}