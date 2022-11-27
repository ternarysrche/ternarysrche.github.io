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

    var code = `# All code written by Christopher Chen
print("Welcome to a game of Connect 4")
cur_board = []
height = []
size = 0
while True:
  try:
    size = int(input("Pick your size of board (from 5 to 10)"))
  except:
    continue
  if (size >= 5 and size < 11):
    break
  print("Not Valid")
def make_board():
  for i in range(size):
    height.append(0)
    row = []
    for j in range(size):
      row.append(" ")
    cur_board.append(row)
def print_board(board):
  pr = " "
  for i in range(size):
    pr += str(i + 1)
    pr += " "
  
  for i in range(size):
    string = ""
    string += "|"
    for j in range(size):
      string += str(board[i][j])
      string += "|"
    print(string)
  print(pr)
def check(board):
  for i in range(size):
    for j in range(size - 4 + 1):
      x = 0
      o = 0
      for k in range(4):
        if (board[i][j + k] == "X"):
          x += 1
        if (board[i][j + k] == "O"):
          o += 1
      if (x == 4):
        return "X"
      elif (o == 4):
        return "O"
    
  for i in range(size):
    for j in range(size - 4 + 1):
      x = 0
      o = 0
      for k in range(4):
        if (board[j + k][i] == "X"):
          x += 1
        if (board[j + k][i] == "O"):
          o += 1
      if (x == 4):
        return "X"
      elif (o == 4):
        return "O"
  for i in range(size):
    for j in range(size):
      if (i + 4 > size or j + 4 > size):
        continue
      x = 0
      o = 0
      for k in range(4):
        if (board[i + k][j + k] == "X"):
          x += 1
        if (board[i + k][j + k] == "O"):
          o += 1
      if (x == 4):
        return "X"
      elif (o == 4):
        return "O"
  for i in range(size):
    for j in range(size):
      if (i - 4 < 0 or j + 4 > size):
        continue
      x = 0
      o = 0
      for k in range(4):
        if (board[i - k][j + k] == "X"):
          x += 1
        if (board[i - k][j + k] == "O"):
          o += 1
      if (x == 4):
        return "X"
      elif (o == 4):
        return "O"
  return "None"

make_board()
print_board(cur_board)
checks = 0
while (check(cur_board) == "None"):
  mark = ""
  if (checks % 2 == 0):
    mark = "X"
  else:
    mark = "O"
  print("It is " + mark + "'s turn")
  
  if (checks >= size**2):
    break
  column = 0
  while (True):
    try: 
      column = int(input("Enter a column."))
      if (column < size + 1 and column >= 1 and height[column - 1] < size ):
        break
    except ValueError:
      pass
    print("Not Valid")
  cur_board[size - height[column - 1] -1][column - 1] = mark
  height[column - 1] += 1
  print_board(cur_board)
  checks += 1
print(" ")
print(" ")
if (checks != size ** 2): 
  print(check(cur_board) + " WINS!!!!!!!")
if (checks == size ** 2):
  print("-----Tie!-----")
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/connect4.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Connect 4</p>
                  </div>
                  <a className = "btn" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          
    // }
    
      
