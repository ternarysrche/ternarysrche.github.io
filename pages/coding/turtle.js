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
bgColor = 'light green'
obsColor = 'Green'
listLevel = ['easy','medium','hard','extra hard','hardest']
level = str(input('Which level do you want to play in?\nEasy\nMedium\nHard\nExtra Hard\nHardest\n'))
while level.lower() not in listLevel:
    level = str(input('Which level do you want to play in?\nEasy\nMedium\nHard\nExtra Hard\nHardest\n'))
turtle.setup(1000,1000)                # Determine the window size
wn = turtle.Screen()                 # Get a reference to the window
wn.title("Snake")                    # Change the window title
wn.bgcolor(bgColor)             # Set the background color
snake = turtle.Turtle()    # Create our favorite turtle
starter = turtle.Turtle()
starter.hideturtle()
starter.speed(10)
snake.shape('turtle')
border = turtle.Turtle()
Obstacle = turtle.Turtle()
Obstacle.hideturtle()
Obstacle.speed(900)
Obstacle.fillcolor(obsColor)
listOfObstacles = []
#snake.penup()
border.speed(200)
border.penup()
border.goto(-300,-300)
border.pendown()
for side in range(4):
    border.forward(600)
    border.left(90)
border.hideturtle()
def make_obstacles(num):
    global listOfObstacles
    for obstacles in range(num):
        xcor_obstacle = random.randrange(-285,285)
        ycor_obstacle = random.randrange(-285,285)
        while ((xcor_obstacle,ycor_obstacle) in listOfObstacles) or (30 > xcor_obstacle > -30) and ( 30 > ycor_obstacle > -30):
            xcor_obstacle = random.randrange(-285,285)
            ycor_obstacle = random.randrange(-285,285)
        else:
            listOfObstacles.append((xcor_obstacle,ycor_obstacle))
    for obstacle in listOfObstacles:
        Obstacle.penup()
        Obstacle.goto(obstacle)
        Obstacle.backward(8)
        Obstacle.left(90)
        Obstacle.forward(8)
        Obstacle.pendown()
        Obstacle.begin_fill()
        for sides in range(4):
            Obstacle.right(90)
            Obstacle.forward(16)
        Obstacle.end_fill()
        Obstacle.hideturtle()
if level.lower() == 'easy':
    make_obstacles(20)
    print('1')
if level.lower() == 'medium':
    make_obstacles(45)
    print('2')
if level.lower() == 'hard':
    make_obstacles(55)
    print('3')
if level.lower() == 'extra hard':
    make_obstacles(75)
    print('4')
if level.lower() == 'hardest':
    make_obstacles(120)
    print('5')
import time



listOfTime = []
speed = 3

def k1():
    snake.left(20)
def k2():
    snake.right(20)
wn.listen()
wn.onkey(k1, "Left")
wn.onkey(k2, "Right")

while True:
    snake.forward(1)
    if snake.xcor() > 300 or snake.xcor() < -300:
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor('White')
        print('You survived for ', time.clock() - 2 ,' seconds.')
        snake.hideturtle()
        wn.clear()
        wn.exitonclick()
    
        break
    if snake.ycor() > 300 or snake.ycor() < -300:
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor(obsColor)
        wn.bgcolor(bgColor)
        wn.bgcolor('White')
        print('You survived for ', time.process_time() - 2 ,' seconds.')
        snake.hideturtle()
        wn.clear()
        wn.exitonclick()
        
        break
    for obstacle in listOfObstacles:
        if int(obstacle[0]) - 13 < snake.xcor() < int(obstacle[0]) + 13 and int(obstacle[1]) - 13 < snake.ycor() < int(obstacle[1]) + 13:
            wn.bgcolor(bgColor)
            wn.bgcolor(obsColor)
            wn.bgcolor(bgColor)
            wn.bgcolor(obsColor)
            wn.bgcolor(bgColor)
            wn.bgcolor(obsColor)
            wn.bgcolor(bgColor)
            wn.bgcolor(obsColor)
            wn.bgcolor(bgColor)
            wn.bgcolor('White')
            print('You survived for ', time.process_time() - 2 ,' seconds.')
            snake.hideturtle()
            wn.clear()
            wn.exitonclick()
            break

# These lines "wire up" keypresses to the handlers we've defined.'''
wn.done()
    

`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/turtle.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Turtle Game</p>
                  </div>
                  <a className = "btn" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          