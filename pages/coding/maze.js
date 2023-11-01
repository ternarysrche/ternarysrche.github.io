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

    var code = `import random
s = int(input("Input size:"))
vis = []
maze = []
for i in range(2*s+1):
  row = []
  for j in range(2*s+1):
    row.append(0)
  maze.append(row)
  vis.append(row)
def recurse(row, column):
  num = random.randrange(4)
  if (num == 0):
    new_row = row + 2
    new_column = column
    if not((new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column + 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row - 2
    new_column = column
    if (not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column - 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
  if (num == 1):
    
    new_row = row - 2
    new_column = column
    if (not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row + 2
    new_column = column
    if not((new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column + 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column - 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
  if (num == 2):
    new_row = row + 2
    new_column = column
    if not((new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row - 2
    new_column = column
    if (not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column + 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column - 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)

    
  if (num == 3):
    new_row = row - 2
    new_column = column
    if (not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column - 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row
    new_column = column + 2
    if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    new_row = row + 2
    new_column = column
    if not((new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
      if (vis[new_row][new_column] == 0):
        vis[new_row][new_column] = 1
        maze[int((new_row + row)/2)][int((new_column + column)/2)] = 1
        maze[new_row][new_column] = 1
        recurse(new_row, new_column)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
print("")
vis[1][1] = 1
maze[1][1] = 1
maze[0][1] = 1

maze[2*s][2*s - 1] = 1
recurse(1,1)
'''for i in range(2*s + 1):
  for j in range(2*s + 1):
    print (maze[i][j], end = '')
  print("")
'''
from turtle import *
wn = Screen()
hideturtle()
import time
setheading(0)
speed(0)
wn.tracer(0)
dist = int(150/s)
for row in range(2*s+1):
  for column in range(2*s + 1):
    #print maze[row][column],
    penup()
    goto(-150+(dist*column),150-(dist*row))
    pendown()
    
    if (maze[row][column] == 0):
      new_row = row + 1
      new_column = column
      #print new_row, new_column
      if not((new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
        if (maze[new_row][new_column] == 0):
          right(90)
          forward(dist)
          backward(dist)
          left(90)
      new_row = row
      new_column = column + 1
      #print new_row, new_column
      if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
        if (maze[new_row][new_column] == 0):
          forward(dist)
          backward(dist)
      '''new_row = row - 1
      new_column = column
      print new_row, new_column
      if (not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0)):
        print new_row, new_column
        if (maze[new_row][new_column] == 0):
          left(90)
          forward(dist)
          backward(dist)
          right(90)
      new_row = row
      new_column = column - 1
      print new_row, new_column
      if not(new_row >= 2*s + 1 or new_row < 0 or new_column >= 2*s + 1 or new_column < 0):
        if (maze[new_row][new_column] == 0):
          left(180)
          forward(dist)
          backward(dist)
          left(180)'''

`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/maze.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Maze Generator</p>
                  </div>
                  <a className = "btn-black" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          