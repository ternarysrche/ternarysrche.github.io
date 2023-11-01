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
import time
wn = turtle.Screen()
setup = turtle.Turtle()
setup.hideturtle()
setup.speed(0)
wn.screensize(500,500)
Start = random.randrange(-250,250)
End = random.randrange(-250,250)
def start_setup():
    setup.penup()
    setup.goto(Start,-245)
    setup.pendown()
    setup.right(90)
    setup.write('Start')
    #setup.write('开始')
    for side in range(3):
        setup.forward(5)
        setup.left(90)
    setup.left(90)
    setup.forward(2.5)
    global Starting
    Starting = setup.position()
    setup.penup()
    setup.goto(End,-245)
    setup.pendown()
    setup.write('End')
    #setup.write('终点')
    for side in range(3):
        setup.forward(5)
        setup.left(90)
    global Ending
    Ending = setup.position()
start_setup()
destination = turtle.Turtle()
destination.penup()
destination.goto(-250,250)
booster = turtle.Turtle()
booster.penup()
booster.goto(Starting)
booster.pendown()
module = turtle.Turtle()
module.penup()
module.goto(Starting)
module.pencolor('red')
x = 0
while True:
    destination.forward(2)
    if destination.xcor() == 250 or destination.xcor() == -250:
        destination.left(180)
    if x == 0:
        direction = booster.towards(destination.position())
        booster.setheading(direction)
        booster.forward(3)
        module.setheading(direction)
        module.forward(3)
    if x != 0:
        booster.goto(destination.position())
        module.goto(destination.position())
        #module.goto(destination.position())
    if destination.xcor() - booster.xcor() > -1 and destination.xcor() - booster.xcor() < 1 and destination.ycor() - booster.ycor() > -1 and destination.ycor() - booster.ycor() < 1:
        if x == 20:
            module.goto(destination.position())
            break
        else:
            x += 1
            direction = module.towards(destination.position())
            module.setheading(direction)
            module.goto(destination.position())
print('Payload delivered.')
print('Module connected.')
#print('送货成功')
while True:
    destination.forward(2)
    if destination.xcor() == 250 or destination.xcor() == -250:
        destination.left(180)
    booster.forward(3)
    direction = booster.towards(Ending)
    booster.setheading(direction)
    if Ending[0] - booster.xcor() > -1 and Ending[0] - booster.xcor() < 1 and Ending[1] - booster.ycor() > -3 and Ending[1] - booster.ycor() < 3:
        break
    direction = module.towards(destination.position())
    module.setheading(direction)
    module.goto(destination.position())
print('We have made a safe touchdown on Earth.')
print('MISSION SUCCESS!!!!')
#print('降落成功')
#print('任务成功!!!')
     
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/rocketPayloadDelivery.png" layout="fill" className="border h-full object-center group-hover:opacity-75 image shadow-xl"/>
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Rocket Payload Delivery</p>
                  </div>
                  <a className = "btn-black" href = "/coding">←</a>
                  </div>
              </div>
              );
}