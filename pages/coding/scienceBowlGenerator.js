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

    var code = `print('SCIENCE BOWL GENERATOR VERSION 0.1\nAuthor: Christopher Chen\nCopyright© 2016\n\n')
    print('Welcome to Science Bowl Generator.\nHere you can generate Science Bowl Problems with speed and style. Enjoy!\n')
    problem_type = []
    LIFE_SCIENCE = []
    PHYSICAL_SCIENCE = []
    MATH = []
    GENERAL_SCIENCE = []
    EARTH_SCIENCE = []
    Name = ''
    Title = ''
    import random
    
    def TEST():
        Problems = []
        TestProblems = []
        answer_key = []
        File = open('Questions_Program.txt','r')
        RealFile = File.read()
        Questions = RealFile.split('\n\n')
        for question in Questions:
            if 'ANSWER:' in question:
                answerAndAnswer = question.split('ANSWER:')
                Problems.append(answerAndAnswer)
        MAX = len(Problems)
        Title = str(input('What do you want your title to be?\n'))
        Name = str(input('What is the creators name?\n'))
        Subject = input('Do you want to choose a specific topic? If yes, enter one of the following letters:\nA) Life Science\nB) Physical Science\nC) Math\nD) General Science\nE) Earth Science\nIf no, just simply enter nothing.\n')
        while Subject.lower() != 'a' and Subject.lower() != 'b' and Subject.lower() != 'c' and Subject.lower() != 'd' and Subject.lower() != 'e' and Subject != '':
            Subject = input('That input cannot be accepted because either it does not match any of the choices.\nDo you want to choose a specific topic? If yes, enter one of the following letters:\nA) Life Science\nB) Physical Science\nC) Math\nD) General Science\nE) Earth Science\nIf no, just simply enter nothing.\n')
        if Subject.lower() == 'a':
            Subject = 'LIFE SCIENCE'
        if Subject.lower() == 'b':
            Subject = 'PHYSCIAL SCIENCE'
        if Subject.lower() == 'c':
            Subject = 'MATH'
        if Subject.lower() == 'd':
            Subject = 'GENERAL SCIENCE'
        if Subject.lower() == 'e':
            Subject = 'EARTH SCIENCE'
        if Subject != '':
            Problems = []
            Questions = (RealFile.split('---' + Subject + '---')[1])
            Questions = Questions.split('\n\n')
            for problem in Questions:
                if problem == '':
                    Questions.remove(problem)
            for problem in Questions:
                answerAndAnswer = problem.split('ANSWER:')
                Problems.append(answerAndAnswer)
            MAX = len(Problems)
        NumberOfQuestions = input('How many questions do you want(1 to ' + str(MAX) + ')?\n')
        while (NumberOfQuestions.isdigit() == False) or (int(NumberOfQuestions) <= 0) or (int(NumberOfQuestions) >= MAX+1):
            NumberOfQuestions = input('That input cannot be accepted because it is either too much, too little, or it\'s simply not an integer. How many questions do you want(1 to ' + str(MAX) + ')?\n')
            str(NumberOfQuestions)
        NumberOfQuestions = int(NumberOfQuestions)
        UsedQuestions = []
        for question in range(0,NumberOfQuestions):
            question = random.randrange(0,MAX)
            while question in UsedQuestions:
                question = random.randrange(0,MAX)
            UsedQuestions.append(question)
            TestProblems.append(Problems[question][0])
            answer_key.append(Problems[question][1])
        Answer_Key = open('Answers.txt','w')
        Problem_Set = open('Problems.txt','w')
        problemnumber = 1
        if Title != '':
            Problem_Set.write(Title.upper())
            Answer_Key.write(Title.upper() + '\nANSWER KEY')      
        if Name != '':
            Problem_Set.write('\n\n' + 'CREATOR:' + Name.upper() + '\n\n')
            Answer_Key.write('\n\n' + 'CREATOR:' + Name.upper() + '\n\n')
        for answer in answer_key:
            Answer_Key.write(str(problemnumber) + ')' + answer + '\n')
            problemnumber += 1
        problemnumber = 1
        for testproblem in TestProblems:
            Problem_Set.write(str(problemnumber)+ ')' +testproblem + '\n')
            problemnumber += 1
        print('In your files, you will find two text files named Answers.txt and Problems.txt.\nThanks for using Science Bowl Generator!!')
    TEST()      
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/scienceBowlGenerator.png" layout="fill" className="h-full object-center group-hover:opacity-75 image shadow-2xl" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Science Bowl Generator</p>
                  </div>
                  <a className = "btn" href = "/coding">←</a>
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