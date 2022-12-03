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
                      <Image src="/screenshots/closet2.png" layout="fill" className="border h-fit object-center image shadow-xl" />
                  </div>
                  <div className="imageContainer">
                      <Image src="/screenshots/closet1.png" layout="fill" className="border h-fit object-center image shadow-xl" />
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                        {/* <a href="https://github.com/maggie-j-liu/closet-app"><h3 className="mt-4 text-xl text-gray-700 text-center hover:underline">Github Repo Link</h3></a> */}
                        <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Clear Closet</p>
                        </div>
                    <div className = "grid grid-cols-3 gap-x-3">
                        <a href = "https://clear-closet.vercel.app/" className = "text-3xl py-2 hover:opacity-50"><FiLink /></a>
                        <a href = "https://github.com/maggie-j-liu/closet-app" className = "text-3xl py-2 hover:opacity-50"><SiGithub /></a>
                        <a href = "https://devpost.com/software/clear-closet" className = "text-3xl py-2 hover:opacity-50"><SiDevpost /></a></div>
                        <a className = "btn" href = "/coding">←</a>
                  </div>
                  
              </div>
              );
          }
          