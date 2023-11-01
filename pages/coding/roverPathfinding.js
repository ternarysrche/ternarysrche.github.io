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

    var code = `import turtle
import random
wn = turtle.Screen()
alex = turtle.Turtle()
wn.screensize(500,500)
alex.speed(0)
obstacles = []
alex.hideturtle()
def make_border():
    alex.penup()
    alex.goto(-250,-250)
    alex.pendown()
    for side in range(4):
        alex.forward(500)
        alex.left(90)

def make_obstacles():
    number = random.randrange(10,20)
    for the_obstacle in range(20):
        x_axis = random.randrange(-200,200)
        y_axis = random.randrange(-200,200)
        size = random.randrange(10,20)
        obstacles.append((x_axis,y_axis))
        alex.penup()
        alex.goto(x_axis,y_axis)
        alex.pendown()
        for sides in range(4):
            alex.forward(size)
            alex.right(90)

make_border()
make_obstacles()
satellite = turtle.Turtle()
satellite.penup()
satellite.goto(-240,210)
satellite.pendown()
alex.penup()
alex.goto(-250,200)
alex.pendown()
alex.forward(20)
alex.left(90)
alex.penup()
alex.forward(20)
alex.pendown()
alex.left(90)
alex.forward(20)
alex.write('Start')
alex.penup()
alex.goto(230,-200)
alex.pendown()
alex.forward(-20)
alex.left(90)
alex.penup()
alex.forward(-20)
alex.pendown()
alex.left(90)
alex.forward(-20)
alex.write('End')
speed = 1
x = 1
while True:
    satellite.forward(2)
    direction = satellite.towards(245,-200)
    if x == 1:
        satellite.setheading(direction)
    
    for obstacle in obstacles:
        for obstacle in obstacles:
            if ((satellite.xcor() + 30) - obstacle[0] < 20 and (satellite.xcor() + 30) - obstacle[0] > -20) and (((obstacle[1] - satellite.ycor() < 30 and obstacle[1] - satellite.ycor() > 0) or (obstacle[1] - satellite.ycor() > -30 and obstacle[1] - satellite.ycor() < 30))  or (obstacle[1] - satellite.ycor() > -30 and obstacle[1] - satellite.ycor() < 30)):
                satellite.left(20)
                satellite.backward(10)
                                                                                                                                    
                
            else:
                continue             
for y in range(-200,200):
    for x in range(-200,200):
        for obstacle in obstacles:
            if (obstacle[0] + 10) - x > -5 and (obstacle[0] - 10) - x < 5:
                pass
            else:
                break
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/roverPathfinding.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Rover Pathfinding</p>
                  </div>
                  <a className = "btn-black" href = "/coding">←</a>
                  </div>
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