// import Image from "next/image"
// import { useRouter } from 'next/router';
// import { useEffect } from 'react'
// // export async function getStaticProps({ params }) {
// //   const postData = await getPostData(params.id);
// //   return {
// //     props: {
// //       postData,
// //     },
// //   };
// // }

// // export async function getStaticPaths() {
// // //   const paths = getAllPostIds();
// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // }



// export default function Art() {
//     const router = useRouter();
//     const { id } = router.query
    
//     // if (!isReady) {
//     //     return null;
//     // }
//     // else {
//         const { isReady } = useRouter();

//    if (!isReady) {
//        return null; // Or any loading component
//    }
//         var file = '';
//         file = '/images/' + id
//         console.log(file)
//         if (file.slice(-3) == 'jpg') {
//           return (
//               <div className="isolate bg-white h-screen place-content-center">
//                   <div className="imageContainer">
//                       <Image src={file} layout="fill" className="h-full w-full object-cover object-center group-hover:opacity-75 image" />
//                   </div>
//                   <div className = "grid place-items-center">
//                       <div>
//                   <h3 className="mt-4 text-xl text-gray-700 text-center">{stuffs[id]["info"]}</h3>
//                   <p className="mt-1 text-4xl font-medium text-gray-900 text-center">{stuffs[id]["title"]}</p>
//                   </div>
//                   <a className = "btn" href = "/art">←</a>
//                   </div>
//               </div>
//               );
//           }
//           else {
//             return (
//               <div className="isolate bg-white h-screen place-content-center">
                  
//                   <div className = "grid place-items-center">
//                   <video autoPlay loop style={{ width: '800px', height: 'auto'}} className = "video-mask">
//                     <source src={file} />
//                   </video>
//                       <div>
//                   <h3 className="mt-4 text-xl text-gray-700 text-center">{stuffs[id]["info"]}</h3>
//                   <p className="mt-1 text-4xl font-medium text-gray-900 text-center">{stuffs[id]["title"]}</p>
//                   </div>
//                   <a className = "btn" href = "/art">←</a>
//                   </div>
//               </div>
//             )
//           }
//     // }
    
      
//       // <Layout>
//       //   <Head>
//       //     <title>{postData.title}</title>
//       //   </Head>
//       //   <article>
//       //     <h1 className={utilStyles.headingXl}>{postData.title}</h1>
//       //     <div className={utilStyles.lightText}>
//       //       <Date dateString={postData.date} />
//       //     </div>
//       //     <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       //   </article>
//       // </Layout>
//   }
  
//   const stuffs = {
//     "roverPathfinding": {
//         "image": "/screenshots/roverPathfinding",
//         "snippet": ""
//     },
// }