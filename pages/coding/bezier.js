import Image from "next/image"
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import "prismjs/themes/prism.css";

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

    var code = `#setup
import random
import turtle
wn = turtle.Screen()
wn.colormode()
alex = turtle.Turtle()
turtle.screensize(500,500)
alex.speed(0)
alex.penup()
alex.goto(-250,-250)
alex.pendown()
wn.colormode(255)
alex.hideturtle()
#making the lines
times = 100
x = -250
y = 250
r = 255
b = 255
g = 175
for integer in range(times):
    alex.pencolor((r,g,b))
    alex.goto(x,-250)
    alex.goto(-250,y)
    alex.goto(-250,-250)
    x += 500/times
    y -= 500/times
    r -= 0.64
 #   g -= 0.01
 #   b += 0.01
    r = int(r)
    g = int(g)
    b = int(b)
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/bezier.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Bezier</p>
                  </div>
                  <a className = "btn-black" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          
    // }
    
      
