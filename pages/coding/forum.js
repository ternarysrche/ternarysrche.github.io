import Image from "next/image"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import "prismjs/themes/prism.css";
import { SiGithub, SiDevpost } from "react-icons/si";
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
                      <Image src="/screenshots/forum.png" layout="fill" className="border h-fit object-center group-hover:opacity-75 image shadow-xl" />
                  </div>
                  <div className="imageContainer">
                      <Image src="/screenshots/forum2.png" layout="fill" className="border h-fit object-center group-hover:opacity-75 image shadow-xl" />
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <a href="https://github.com/ternarysrche/BasisForum"><h3 className="mt-4 text-xl text-gray-700 text-center hover:underline">Github Repo Link</h3></a> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">BIF Forum</p>
                  </div>
                  <div className = "grid grid-cols-1 gap-x-3">
                        {/* <a href = "https://clear-closet.vercel.app/" className = "text-3xl py-2 hover:opacity-50"><FiLink /></a> */}
                        <a href = "https://github.com/ternarysrche/BasisForum" className = "text-3xl py-2 hover:opacity-50"><SiGithub /></a>
                        {/* <a href = "https://devpost.com/software/clear-closet" className = "text-3xl py-2 hover:opacity-50"><SiDevpost /></a></div> */}
                  </div>
                  <a className = "btn" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          