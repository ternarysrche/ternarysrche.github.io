import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeSwitcher } from './ThemeSwitcher.js'

const navigation = [
  { name: 'Home', href: '/', lighthover: "text-sky-700", darkhover: "text-sky-400"},
  // { name: 'About Me', href: '/about' },
  { name: 'Art', href: '/art', lighthover: "text-sky-700", darkhover: "text-sky-400"},
  { name: 'Coding', href: '/coding', lighthover: "text-sky-700", darkhover: "text-sky-400"},
  { name: 'Clubs', href: '/clubs', lighthover: "text-sky-700", darkhover: "text-sky-400"},
  { name: 'Music', href: '/music', lighthover: "text-sky-700", darkhover: "text-sky-400"}
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const button = document.getElementById("darkButton");
  // if (button) {
  //   button.addEventListener("onClick", () => {
  //   // Add or remove the 'dark' class from the 'html' element.
  //   document.documentElement.classList.toggle("dark");
  //   console.log("dark mode")
  //   });
  // }


  

  // TRYING TO IMPELEMENT DARK MODE
  
  
  ////////////////////////////////////////////////////
  
  return (
      <div className="px-6 pt-6 lg:px-8 z-10">
        
        {/* <Logo/> */}
        <div>
          <nav className="p-5 md:p-10 flex h-3 items-center justify-center justify-between space-x-1" aria-label="Global">
            
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md text-black dark:text-white duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open Navigation Menu</span>
                <Bars3Icon className="h-9 w-9 duration-200 hover:scale-110 text-black hover:text-blue-800 dark:text-gray-200 dark:hover:text-indigo-300" aria-hidden="true" />
              </button>
            </div>

            

            
              {/* <div className="flex lg:hidden pt-1 px-2 justify-center h-16" style={{width: '100%', height: '100%', position: 'relative'}}>
                    <a href="/">
                    <img src='/images/yellowPages5.png' width="2672px" height="332px" className = "mx-auto hover:opacity-60" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                    </a> 
            </div> */}
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:mb-4 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="px-1 lg:text-2xl font-semibold text-black dark:text-gray-200 hover:scale-110 active:scale-100 hover:text-blue-800 dark:hover:text-indigo-300 duration-200">
                  {item.name}
                </a>
              ))}
              
            </div>

            <div><ThemeSwitcher/></div>
            
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
              <div className="p-5 md:p-10 flex h-3 items-center justify-center justify-between space-x-1">
                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md text-black dark:text-white hover:text-gray-500 duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-9 w-9 duration-200 hover:scale-110 text-black hover:text-blue-800 dark:text-gray-200 dark:hover:text-indigo-300" aria-hidden="true" />
                  </button>
                </div>
                {/* <div className="flex lg:hidden pt-1 px-2 justify-center max-h-full" style={{width: '100%', height: '100%', position: 'relative'}}>
                    <a href="/">
                    <img src='/images/yellowPages5.png' width="2672px" height="332px" className = "mx-auto hover:opacity-60" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                    </a> 
            </div> */}
                
              </div>
              <div className="px-5 md:px-10 mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-2xl -mx-3 block rounded-lg py-4 px-3 font-semibold leading-7 text-black dark:text-white hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
  );
}
{/* <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <html>
        <head>
          <script src="https://unpkg.com/konva@8.3.13/konva.min.js"></script>
          <meta charset="utf-8" />
          <title>Konva Canvas Scrolling Drag Demo</title>
        </head>

        <body>
          <div id="container"></div>
          
        </body>
      </html>
      </section>
    </Layout> */}

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//       <div className="px-6 pt-6 lg:px-8">
//         <div>
//           <nav className="flex h-9 items-center justify-between" aria-label="Global">
//             <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Christopher Chen's Website</span>
//               </a>
//             </div>
//             <div className="flex lg:hidden">
//               <button
//                 type="button"
//                 className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
//               {navigation.map((item) => (
//                 <a key={item.name} href={item.href} className="text-xl font-semibold text-gray-900 hover:text-gray-900">
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//             <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              
//             </div>
//           </nav>
//           <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//             <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
//               <div className="flex h-9 items-center justify-between">
//                 <div className="flex">
//                   <a href="#" className="-m-1.5 p-1.5">
                   
//                   </a>
//                 </div>
//                 <div className="flex">
//                   <button
//                     type="button"
//                     className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-6 flow-root">
//                 <div className="-my-6 divide-y divide-gray-500/10">
//                   <div className="space-y-2 py-6">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className="text-xl -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Dialog.Panel>
//           </Dialog>
//         </div>
//       </div>
//   );
// }
// {/* <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link legacyBehavior href={`/posts/${id}`}><a>{title}</a></Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//       <html>
//         <head>
//           <script src="https://unpkg.com/konva@8.3.13/konva.min.js"></script>
//           <meta charset="utf-8" />
//           <title>Konva Canvas Scrolling Drag Demo</title>
//         </head>

//         <body>
//           <div id="container"></div>
          
//         </body>
//       </html>
//       </section>
//     </Layout> */}