import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from "../components/Navbar";
import hillsideMecca from "../public/images/hillsideMecca_thumb.jpeg"
import tsunamiBlades from "../public/images/tsunamiBlades_thumb.jpg"
import visionLost from "../public/images/visionLost_thumb.jpeg"
// import whitewashed from "../public/images/whitewashed.jpg"
import parched from "../public/images/parched_thumb.jpeg"
import monteCristo from "../public/images/monteCristo_thumb.jpeg"
// import kettle from "../public/images/kettle.jpg"
// import objectsFromLife from "../public/images/objectsFromLife_thumb.jpeg"
import installationBeacon from "../public/images/installationBeacon.jpg"
import Link from "next/link"

// import { getSortedPostsData } from '../lib/posts';


// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
export default function Art() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate bg-gradient-to-tr from-indigo-50 to-white dark:from-[#1e1b4b] dark:to-black">
      <Navbar />
      {/* <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
  <div class="h-min w-full bg-red-400">
    <img class="object-cover" src="https://source.unsplash.com/random/700x400/?subway" alt="subway" />
  </div>
  <div class="h-min w-full bg-blue-400">
    <img class="object-cover" src="https://source.unsplash.com/random/?city" alt="city" />
  </div>
  <div class="h-min w-full bg-orange-400">
    <img class="object-cover" src="https://source.unsplash.com/random/700x300/?fruit" alt="fruit" />
  </div>
  <div class="h-min w-full bg-green-400">
    <img class="object-cover" src="https://source.unsplash.com/random/700x500/?forest" alt="forest" />
  </div>
  <div class="h-min w-full bg-yellow-400">
    <img class="object-cover" src="https://source.unsplash.com/random/?sunset" alt="sunset" />
  </div>
  <div class="h-min w-full bg-lime-400">
    <img class="object-cover" src="https://source.unsplash.com/random/?desert" alt="desert" />
  </div>
  <div class="h-min w-full bg-fuchsia-400">
    <img class="object-cover" src="https://source.unsplash.com/random/700x250/?ocean" alt="ocean" />
  </div>
  <div class="h-min w-full bg-teal-400">
    <img class="object-cover" src="https://source.unsplash.com/random/700x300/?clouds" alt="clouds" />
  </div>
</div> */}
<div className="">
  <h1 className="text-6xl font-bold text-center py-10">Art</h1> 
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <h2 className="sr-only">Art Pieces</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
        

          <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/monteCristo.jpg" legacyBehavior> 
            <a>
              <Image src={monteCristo} alt="Monte Cristo" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a></Link>
            </div>
          
            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/destination.mov" legacyBehavior> 
            <a>
            <video autoplay="autoplay" style={{ width: '800px', height: 'auto'}} className = "video-mask-box hover:opacity-75" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo">
                <source src="/images/destination_thumb.mov" />
              </video>
                </a></Link>
            </div>


          <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/tsunamiBlades.jpg" legacyBehavior> 
            <a>
            <Image src={tsunamiBlades} alt="Tsunami Blades" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a> 
            </Link>
          </div>





          


            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/donanobis.mp4" legacyBehavior> 
            <a>
            <video autoplay="autoplay" style={{ width: '800px', height: 'auto'}} className = "video-mask-box hover:opacity-75" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo">
                <source src="/images/donanobis_thumb.mov" />
              </video>
                </a></Link>
            </div>

          <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
          <Link href="/art/hillsideMecca.jpg" legacyBehavior> 
            <a>
            <Image src={hillsideMecca} alt="Hillside Mecca" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
          </a></Link>
          </div>



          <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
          <Link href="/art/visionLost.jpg" legacyBehavior> 
            <a>
            <Image src={visionLost} alt="Vision Lost" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
          </a></Link>
          </div>



          {/* <a href="/art/parched.jpg" className="group w-full h-min"> */}
          <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
          <Link href="/art/parched.jpg" legacyBehavior> 
            <a>
              <Image src={parched} alt="Parched" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a></Link>
            </div>


            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/babies.mp4" legacyBehavior> 
            <a>
            <video autoplay="autoplay" style={{ width: '800px', height: 'auto'}} className = "video-mask-box hover:opacity-75" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo">
                  <source src="/images/babies_thumb.mov" />
                </video>
            </a></Link>
            </div>
          {/* <a href="/art/parched.jpg" className="group w-full h-min"> */}
          {/* <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
          <Link href="/art/whitewashed.jpg" legacyBehavior> 
            <a>
              <Image src={whitewashed} alt="Whitewashed" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a></Link>
            </div> */}
            {/* <h3 className="mt-4 text-sm text-gray-700">Acrylic Spray on Squash Racket</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">Whitewashed</p>
          </a> */}
          {/* <a href="/art/monteCristo.jpg" className=" w-full h-mingroup"> */}



            
            {/* <h3 className="mt-4 text-sm text-gray-700">Charcoal</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">Monte Cristo Bust</p>
          </a> */}


          <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/sanitizedCommunication.mp4" legacyBehavior> 
            <a>
            <video autoplay="autoplay" style={{ width: '800px', height: 'auto'}} className = "video-mask-box hover:opacity-75" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo">

            {/* <video autoPlay muted loop style={{ width: '800px', height: 'auto'}} > */}
                  <source src="/images/sanitizedCommunication_thumb.mov" />
                </video>
            </a></Link>
            </div>



            {/* <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/objectsFromLife.jpg" legacyBehavior> 
            <a>
            <Image src={objectsFromLife} alt="Object From Life" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a></Link>
            </div> */}



            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/revealed.mov" legacyBehavior> 
            <a>
            <video autoplay="autoplay" style={{ width: '800px', height: 'auto'}} className = "video-mask-box hover:opacity-75" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo">
                <source src="/images/revealed_thumb.mov" />
              </video>
                </a></Link>
            </div>




            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/mankinds.mov" legacyBehavior> 
            <a>
            <video autoplay="autoplay" style={{ width: '800px', height: 'auto'}} className = "video-mask-box hover:opacity-75" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo">
                <source src="/images/mankinds_thumb.mov" />
              </video>
                </a></Link>
            </div>


            <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/installationBeacon.jpg" legacyBehavior> 
            <a>
            <Image src={installationBeacon} alt="Installation Beacon" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a></Link>
            </div>


            

            {/* <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
            <Link href="/art/kettle.jpg" legacyBehavior> 
            <a>
            <Image src={kettle} alt="Kettle" placeholder='blur' className="h-full w-full object-cover object-center hover:opacity-75" />
            </a></Link>
            </div> */}

        </div>
      </div>
    </div>
      
    </div>
  );
}
{/* <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section classNameName={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section classNameName={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 classNameName={utilStyles.headingLg}>Blog</h2>
        <ul classNameName={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li classNameName={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              <small classNameName={utilStyles.lightText}>
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