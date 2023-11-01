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

    var code = `print("Welcome to a game of Tic Tac Toe")
board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
def print_board():
  print("  1 2 3")
  for i in range(3):
    string = ""
    string += str(i + 1)
    string += " "
    for j in range(3):
      string += board[i][j]
      string += " "
    print(string)
def check():
  for i in range(3):
    x = 0
    o = 0
    for j in range(3):
      if (board[i][j] == "X"):
        x += 1
      if (board[i][j] == "O"):
        o += 1
    if (x == 3):
      return "X"
    elif (o == 3):
      return "O"
  for j in range(3):
    x = 0
    o = 0
    for i in range(3):
      if (board[i][j] == "X"):
        x += 1
      if (board[i][j] == "O"):
        o += 1
    if (x == 3):
      return "X"
    elif (o == 3):
      return "O"
  x = 0
  o = 0
  for i in range(3):
    if (board[i][i] == "X"):
      x += 1
    if (board[i][i] == "O"):
      o += 1
  if (x == 3):
    return "X"
  elif (o == 3):
    return "O"
  x = 0
  o = 0
  for i in range(3):
    if (board[2-i][i] == "X"):
      x += 1
    if (board[2-i][i] == "O"):
      o += 1
  if (x == 3):
    return "X"
  elif (o == 3):
    return "O"
  return "None"
print_board()
checks = 0
while (check() == "None"):
  mark = ""
  if (checks % 2 == 0):
    mark = "X"
  else:
    mark = "O"
  print("It is " + mark + "'s turn")
  if (checks > 9):
    break
  row = 0
  column = 0
  while (True):
    try: 
      row = int(input("Enter a row."))
      if (row < 4 and row >= 1):
        break
    except ValueError:
      pass
    print("Not Valid")
  while (True):
    try: 
      column = int(input("Enter a column."))
      if (column < 4 and column >= 1 and board[row - 1][column - 1] == " "):
        break
    except ValueError:
      pass
    print("Not Valid")
  board[row - 1][column - 1] = mark
  print_board()
  checks += 1
print(" ")
print(" ")
if (checks != 9): 
  print(check() + " WINS!!!!!!!")
if (checks == 9):
  print("-----Tie!-----")
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/ticTacToe.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Tic Tac Toe</p>
                  </div>
                  <a className = "btn-black" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          
    // }
    
      
