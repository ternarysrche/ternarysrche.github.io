import { useState } from 'react'

import { CldImage, CldVideoPlayer } from 'next-cloudinary';

import Navbar from "../components/Navbar";
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
      <div className="">
        <h1 className="text-6xl font-bold text-center py-10">Design</h1>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Design Portfolio</h2>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">

                {/* ## DESTINATION DEVASTATION */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200 relative">
                  <Link href="/art/destination.mov" legacyBehavior> 
                    <a>
                      <CldVideoPlayer
                        width="640"
                        height="361"
                        src="destination_thumb"
                        loop={true}
                        muted={true}
                        playsinline={true}
                        autoplay={true}
                        controls={false}
                        className="hover:opacity-75 cursor-pointer pointer-events-none"
                        id="destination"
                      />
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-25 cursor-pointer"
                        style={{ zIndex: 10 }}
                        tabIndex={-1}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## TSUNAMI BLADES */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                  <Link href="/art/tsunamiBlades.jpg" legacyBehavior> 
                    <a>
                      <CldImage
                        src="tsunamiBlades_thumb"
                        className="hover:opacity-75"
                        width="600"
                        height="800"
                        crop={{
                          type: 'auto',
                          source: true
                        }}
                      />
                    </a> 
                  </Link>
                </div>

                {/* ## HILLSIDE MECCA */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                  <Link href="/art/hillsideMecca.jpg" legacyBehavior> 
                    <a >
                      <CldImage
                        src="hillsideMecca_thumb"
                        className="hover:opacity-75"
                        width="600"
                        height="450"
                        crop={{
                          type: 'auto',
                          source: true
                        }}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## VISION LOST */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                  <Link href="/art/visionLost.jpg" legacyBehavior> 
                    <a>
                      <CldImage
                        src="visionLost_thumb"
                        className="hover:opacity-75"
                        width="600"
                        height="338"
                        crop={{
                          type: 'auto',
                          source: true
                        }}
                      />
                    </a>
                  </Link>
                </div>


                {/* ## PARCHED */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                  <Link href="/art/parched.jpg" legacyBehavior> 
                    <a>
                      <CldImage
                        src="parched_thumb"
                        className="hover:opacity-75"
                        width="600"
                        height="450"
                        crop={{
                          type: 'auto',
                          source: true
                        }}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## AVALOG */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200 flex items-stretch">
                  <Link href="/art/avalog.png" legacyBehavior> 
                    <a className="w-full h-full block">
                      <CldImage
                        src="avalog_full"
                        className="hover:opacity-75 object-cover w-full h-full"
                        width="387"
                        height="640"
                        crop={{
                          type: 'auto',
                          source: true
                        }}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## SANITIZED COMMUNICATION */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200 relative">
                  <Link href="/art/sanitizedCommunication.mp4" legacyBehavior> 
                    <a>
                      <CldVideoPlayer
                        width="640"
                        height="361"
                        src="sanitizedCommunication_thumb"
                        loop={true}
                        muted={true}
                        playsinline={true}
                        autoplay={true}
                        controls={false}
                        className="hover:opacity-75 cursor-pointer pointer-events-none"
                        id="sanitizedCommunication"
                      />
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-25 cursor-pointer"
                        style={{ zIndex: 10 }}
                        tabIndex={-1}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## REVEALED */}
                <div className="w-full overflow-hidden rounded-lg bg-gray-200 relative">
                  <Link href="/art/revealed.mov" legacyBehavior>
                  <a>
                    <CldVideoPlayer
                      width="640"
                      height="361"
                      src="revealed_thumb"
                      loop={true}
                      muted={true}
                      playsinline={true}
                      autoplay={true}
                      controls={false}
                      className="hover:opacity-75 cursor-pointer pointer-events-none"
                      id="revealed"
                    />
                    <span
                      className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-25 cursor-pointer"
                      style={{ zIndex: 10 }}
                      tabIndex={-1}
                    />
                  </a>
                  </Link>
                </div>
                        
              <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                <Link href="/art/monteCristo.jpg" legacyBehavior> 
                <a>
                  <CldImage
                  src="monteCristo_thumb"
                  className="hover:opacity-75"
                  width="600"
                  height="735"
                  crop={{
                    type: 'auto',
                    source: true
                  }}
                  />
                </a>
                </Link>
              </div>

              {/* ## MANKIND'S FUTURE PAST */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200 relative">
                  <Link href="/art/mankinds.mov" legacyBehavior> 
                    <a>
                      <CldVideoPlayer
                        width="640"
                        height="429"
                        src="mankinds_thumb"
                        loop={true}
                        muted={true}
                        playsinline={true}
                        autoplay={true}
                        controls={false}
                        className="hover:opacity-75 cursor-pointer pointer-events-none"
                        id="mankinds"
                      />
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-25 cursor-pointer"
                        style={{ zIndex: 10 }}
                        tabIndex={-1}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## LEAVING HOME */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200 relative">
                  <Link href="/art/leavinghome.mp4" legacyBehavior> 
                    <a>
                      <CldVideoPlayer
                        width="720"
                        height="1280"
                        src="leavinghome_thumb"
                        loop={true}
                        muted={true}
                        playsinline={true}
                        autoplay={true}
                        controls={false}
                        className="hover:opacity-75 cursor-pointer pointer-events-none"
                        id="leavinghome"
                      />
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-25 cursor-pointer"
                        style={{ zIndex: 10 }}
                        tabIndex={-1}
                      />
                    </a>
                  </Link>
                </div>

                {/* ## INSTALLATION BEACON */}
                <div className="h-min w-full overflow-hidden rounded-lg bg-gray-200">
                  <Link href="/art/installationBeacon.jpg" legacyBehavior> 
                    <a>
                      <CldImage
                        src="installationBeacon_thumb"
                        className="hover:opacity-75"
                        width="1800"
                        height="900"
                        crop={{
                          type: 'auto',
                          source: true
                        }}
                      />
                    </a>
                  </Link>
                </div>

        </div>
      </div>
    </div>
      
    </div>
  );
}