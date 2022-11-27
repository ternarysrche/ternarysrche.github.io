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
wn = Screen()
speed(0)
def draw_rectangle(len, width, x, y):
  penup()
  goto(x, y)
  pendown()
  for i in range(2):
    forward(len)
    right(90)
    forward(width)
    right(90)
def draw_circle(x, y, r):
  penup()
  goto(x,y - r)
  pendown()
  circle(r)
def distance1(x1, y1, x2, y2):
  return (((x1 - x2)**2 + (y1 - y2)**2) ** 0.5)
draw_rectangle(180, 310,-90,180)
draw_rectangle(160, 40, -80, 170)
listx = []
listy = []
dictionary = []
counter = 0;
for i in range(3):
  for j in range(5):
    draw_circle(-50 + i * 50, 100 - j*50, 20)
    listx.append(-50 + i * 50)
    listy.append(100 - j*50)
    if counter <= 9:
      penup()
      goto(listx[counter], listy[counter])
      write(counter, align = "center", font=("Arial", 16, "normal"))
      dictionary.append(counter)
      pendown()
      counter += 1
   
cur = "0"
cur_display = 0
operation = ""
def h1(x, y):
  global cur_display
  global cur
  okay = True
  key = ""
  for i in range(len(listx)):
    if (distance1(listx[i], listy[i], x, y) <= 20):
      key = dictionary[i]
      okay = False
    if (not okay):
      break
  if (key == "Clear"):
    clear()
    return
  if (not okay):
    if (key == "="):
      goto(-70 + 5.5*len(str(cur_display)) - 5, 140)
      color("white")
      write(cur_display, False, align = "center", font=("Arial", 16, "normal"))
      goto(-70 + 5.5* len(str(operate())) - 5,140)
      color("black")
      write(operate(), False, align = "center", font=("Arial", 16, "normal"))
      cur_display = operate()
      cur = cur_display
    cur = str(cur)
    if (key == "+"):
      cur += "+"
    if (key == "-"):
      cur += "-"
    if (key == "*"):
      cur += "*"
    if (key == "/"):
      cur += "/"
    elif (key >= 0 and key <= 9):
      cur += str(key)
    print(key)
penup()
def clear():
  global cur
  global cur_display
  cur = "0"
  goto(-70 + 5.5*len(str(cur_display)) - 5, 140)
  color("white")
  write(cur_display, False, align = "center", font=("Arial", 16, "normal"))
  goto(-70 + 5.5* len(str(operate())) - 5,140)
  color("black")
  write(0, False, align = "center", font=("Arial", 16, "normal"))
  cur_display = str(operate())
  cur = cur_display
def operate():
  global cur
  prev_op = " "
  #print(cur[0])
  val = 0
  cur_value = 0
  try:
    val = int(cur[0])
  except ValueError:
    print("Error", cur)
    return 0
  operations = []
  numbers = []
  for i in range(1, len(cur)):
    try:
      val = val*10 + int(cur[i])
      #print "Previous Operation:",prev_op
      #print "Value:", val
    except ValueError:
      numbers.append(val)
      operations.append(cur[i])
      val = 0
  numbers.append(val)
  cur_value = numbers[0]
  for j in range(len(operations)):
    if (operations[j] == "+"):
      cur_value += numbers[j+1]
    if (operations[j] == "-"):
      cur_value -= numbers[j+1]
    if (operations[j] == "*"):
      cur_value *= numbers[j+1]
    if (operations[j] == "/"):
      cur_value /= numbers[j+1]
  return cur_value
goto(listx[10], listy[10])
dictionary.append("-")
write("-", False, align = "center", font=("Arial", 16, "normal"))
goto(listx[11], listy[11])
dictionary.append("+")
write("+", False, align = "center", font=("Arial", 16, "normal"))
goto(listx[12], listy[12])
dictionary.append("/")
write("/", False, align = "center", font=("Arial", 16, "normal"))
goto(listx[13], listy[13])
dictionary.append("*")
write("*", False, align = "center", font=("Arial", 16, "normal"))
goto(listx[14], listy[14])
dictionary.append("=")
write("=", False, align = "center", font=("Arial", 16, "normal"))
penup()
goto(-180, 0)
draw_circle(-180, 0, 20)
penup()
goto(-180,0)
listx.append(-180)
listy.append(0)
write("C", False, align = "center", font=("Arial", 16, "normal"))
goto(-70, 140)
dictionary.append("Clear")
write("0", False, align = "center", font=("Arial", 16, "normal"))
hideturtle()
wn.onclick(h1)
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/calculator.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Calculator</p>
                  </div>
                  <a className = "btn" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          
    // }
    
      
