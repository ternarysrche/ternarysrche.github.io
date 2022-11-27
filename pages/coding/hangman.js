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

    var code = `from turtle import *
import random
dict_file = open("dict.txt","r")
content = dict_file.read()
words = content.split("\n")
official = random.choice(words)
penup()
goto(len(official)*(-15) ,-70)
hideturtle()
speed(0)
print("Welcome to this game of Hangman.")
for i in range(len(official)):
  pendown()


  forward(20)
  penup()
  forward(10)
def post():
  penup()
  goto(-100, 10)
  pendown()
  forward(100)
  backward(50)
  left(90)
  forward(100)
  right(90)
  forward(40)
  right(90)
  forward(20)
def face():
  penup()
  goto(-20,80)
  pendown()
  circle(10)
def body():
  penup()
  goto(-10,70)
  pendown()
  setheading(270)
  forward(20)
def rarm():
  penup()
  goto(-10,65)
  pendown()
  setheading(315)
  forward(10)
def larm():
  penup()
  goto(-10,65)
  pendown()
  setheading(225)
  forward(10)
def rleg():
  penup()
  goto(-10,50)
  pendown()
  setheading(315)
  forward(10)
def lleg():
  penup()
  goto(-10,50)
  pendown()
  setheading(225)
  forward(10)
def deadface():
  penup()
  goto(-20, 80)
  pendown()
  setheading(270)
  fillcolor("red")
  
  begin_fill()
  circle(10)
  end_fill()
def gameover():
  penup()
  goto(20,0)
  fillcolor("red")
  clear()
  write("Game Over!!!! The Word was:", align = "center", font=("Arial", 16, "normal"))
  goto(20,-20)
  write(official, align = "center", font=("Arial", 16, "normal"))
counter = 0
death = 0
def do(input1):
  setheading(270)
  if (input1 == 0):
    setheading(0)
    post()
  elif (input1 == 1):
    face()
  elif (input1 == 2):
    body()
  elif (input1 == 3):
    rarm()
  elif(input1 == 4):
    larm()
  elif(input1 == 5):
    rleg()
  elif(input1 == 6):
    lleg()
    deadface()
    gameover()
counter = 0
dead = 0
used = []
do(death)
while (counter < len(official)):
  #try:
  choice = str(input("Choose a letter:"))
  setheading(0)
  if (len(choice) == 1 and choice.isalpha() and choice not in used):
    print("Okay Then.")
  else:
    print("Invalid Please Enter a Letter")
    continue
  
  if (choice.lower() in official):
    penup()
    goto(len(official)*(-15) - 20,-62)
    for i in range(len(official)):
      
      setheading(0)
      forward(30)
      if official[i] == choice:
        counter += 1
        write(choice, align = "center", font=("Arial", 16, "normal"))
  else:
    death += 1
  used.append(choice)
  penup()
  goto(-140, -150)
  setheading(0)
  for i in range(len(used)):
    if (i % 8 == 0):
      goto(-140, -150 - (i/8)*30)
    forward(30)
  write(used[i], align = "center", font=("Arial", 16, "normal"))
  #except:
  
  do(death)
  if (death == 6):
    break
if (death != 6):
  penup()
  goto(-10,0)
  fillcolor("black")
  clear()
  write("YOU WIN!!!!", align = "center", font=("Arial", 30, "normal"))

`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/hangman.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Hangman</p>
                  </div>
                  <a className = "btn" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          
    // }
    
      
