import Image from "next/image"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import { max } from "date-fns";
// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

// export async function getStaticPaths() {
// //   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

const stuffs = {
  "avalog.png": {
        "title": "Avalog",
        "info": "Sticker Design — printed in bulk on matte vinyl",
        "text": "A typgography design for a sticker used to advertise for the MIT Logarhythms Fall Concert — Avalog (based off of Avatar - The Last Airbender).",
        "width": 1161,
        "height": 1920
    },
    "tsunamiBlades.jpg": {
        "title": "Tsunami Blades",
        "info": "Xacto Blades, Goblet, Altered Shadow",
        "text": "From car crashes to divorces, the effects of alcohol have shaped many relationships in my extended family. Seeking to express the dangers of alcoholism, I selected a wine goblet as my canvas and carefully assembled Xacto blades to create a fluid-like pattern. Modeled off the iconic “Under the Wave of Kanagawa” print by Hokusai (as silhouetted in the shadow), the liquid slosh of razor blades symbolizes the volatile harmful effects of alcohol on relationships and families.",
        "width": 1800,
        "height": 2400
    },
  "hillsideMecca.jpg": {
    "title": "Hillside Mecca",
    "info": "Photography, Digital Application",
    "text": "With the rampant developments of the technological revolution, we often don’t appreciate the beauty of the natural world around us. All too often we’re distracted from the present moment, fixated on our phones, tablets, and watches. Two photos taken from the same position, fourteen months apart, portray the dramatic effects of the California drought and the dry desolation of a once lush oasis. Yet in the mecca of the past, we were too busy and distracted to appreciate the beauty that stood right in front of us — a jewel we might never see again. As global warming continues to wreak havoc, we should cherish nature that is too often taken for granted — before it’s too late.",
    "width": 1800,
    "height": 1350
  },
  "monteCristo.jpg": {
    "title": "Monte Cristo Bust",
    "info": "Charcoal",
    "text":"",
    "width": 1200,
    "height": 1471
  },
  "installationBeacon.jpg": {
    "title": "Installation Beacon",
    "info": "Mason Jars, Fallen Tree",
    "text": "Trees — they’re humble beings, silently shading our streets and weaving the air we breathe. Deforestation and pollution are slowly tearing away at the habitats that sustain human development. Clean air and comfortable weather may soon be relics of the past. I lined up mason jars, an airtight vessel often used for preservation, atop a fallen tree, emphasizing the preciousness of the air that we too often take for granted. Who knows, perhaps one day the air inside these sealed mason jars could be worth more than gold.",
    "width": 1800,
    "height": 900
  },
  // "whitewashed.jpg": {
  //   "title": "Whitewashed",
  //   "info": "Acrylic Spray on Squash Racket",
  //   "text": "Squash is — two players, confined in a box, violently swinging rackets at a black rubber ball, hoping their opponent can’t recover the shot — just like America. The founding, self-evident truth of our nation, that all men are created equal, is all too often torn apart by strict dichotomies — Democrat and Republican, rich and poor, LGBTQ+ and heterosexual, Black and white. After the death of George Floyd, I observed hate, judgment, and disgust directed towards the Black Lives Matter protests, claiming that they were too chaotic, that protesters were not COVID-aware, and that the protests were hurting their cause. But the BLM movement, like the Black Power movement, is African Americans pushed to the brink. They’ve tried diplomatic advocacy and civil discourse, yet nothing has changed. They’re forced into desperate action to preserve the innocent lives and well beings of their sons and daughters, brothers, and fathers. By spray painting a Black Power Fist onto a squash racket’s strings, I demonstrate the superficial judgements and chaotic misunderstandings that have arisen from the impact of social uprisings."
  // },
  "visionLost.jpg": {
    "title": "Vision Lost",
    "info": "Binoculars Frozen in Ice",
    "text": 'Climate change, heightening global conflicts, and increased risk of nuclear war continue to bring the living Earth closer and closer to the brink of destruction. Yet, humankind struggles to come together and face such pressing problems, and instead, we opt to engage in petty conflicts and arguments with each other. The collective vision that we require remains as inaccessible and elusive as a pair of binoculars frozen in a block of ice. We must thaw the ice, grab the binoculars, begin to understand where we’re headed, and create change.',
    "width": 1800,
    "height": 1014
  },
  "parched.jpg": {
    "title": "Parched",
    "info": "Sunlight Deprived Grass",
    "text": "In the midst of a record-breaking drought, California’s flora and fauna have been stolen of their most vital resource. As global warming continues to worsen, wildfires, droughts, hurricanes, floods, and other natural disasters will only become more and more prevalent. I sought to express through emulation the dire manner with which we are affecting the natural world around us through pollution and exploitation. Over the course of a month, I watered our yellowed grass around my cardboard stencil spelling out “H2O.” This piece exemplifies our parched earth’s desperate need for water as well as the Earth’s desperate need for human conservation and protection.",
    "width": 1200,
    "height": 900
  },
  "sanitizedCommunication.mp4": {
    "title": "Sanitized Communication",
    "info": "Starbucks Coffee Cups, Sensors, LED",
    "text": "After lockdown forced billions to isolate themselves, communications were reduced to a laptop screen. School classes, job interviews, playdates, coffee shop meetings — activities we thought could only exist face to face were somehow suddenly moved online. Using ultrasonic vision sensors and the flashing LED lights, I wanted to demonstrate the reduction of our everyday interactions to the glowing pixels on our devices. Our physical connections, represented by the touch sensor underneath the LEDs, became less tactile and more abstract.",
    "width": 3840,
    "height": 2160
  },
  // "kettle.jpg": {
  //   "title": "Kettle",
  //   "info": "Charcoal",
  //   "text": ""
  // },
  "revealed.mov": {
    "title": "Revealed",
    "info": "Under a Skylight",
    "text": "Everyone has to some degree internalized the expectations set upon them, whether it’s expectations from their parents, peers, society, or social media. We let these expectations, many of which are unreasonable, crowd our mind space and consume our happiness and energy. At one point, we must clear the clutter, recognizing what expectations are reasonable and helpful and wiping away everything else. But life is an ever-going cycle, and those unreasonable, draining expectations may soon come pouring back in. This video was shot from inside my home under our skylight.",
    "width": 1280,
    "height": 720
  },
  "destination.mov": {
    "title": "Destination Devastation",
    "info": "Projection",
    "text": "With NASA’s recently successful DART Mission, humankind has proven its ability to not only influence the workings of nature on Earth but also divert the movement and trajectories of astral bodies in the heavens above. Yet with this growing and untethered power, we must be ever-more cautious in how we utilize our advanced tools. We must continue technological growth while treasuring the earth beneath us. Without keeping such perspective in mind, we will face consequences, some of which have already been displayed in the California droughts and forest fires.",
    "width": 1280,
    "height": 720
  },
  "mankinds.mov": {
    "title": "Mankind's Future Past",
    "info": "Computer Monitors on the Beach",
    "text": "Over the past few decades, technology has advanced at a never-before-seen pace. Like a snake shedding skin, the general public has quickly abandoned so many of the once state-of-the-art technologies — floppy disks, pagers, cassette-tapes, VHS tapes, the list goes on. Playing on the largest monitor is a scene from “2001: A Space Odyssey,” where prehistoric humans crowd around a black monolith — a symbol of rapid human evolutionary development. As technological advancement continues to accelerate, we can only guess what our world will look like tomorrow. Even the personal computers and laptops that have become so ubiquitous in our world today may soon be an artifact of the past. (Shortly after I took this shot, a large wave whisked away three of the four monitors, leaving only the largest monitor in the sand.)",
    "width": 1280,
    "height": 852
  },
  "leavinghome.mp4": {
    "title": "Leaving Home",
    "info": "Shadows Cast on Magnolia Leaves",
    "text": "Parents constantly seek to nurture, guide, protect, and communicate with their children. Yet, as kids slowly grow and mature, they often show signs of rebellion, detachment, independence, and lack of communication. Often, parents are faced with one-word verbal responses, unanswered phone calls, and unread text messages. The two colors of the magnolia leaf signify this dichotomy — the caring, nurturing green, and the unresponsive, dry orange. Yet ultimately, no matter how different the colors, they are still two parts bound together on a single leaf — much like how parents and children are bound together by unspoken love and appreciation.",
    "width": 720,
    "height": 1280
  }
}

