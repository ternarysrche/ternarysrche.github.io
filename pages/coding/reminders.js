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

    var code = `print('Habits Copyright © 2017\nVersion: 0.1\nAuthor: Christopher Chen\n\n')
    import time
    import winsound
    import random
    print('Welcome to Habits! Here, Habits will remind you to take breaks after long work \nperiods and help you develop good habits.')
    ListOfActivities = ['Drink some water, and take a restroom break.', 'Do 2 sets of 10 pushups!', 'Stand up, walk outside, and walk around for a while.', 'Massage you eyes, and meditate.']
    start = str(input('Please get ready to choose a ringtone. Also, adjust your speakers to a tolerable\nrate, so the ringtone won\'t be too loud.\nListen carefully in order to hear. When you are ready, just press ENTER.\n'))
    for ringtone in range(1,6):
        print('Here is ringtone ' + str(ringtone) + ':')
        ringtone = 'sms-alert-' + str(ringtone) + '-daniel_simon.wav'
        winsound.PlaySound(ringtone, winsound.MB_OK)
        time.sleep(1)
        if ringtone != 5:
            hear = input('Enter R if you want to replay the sound, if you do not want to replay the \nsound, then just enter nothing.\n')
            while hear == 'R':
                winsound.PlaySound(ringtone, winsound.MB_OK)
                hear = input('Enter R if you want to replay the sound, if you do not want to replay the \nsound, then just enter nothing.\n')
    ringtone = str(input('Please choose one of the ringtones. Enter either 1, 2, 3, 4, or 5.\n'))
    while ringtone != '1' and ringtone != '2' and ringtone != '3' and ringtone != '4' and ringtone != '5':
        ringtone = str(input('That input is not in the choices. \nPlease choose one of the ringtones. Enter either 1, 2, 3, 4, or 5.\n'))
    int(ringtone)
    ringtone = 'sms-alert-' + str(ringtone) + '-daniel_simon.wav'
    time_split = input('Which of the following time plans do you want?\nA) 30 minutes of work & 30 minutes of rest\nB) 35 minutes of work & 25 minutes of rest\nC) 40 minutes of work & 20 minutes of rest\nD) 45 minutes of work & 15 minutes of rest\nE) 50 minutes of work & 10 minutes of rest.\nPlease choose A, B, C, D, or E.\n')
    while time_split.upper() != 'A' and time_split.upper() != 'B' and time_split.upper() != 'C' and time_split.upper() != 'D' and time_split.upper() != 'E':
        time_split = input('That input is not valid.\nWhich of the following time plans do you want?\nA) 30 minutes of work & 30 minutes of rest\nB) 35 minutes of work & 25 minutes of rest\nC) 40 minutes of work & 20 minutes of rest\nD) 45 minutes of work & 15 minutes of rest\nE) 50 minutes of work & 10 minutes of rest.\nPlease choose A, B, C, D, or E.\n')
    if time_split.upper() == 'A':
        time_time = 30
    if time_split.upper() == 'B':
        time_time = 35
    if time_split.upper() == 'C':
        time_time = 40
    if time_split.upper() == 'D':
        time_time = 45
    if time_split.upper() == 'E':
        time_time = 50
    #print(time_time)
    while True:
        print('Time to Work!!\t\t' + time.asctime().split()[3])
        time.sleep(60*time_time)
        activity = random.randrange(len(ListOfActivities))
        winsound.PlaySound(ringtone, winsound.MB_OK)
        print(ListOfActivities[activity] + '\t\t' + time.asctime().split()[3])
        time.sleep(60*(60 - time_time))
        winsound.PlaySound(ringtone, winsound.MB_OK)    
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/reminders.png" layout="fill" className="h-full object-center group-hover:opacity-75 image" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Healthy Sitting Habits Program</p>
                  </div>
                  <a className = "btn" href = "/coding">←</a>
                  </div>
              </div>
              );
}