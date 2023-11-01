import Image from "next/image"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
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
    "tsunamiBlades.jpg": {
        "title": "Tsunami Blades",
        "info": "Xacto Blades, Goblet, Altered Shadow",
        "text": "From car crashes to divorces, the effects of alcohol have shaped many relationships in my extended family. Seeking to express the dangers of alcoholism, I selected a wine goblet as my canvas and carefully assembled Xacto blades to create a fluid-like pattern. Modeled off the iconic “Under the Wave of Kanagawa” print by Hokusai (as silhouetted in the shadow), the liquid slosh of razor blades symbolizes the volatile harmful effects of alcohol on relationships and families."
    },
  "hillsideMecca.jpg": {
    "title": "Hillside Mecca",
    "info": "Photography, Digital Application",
    "text": "With the rampant developments of the technological revolution, we often don’t appreciate the beauty of the natural world around us. All too often we’re distracted from the present moment, fixated on our phones, tablets, and watches. Two photos taken from the same position, fourteen months apart, portray the dramatic effects of the California drought and the dry desolation of a once lush oasis. Yet in the mecca of the past, we were too busy and distracted to appreciate the beauty that stood right in front of us — a jewel we might never see again. As global warming continues to wreak havoc, we should cherish nature that is too often taken for granted — before it’s too late."
  },
  // "whitewashed.jpg": {
  //   "title": "Whitewashed",
  //   "info": "Acrylic Spray on Squash Racket",
  //   "text": "Squash is — two players, confined in a box, violently swinging rackets at a black rubber ball, hoping their opponent can’t recover the shot — just like America. The founding, self-evident truth of our nation, that all men are created equal, is all too often torn apart by strict dichotomies — Democrat and Republican, rich and poor, LGBTQ+ and heterosexual, Black and white. After the death of George Floyd, I observed hate, judgment, and disgust directed towards the Black Lives Matter protests, claiming that they were too chaotic, that protesters were not COVID-aware, and that the protests were hurting their cause. But the BLM movement, like the Black Power movement, is African Americans pushed to the brink. They’ve tried diplomatic advocacy and civil discourse, yet nothing has changed. They’re forced into desperate action to preserve the innocent lives and well beings of their sons and daughters, brothers, and fathers. By spray painting a Black Power Fist onto a squash racket’s strings, I demonstrate the superficial judgements and chaotic misunderstandings that have arisen from the impact of social uprisings."
  // },
  "visionLost.jpg": {
    "title": "Vision Lost",
    "info": "Binoculars Frozen in Ice",
    "text": 'Climate change, heightening global conflicts, and increased risk of nuclear war continue to bring the living Earth closer and closer to the brink of destruction. Yet, humankind struggles to come together and face such pressing problems, and instead, we opt to engage in petty conflicts and arguments with each other. The collective vision that we require remains as inaccessible and elusive as a pair of binoculars frozen in a block of ice. We must thaw the ice, grab the binoculars, begin to understand where we’re headed, and create change.'
  },
  "parched.jpg": {
    "title": "Parched",
    "info": "Sunlight Deprived Grass",
    "text": "In the midst of a record-breaking drought, California’s flora and fauna have been stolen of their most vital resource. As global warming continues to worsen, wildfires, droughts, hurricanes, floods, and other natural disasters will only become more and more prevalent. I sought to express through emulation the dire manner with which we are affecting the natural world around us through pollution and exploitation. Over the course of a month, I watered our yellowed grass around my cardboard stencil spelling out “H2O.” This piece exemplifies our parched earth’s desperate need for water as well as the Earth’s desperate need for human conservation and protection."
  },
  "monteCristo.jpg": {
    "title": "Monte Cristo Bust",
    "info": "Charcoal",
    "text":""
  },
  "sanitizedCommunication.mp4": {
    "title": "Sanitized Communication",
    "info": "Starbucks Coffee Cups, Sensors, LED",
    "text": "After lockdown forced billions to isolate themselves, communications were reduced to a laptop screen. School classes, job interviews, playdates, coffee shop meetings — activities we thought could only exist face to face were somehow suddenly moved online. Using ultrasonic vision sensors and the flashing LED lights, I wanted to demonstrate the reduction of our everyday interactions to the glowing pixels on our devices. Our physical connections, represented by the touch sensor underneath the LEDs, became less tactile and more abstract."
  },
  // "kettle.jpg": {
  //   "title": "Kettle",
  //   "info": "Charcoal",
  //   "text": ""
  // },
  "objectsFromLife.jpg": {
    "title": "Objects from Life",
    "info": "Charcoal & Graphite",
    "text": ""
  },
  "babies.mp4": {
    "title": "Fertility Crisis",
    "info": "Numeric LED Display, Baby Doll",
    "text": "In 1980, China instated the One-Child policy, seeking to control the then explosive population growth. Yet as the new century rolled around, young adults without siblings found themselves the sole caretakers of both their parents without any other systems of support. Already overburdened by responsibility, much of the new generation opted to not bear children, rapidly decreasing child birth rates. However, this curbed population growth soon proved unsustainable as the new generation could not meet the labor demands of the rapidly growing Chinese economy. Due to this unintended consequence, China has completely reversed its policy on childbirth, incentivizing families to have more children rather than imposing a ban. The baby dolls in this piece exemplify the irony of decades of birth restrictions followed by the scramble to maintain a sufficient workforce for the next generation."
  },
  "revealed.mp4": {
    "title": "Revealed",
    "info": "Under a Skylight",
    "text": "Everyone has to some degree internalized the expectations set upon them, whether it’s expectations from their parents, peers, society, or social media. We let these expectations, many of which are unreasonable, crowd our mind space and consume our happiness and energy. At one point, we must clear the clutter, recognizing what expectations are reasonable and helpful and wiping away everything else. But life is an ever-going cycle, and those unreasonable, draining expectations may soon come pouring back in. This video was shot from inside my home under our skylight."
  },
  "donanobis.mp4": {
    "title": "Voices",
    "info": "Harmonies in Garageband",
    "text": `Our perceptions of foreign cultures and peoples are largely shaped by the stories we consume. In many, if not most, classrooms around the world, European literature is held in high regard, thoroughly explored and studiously dissected. Yet, the European perspective is only one of the many, diverse lenses through which we can observe and understand the world. In her TED Talk, “The dangers of a single story”, Chimamanda Ngozi Adichie warns of the critical misunderstandings that arise from consuming narratives from a single perspective. By reading literature written by individuals of different cultural backgrounds, we can get a more complete, genuine view of humanity.\n\n I recorded 13 variations of the piece, “Dona Nobis Pacem,” and layered them together in GarageBand. Each track, a melody a little different from the rest, uniquely contributes to the overall ethereal harmony. Vocal harmonies serve as a beautiful representation of the importance of considering diverse literary perspectives.`
  },
  "donanobis.mp4": {
    "title": "Voices",
    "info": "Harmonies in Garageband",
    "text": `Our perceptions of foreign cultures and peoples are largely shaped by the stories we consume. In many, if not most, classrooms around the world, European literature is held in high regard, thoroughly explored and studiously dissected. Yet, the European perspective is only one of the many, diverse lenses through which we can observe and understand the world. In her TED Talk, “The dangers of a single story”, Chimamanda Ngozi Adichie warns of the critical misunderstandings that arise from consuming narratives from a single perspective. By reading literature written by individuals of different cultural backgrounds, we can get a more complete, genuine view of humanity.\n\n I recorded 13 variations of the piece, “Dona Nobis Pacem,” and layered them together in GarageBand. Each track, a melody a little different from the rest, uniquely contributes to the overall ethereal harmony. Vocal harmonies serve as a beautiful representation of the importance of considering diverse literary perspectives.`
  },
  "installationBeacon.jpg": {
    "title": "Installation Beacon",
    "info": "Mason Jars, Fallen Tree",
    "text": "Trees — they’re humble beings, silently shading our streets and weaving the air we breathe. Deforestation and pollution are slowly tearing away at the habitats that sustain human development. Clean air and comfortable weather may soon be relics of the past. I lined up mason jars, an airtight vessel often used for preservation, atop a fallen tree, emphasizing the preciousness of the air that we too often take for granted. Who knows, perhaps one day the air inside these sealed mason jars could be worth more than gold."
  },
  "destination.mov": {
    "title": "Destination Devastation",
    "info": "Projection",
    "text": "With NASA’s recently successful DART Mission, humankind has proven its ability to not only influence the workings of nature on Earth but also divert the movement and trajectories of astral bodies in the heavens above. Yet with this growing and untethered power, we must be ever-more cautious in how we utilize our advanced tools. We must continue technological growth while treasuring the earth beneath us. Without keeping such perspective in mind, we will face consequences, some of which have already been displayed in the California droughts and forest fires."
  },
  "mankinds.mov": {
    "title": "Mankind's Future Past",
    "info": "Computer Monitors on the Beach",
    "text": "Over the past few decades, technology has advanced at a never-before-seen pace. Like a snake shedding skin, the general public has quickly abandoned so many of the once state-of-the-art technologies — floppy disks, pagers, cassette-tapes, VHS tapes, the list goes on. Playing on the largest monitor is a scene from “2001: A Space Odyssey,” where prehistoric humans crowd around a black monolith — a symbol of rapid human evolutionary development. As technological advancement continues to accelerate, we can only guess what our world will look like tomorrow. Even the personal computers and laptops that have become so ubiquitous in our world today may soon be an artifact of the past. (Shortly after I took this shot, a large wave whisked away three of the four monitors, leaving only the largest monitor in the sand.)"
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
        var file = '';
        file = '/images/' + id
        console.log(file)
        if (file.slice(-3) == 'jpg') {
          return (
            
            <div className="isolate">
              <ThemeSwitcher />
            <div className="artImageContainer">
                <Image src={file} layout="fill" className="h-full w-full object-cover object-center group-hover:opacity-75 artImage max-h-[90vh]" />
            </div>
            <div className = "absolute right-[30px] h-screen content-center pl-20 w-[50%] grid place-items-center align-middle">
            <h1 className="mt text-4xl font-medium text-gray-900 text-center dark:text-white">{stuffs[id]["title"]}</h1>
            <h3 className="mt-1 text-xl text-gray-700 text-center dark:text-gray-400">{stuffs[id]["info"]}</h3>
            <p className="tracking-tight mt-5 text-gray-700 text-center dark:text-gray-300 max-h-80 overflow-scroll leading-[1.4rem]">{stuffs[id]["text"]}</p>
            <a className = "btn" href = "/art">←</a>
            </div>
        </div>
              );
          }
          else {
            return (
              <div className="isolate">
                  <ThemeSwitcher />
                  <div className = "ml-10">
                  <video autoPlay loop style={{ width: '50%', height: 'auto'}} className = "video-mask">
                    <source src={file} />
                  </video>
                  </div>
                  <div className = "absolute right-[30px] h-screen content-center pl-32 w-[50%] grid place-items-center align-middle">
                  <h1 className="mt text-4xl font-medium text-gray-900 text-center dark:text-white">{stuffs[id]["title"]}</h1>
                  <h3 className="mt-1 text-xl text-gray-700 text-center dark:text-gray-400">{stuffs[id]["info"]}</h3>
                  <p className="tracking-tight mt-5 text-gray-700 text-center dark:text-gray-300 max-h-80 overflow-scroll leading-[1.4rem]">{stuffs[id]["text"]}</p>
                  <a className = "btn" href = "/art">←</a>
                  </div>
              </div>
            )
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