export default function Art() {
    const router = useRouter();
    const { id } = router.query
    
    // if (!isReady) {
    //     return null;
    // }
    // else {
        const { isReady } = useRouter();

   if (!isReady) {
       return null; // Or any loading component
   }
        var name = id.slice(0, id.indexOf('.'));
        console.log(name)
        if (id.slice(-3) == 'jpg' || id.slice(-3) == 'png') {
          return (
            <div className="isolate">
              <ThemeSwitcher />
              <div className="relative min-h-screen pb-20 pt-24 flex flex-col md:flex-row overflow-auto">
                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0">
                  <div
                    className="relative w-[80vw] md:w-[40vw]"
                    style={{
                      // width: stuffs[id]["width"] > stuffs[id]["height"] ? "40vw" : "40vw",
                      aspectRatio: `${stuffs[id]["width"]} / ${stuffs[id]["height"]}`,
                    }}
                  >
                    <CldImage
                      src={name + "_full"}
                      className="block rounded-[10px] object-contain w-full h-full"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={true}
                      alt={name}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-full md:h-[80vh] md:items-center md:justify-center content-center px-10 md:px-24 grid place-items-center align-middle mt-8 md:mt-0">
                  <h1 className="mt text-4xl font-medium text-gray-900 text-center dark:text-white">
                    {stuffs[id]["title"]}
                  </h1>
                  <h3 className="mt-1 text-xl text-gray-700 text-center dark:text-gray-400">
                    {stuffs[id]["info"]}
                  </h3>
                  <p className="tracking-tight mt-5 text-gray-700 text-center dark:text-gray-300 max-h-80 overflow-auto leading-[1.4rem]">
                    {stuffs[id]["text"]}
                  </p>
                  <a className="btn" href="/design">
                    ←
                  </a>
                </div>
              </div>
              {/* <div className="absolute bottom-4 text-lg w-screen italic font-light text-center text-gray-500">
                (Large images may take a while to load)
              </div> */}
            </div>
          );
          }
          else {
            return (
              <div className="isolate">
              <ThemeSwitcher />
              <div className="relative min-h-screen pb-20 pt-24 flex flex-col md:flex-row overflow-auto">
                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0">
                <div
                  className="relative w-full max-w-[80vw] md:max-w-[40vw]"
                  style={{
                  aspectRatio: `${stuffs[id]["width"]} / ${stuffs[id]["height"]}`,
                  }}
                >
                  <CldVideoPlayer
                  src={name + "_full"}
                  className="block rounded-[10px] w-full h-full"
                  width={stuffs[id]["width"]}
                  height={stuffs[id]["height"]}
                  loop={true}
                  playsinline={true}
                  autoplay={true}
                  controls={false}
                  alt={name}
                  />
                </div>
                </div>
                <div className="w-full md:w-1/2 h-auto md:h-[80vh] flex flex-col items-center justify-center px-10 md:px-24 mt-8 md:mt-0">
                <h1 className="mt text-4xl font-medium text-gray-900 text-center dark:text-white">
                  {stuffs[id]["title"]}
                </h1>
                <h3 className="mt-1 text-xl text-gray-700 text-center dark:text-gray-400">
                  {stuffs[id]["info"]}
                </h3>
                <p
                  className="tracking-tight mt-5 text-gray-700 text-center dark:text-gray-300 overflow-auto leading-[1.4rem]"
                  style={{ minHeight: "100px" }}
                >
                  {stuffs[id]["text"]}
                </p>
                <a className="btn" href="/design">
                  ←
                </a>
                </div>
              </div>
              {/* <div className="absolute bottom-4 text-lg w-screen italic font-light text-center text-gray-500">
                (Videos may take a while to load)
              </div> */}
              </div>
            );
          }
    // }
    
      
      // <Layout>
      //   <Head>
      //     <title>{postData.title}</title>
      //   </Head>
      //   <article>
      //     <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      //     <div className={utilStyles.lightText}>
      //       <Date dateString={postData.date} />
      //     </div>
      //     <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      //   </article>
      // </Layout>
  }