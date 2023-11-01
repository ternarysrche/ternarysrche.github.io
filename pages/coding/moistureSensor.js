import Image from "next/image"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import "prismjs/themes/prism.css";
import { FiLink } from "react-icons/fi";
import { SiGithub, SiDevpost } from "react-icons/si";
import { IconContext } from "react-icons";

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



export default function Art() {

    
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                    <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center min-h-[70%]">
                  <div className="imageContainer">
                      <Image src="/screenshots/moistureSensor2.png" layout="fill" className="border h-fit object-center image shadow-xl" />
                  </div>
                  <div className="imageContainer">
                      <Image src="/screenshots/moistureSensor1.png" layout="fill" className="border h-fit object-center image shadow-xl" />
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                        <h3 className="mt-4 text-xl text-gray-700 text-center">Arduino ESP8266, Capacitive Moisture Sensor, App</h3>
                        <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Wireless Moisture Sensor</p>
                        </div>
                    {/* <div className = "grid grid-cols-1 gap-x-3">
                        <a href = "https://github.com/ternarysrche/mathclub-bot" className = "text-3xl py-2 hover:opacity-50"><SiGithub /></a>
                    </div> */}
                    <a className = "btn-black" href = "/coding">←</a>
                  </div>
                  
              </div>
              );
          }
          