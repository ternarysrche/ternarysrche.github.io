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
print('Project Version: Vocab Conditioning Version 0.2\nAuthor: Christopher\n ')
DictOfWords = {}
File1 = open('Scores.txt','r')

DictOfNames = {}
DictOfScores = {}
listOfScore = []
listOfPassword = []
DictOfPassword = {}

for line in File1:
    line = line.split()
    if len(line) == 4:
    # this is for other data keeping
        listOfScore.append(line)
        DictOfNames[line[0]] = line[2]
        DictOfScores[line[0]] = line[1]
        listOfPassword.append(line[3])
        DictOfPassword[line[0]] = line[3]
#print(DictOfNames)
File1.close()
def rot13(string):
    string = list(string)
    for i in string:
        place = string.index(i)
        numLetter = ord(i)    
        if 65 <= numLetter <= 90: 
            if numLetter - 13 >= 65:
                theOppositeLetter = numLetter - 13
                string.pop(place)
                string.insert(place,chr(theOppositeLetter))
            else:
                theOppositeLetter = numLetter + 13
                string.pop(place)
                string.insert(place, chr(theOppositeLetter))
        if 97 <= numLetter <= 122:
            if numLetter - 13 >= 97:
                theOppositeLetter = numLetter - 13
                string.pop(place)
                string.insert(place, chr(theOppositeLetter))
            else:
                theOppositeLetter = numLetter + 13
                string.pop(place)
                string.insert(place, chr(theOppositeLetter))
    weirdWord = ''.join(map(str, string))
    return(weirdWord)
#print(listOfPassword)
Name = input('What is your username?\n')
while Name not in DictOfNames:
    Name = input('That username does not exist. What is your username?\n')
#password = input('What is your password?\n')

#while rot13(password) not in listOfPassword:  
#    password = input('That password does not exist. What is your password?\n')

print('Welcome back to Vocab Conditioning,', Name, '.')
yes_no = input('You are on Week ' + DictOfNames[Name] + '. Memorize the words and enter yes to start.\n')
while yes_no.lower() != 'yes':
    yes_no = input('You are on Week ' + DictOfNames[Name] + '. Memorize the words and enter yes to start.\n')
print('Let\'s start!!')
 
file_level = DictOfNames[Name] + '.txt'


# additional addings...
if int(DictOfNames[Name]) > 1:
    txt = random.randrange(1,int(DictOfNames[Name]))
    previous_level = str(txt) + '.txt'
    File = open(previous_level,'r')
    for line in File:
        if len(line.split('-')) == 2:
            if 30 < len(line) < 37:
                line = line.split('-')
                line[1].rstrip('\t')
                DictOfWords[str(line[0])] = line[1].rstrip('\n')            
    File.close()
# end of additional addings...
File2 = open(file_level,'r')

for line in File2:
    line = line.split('-')
    if len(line) == 2:
        line[1].rstrip('\t')
        DictOfWords[str(line[0])] = line[1].rstrip('\n')

listOfNumber = []

Score = 0

for key in DictOfWords:
    listOfWords = list(DictOfWords.keys())
    number = random.randrange(0,len(DictOfWords))
    
          
    while number in listOfNumber:
        number = random.randrange(0,len(DictOfWords))
    listOfNumber.append(number)
 
    answer = input(DictOfWords[listOfWords[number]] + '?\n')
    if answer.lower() == listOfWords[number]:
        if len(listOfNumber) == len(listOfWords):
            Score += 1
            Result = int(Score*(100/len(listOfWords)))
            if Result == 100:
                points = int(DictOfScores[Name]) + int(len(DictOfWords))
                week = int(DictOfNames[Name]) + 1
                print('Correct!!!\n')
                print('You passed Week ' + str(DictOfNames[Name]))
                print("You got " + str(Result) + '% on your test.')
                print('Now you have ' + str(points) + ' points' + ', and you\'re on Week ' + str(week) + '.')
                File3 = open('Scores.txt','w')
                for name in DictOfNames:
                    if name == Name:
                        points = int(DictOfScores[name]) + int(len(DictOfWords))
                        week = int(DictOfNames[name]) + 1
 
                        File3.write(name + ' ' + str(points) + ' ' + str(week) + ' ' + DictOfPassword[Name] + '\n')

                    else:
                       File3.write(name + ' ' + str(DictOfScores[name]) + ' ' + str(DictOfNames[name]) + ' ' + DictOfPassword[name] + '\n')
                File3.close()
   
            else:
                print('Correct!!!\n')
                print("Sadly, you did not pass the Week ", DictOfNames[Name],"test.\nYou got " + str(Result) + '% on your test.')
            break
        if len(listOfNumber) != len(listOfWords):
            Score += 1
            print('Correct!! Let\'s move on.')
            
    if answer.lower() != listOfWords[number]:
        if len(listOfNumber) != len(listOfWords): 
            print('Sadly, That is wrong. The word is ' + str(listOfWords[number]) + '. Let\'s move on.')
        else:
            Result = int(Score*(100/len(listOfWords)))
            print('Sadly, That is wrong. The word is ' + str(listOfWords[number]) + '. Sadly, that\'s the last problem.')
            print("Sadly, you did not pass the Week ", DictOfNames[Name],"test.\nYou got " + str(Result) + '% on your test.')
            break

File4 = open('Scores.txt','r')
listOfScore = []
for line in File4:
    line = line.split()
    listOfScore.append((int(line[1]),line[0]))
listOfScore.sort()
rank = 4
for score in listOfScore:
    rank -= 1
    if score[1] == Name:
        print(Name, ', you are rank number', rank)

`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/vocabApp.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Vocab App</p>
                  </div>
                  <a className = "btn-black" href = "/coding">←</a>
                  </div>
              </div>
              );
          }
          
    // }
    
      
