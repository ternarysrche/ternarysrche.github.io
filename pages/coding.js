import { useState } from 'react'
import Navbar from "../components/Navbar";
import Link from "next/link"
export default function Coding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
    <div className="isolate bg-white justify-center items-center">
        <Navbar />
    <h1 className="text-6xl font-bold text-center py-10">Coding</h1> 
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <h2 className="sr-only">Coding Projects</h2>
        <div class="grid columns-1 gap-4 space-y-6 p-8 justify-center items-center">

        

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/roverPathfinding" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-orange-100 to-red-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rover Pathfinding</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">In elementary school, inspired by the Curiosity Rover, I created my own *very interesting* pathfinding algorithm using the Python Turtle library.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/vocabApp" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-blue-100 to-purple-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vocab App</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">My grandparents were planning to take the US Citizenship test and I decided to create a vocab app for them to practice their English vocabulary.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/reminders" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-green-100 to-cyan-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reminders</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Seeing my parents working long hours at their desks and knowing the detrimental effects of sitting too long, I created a program to encourage some healthy sitting habits.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/rocketPayloadDelivery" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-rose-100 to-purple-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rocket Payload Delivery</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Inspired by the successful SpaceX rocket launches and landings, I created my own simulation of delivering a payload to the International Space Station.</p>
            </a>
            </Link>
            </div>
            
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/scienceBowlGenerator" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-slate-100 to-blue-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Science Bowl Generator</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Preparing for the Science Bowl, I created my own Science Bowl problem-generating software which allows for full customization. The software generates a problem sheet as well as an answer sheet for the user.</p>
            </a>
            </Link>
            </div>
                
            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/turtle" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-lime-100 to-green-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turtle Game</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">What do you do after you get sorta kinda experienced in programming? <b>You make games of course!!</b> This game stemmed off of the Rover Pathfinding program, essentially your brain is now the pathfinding algorithm!</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/bezier" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-pink-100 to-indigo-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bezier</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">After watching a video on animation and Bezier curves on Khan Academy, I created my own simple yet colorful curve. </p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/ticTacToe" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-blue-100 to-emerald-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tic Tac Toe</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Having finished all my assignments in CS class, I created a Tic Tac Toe game and challenged my classmates to Tic Tac Toe duels.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/connect4" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-red-100 to-yellow-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect 4</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">I wanted to step up my game developing skills, so I created a remix of the popular game Connect 4.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/calculator" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-blue-100 to-lime-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculator</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Who wants to use their computer's calculator, when you can create your own in Python Turtle?</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/maze" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-gray-100 to-purple-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maze Generator</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Having gotten into competitive programming, I realized that mazes were essentially just a single depth first search algorithm that carves out the path to the end point. I created this maze generator as a proof of concept.</p>
            </a>
            </Link>
            </div>

            <div className="h-min w-full overflow-visible justify-center items-center">
            <Link href="/coding/forum" legacyBehavior> 
            <a  class="block max-w-3xl px-6 py-5 bg-white border border-gray-200 rounded-3xl shadow-md hover:opacity-75 bg-gradient-to-tr from-red-100 to-gray-100">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIF Forum</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">As the COVID-19 Pandemic moved school online, I created a forum website for my schoomates to more easily get homework help.</p>
            </a>
            </Link>
            </div>

            </div>
        </div>
    </div>
    );
}