import { useState } from 'react'
import Navbar from "../components/Navbar";
import Link from "next/link"
import { SiGithub, SiDevpost } from "react-icons/si";
export default function Coding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
    <div className="isolate justify-center items-center bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
        <Navbar />
    <h1 className="text-6xl font-bold text-center pt-10">Coding</h1> 
    {/* <h5 class="mt-3 mb-2 text-xl font-light tracking-wide text-gray-500 dark:text-white text-center">Click on the projects to view materials</h5> */}

    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Coding Projects</h2>
        <div class="grid columns-1 gap-4 space-y-1 p-8 justify-center items-center">

            {/* what does it do
            who is it for  */}

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/simulations" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Simulations</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">HTML5 simulations that make physics concepts more tangible for students.</p>
            <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">Built with the BIF Computer Science Club</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/clearCloset" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Clear Closet</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">For the Citrohacks Hackathon, my team and I created a closet app for users to digitally keep track of what's in their closet. Using AI-generated tags, users can query their closet for specific styles and colors!</p>
            <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">Built with @maggie-j-liu and @dongliu0426</p>
            </a>
            </Link>  
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/moistureSensor" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wireless Moisture Sensor</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Over quarantine, my mom developed quite the garden in our backyard. To help her more effortlessly monitor plant soil health and optimize the growth of her plants, I created this wireless moisture sensor system.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/forum" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Forum Website</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">As the COVID-19 Pandemic moved school online, I created a forum website, hoping to make it easier for my schoolmates to get homework help.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/clubBot" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Math Club Bot</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">In order to better engage club members in online Math Club, my fellow student advisor and I created a Discord Bot that would post questions, accept answer submissions, and announce correct solutions and their authors in a public chat.</p>
            <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">Built with @switchpiggy</p>
            </a>
            </Link>
            </div>
            
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/dome" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DOME - Smart Thermostat</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">To create a smarter thermostat, I used Raspberry Pi and Python to detect brightness values from a photoresistor and moisture and temperature values from a DHT22 sensor to turn on or off humidifiers, heaters, and lights using smart plugs and servo motors. </p>
            <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">Built with @aidcarman</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/smartCushion" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smart Cushion</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Seeing my parents suffer from back pain, I created a seat cushion that haptically reminds the user to stand up from time to time. The user can select the interval of time using the LCD-button interface.</p>
            </a>
            </Link>  
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/reminders" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Healthy Sitting Habits Program</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Just a program to encourage some healthy sitting habits.</p>
            </a>
            </Link>
            </div>
            
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/scienceBowlGenerator" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Science Bowl Generator</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">In preparation for the Science Bowl, I created my own Science Bowl problem-generating software which allows for full customization. The software generates a problem sheet as well as an answer sheet for the user.</p>
            </a>
            </Link>
            </div>
            
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/vocabApp" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vocab App</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">My grandparents were planning to take the US Citizenship test, and I decided to create a vocab app for them to practice their English vocabulary.</p>
            </a>
            </Link>
            </div>


            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/roverPathfinding" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rover Pathfinding</h5>
            {/* <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Christopher Chen</h5> */}
            <p class="font-normal text-gray-700 dark:text-gray-400">In elementary school, inspired by the Curiosity Rover, I created my own *very interesting* pathfinding algorithm using the Python Turtle library.</p>
            </a>
            </Link>
            </div>
            
            















            <h1 className="text-5xl font-bold text-center py-10">Miscellaneous Projects</h1> 

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/rocketPayloadDelivery" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rocket Payload Delivery</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Inspired by the successful SpaceX rocket launches and landings, I created my own simulation of delivering a payload to the International Space Station.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/turtle" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turtle Game</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">What do you do after you get sorta kinda experienced in programming? <b>You make games of course!!</b> This game stemmed off of the Rover Pathfinding program, essentially your brain is now the pathfinding algorithm!</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/bezier" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bezier</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">After watching a video on animation and Bezier curves on Khan Academy, I created my own simple yet colorful curve. </p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/ticTacToe" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tic Tac Toe</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Having finished all my assignments in CS class, I created a Tic Tac Toe game and challenged my classmates to Tic Tac Toe duels.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/connect4" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect 4</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Wanting to step up my game developing skills, I created a remix of the popular game Connect 4.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/calculator" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculator</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Who wants to use a real calculator when you can create and use your own in Python Turtle?</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/maze" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maze Generator</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Having gotten into competitive programming, I realized that mazes were essentially just a single depth first search algorithm that carves out the path to the end point. I created this maze generator as a proof of concept.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/hangman" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 border-2 border-black rounded-3xl hover:shadow-xl opacity-80 shadow-none border-opacity-50 hover:opacity-100 hover:border-opacity-100 duration-200 active:shadow-none active:opacity-60 dark:hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.4)] dark:border-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hangman</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">There's nothing better than a good old game of Hangman. </p>
            </a>
            </Link>
            </div>

            </div>
        </div>
    </div>
    );
}