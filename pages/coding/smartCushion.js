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

    var code = `/*********************************************
*  Program Name: Smart Cushion              *
*  Description: A cushion that is used      *
*               to limit your sitting time. *
*  Date: 2/5/18                             *
*  Revision: V1.0                           *
*  Author: Christopher Chen                 *
*********************************************/
/* Bug: After a while, average is too high, calculated as sitting when not sitting*/
// Setup
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
int receiver = 2;
String recent = "";

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
#define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

//LiquidCrystal_I2C lcd(0x3f,16,2);

//variables declaration
int unsitting_Count = 0;
int official_minutes = 5;
int minutes = 5;
int calibration = 0;
int calibration_sum = 0;

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.display();
//  lcd.begin(16,2);
//  lcd.init();                     
//  lcd.init();
//  lcd.backlight();
  pinMode(A0, INPUT_PULLUP);
  pinMode(9, INPUT_PULLUP);
  pinMode(10, INPUT_PULLUP);
  pinMode(11, INPUT_PULLUP);
  pinMode(12, OUTPUT);
  Serial.begin(9600);

  //print Loading...
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(WHITE);
  display.setCursor(0,10);
  display.clearDisplay();
  display.setCursor(0,10);
  display.println("LOADING         ");
  for (int dots = 0; dots < 6; dots ++) {
    display.setCursor((83 + dots*6),10);
    display.println(".");
    display.display();
    delay(1000);
  }
  display.clearDisplay();
  delay(1000);
  display.display();
  //calibration
  display.setCursor(0,0);                    //calibration_start
  display.println("Don't sit down. ");   
  display.display();                   
  delay(3000);           
  
  display.clearDisplay();   
  display.setTextSize(2);                            
  display.setCursor(0,0);
  display.println("CALI");
  display.setCursor(0,15);
  display.println("BRATING");
  display.display();
  for (int counter = 0; counter < 100; counter++) {
    if (counter % 20 == 0) {
      display.setCursor((11 + counter/2),24);
      display.println(".");
      display.display();
    }
    calibration_sum += 0;//analogRead(A0)/10;
    delay(100);
  }
  calibration = calibration_sum/10 - 75;
  Serial.println(calibration);          //calibration_end
  display.clearDisplay();
  display.display();
}

void loop() {
  
  /*//if setup button pressed, start
  if (digitalRead(11) == 0) {       
    while (digitalRead(11) == 0) {      //wait till unpressed
      delay(1);
    }
    display.clearDisplay();
    display.setCursor(0,0);                //display SETUP Mode
    display.println("SETUP");
    display.setCursor(50,26);
    display.println(minutes);
    display.display()
    delay(1);
    
    //while the setup button isn't pressed again,
    while (digitalRead(11) != 0) { 
      //detect buttons + and -, and respond accordingly
      if (digitalRead(10) == 0) {  
        while (digitalRead(10) == 0) {
          delay(1);
        }
        if (minutes < 50) {
          minutes ++;
          display.clearDisplay();
          display.setCursor(0,0);              
          display.println("SETUP");
          display.setCursor(50,26);
          display.print(minutes);
          display.display();
        }
      }
      if (digitalRead(9) == 0) {
        while (digitalRead(9) == 0) {
          delay(1);
        }
        if (minutes > 1) {
          minutes -= 1;
          display.clearDisplay();
          display.setCursor(0,0);                
          display.println("SETUP");
          display.setCursor(50,26);
          display.print(minutes);
          display.display();
        }
      }
      delay(1);
    }     
    //when SETUP button is pressed again, wait till unpressed,                                
    while (digitalRead(11) == 0) {             
      delay(1);                                
    } // exit setup mode
  }
  official_minutes = minutes;          //reset inside timer
  
  if (analogRead(A0) < calibration) {  //if the pillow is being sat on, start

    //display that you are sitting
    display.clearDisplay();
    display.setCursor(0,0); 
    display.println("YOU ARE");
    display.setCursor(0,15);
    display.println("SITTING");
    display.display();
    //start couting timer
    unsitting_Count = 0;
    
    //timer for how ever preset time
    for (int counter2 = 0; counter2 < 600 * minutes; counter2++) {  
      Serial.println(counter2);
      //displaying the remaining time  
      display.setCursor(52,16);
      display.println(minutes - counter2/600);     
      display.display();                         
      Serial.println(counter2);
      
      if (digitalRead(11) == 0) {       //if setup button pressed_start
        while (digitalRead(11) == 0) {  //wait till unpressed
          delay(1);
        }
        display.clearDisplay();
        display.setCursor(0,0);                //display SETUP Mode
        display.println("SETUP");
        display.setCursor(50,26);
        display.println(minutes);
        display.display()
        delay(1);
        delay(1);
        //while the setup button isn't pressed again,
        while (digitalRead(11) != 0) {  
          //detect buttons + and -, and respond accordingly       
          if (digitalRead(10) == 0) {          
            while (digitalRead(10) == 0) {
              delay(1);
            }
            if (minutes < 50) {
              minutes ++;
      display.clearDisplay();
              display.setCursor(44,16);
              display.println(minutes);
            }
          }
          if (digitalRead(9) == 0) {
            while (digitalRead(9) == 0) {
              delay(1);
            }
            if (minutes > 1) {
              minutes -= 1;
              lcd.setCursor(11,1);
              lcd.print(minutes);
              lcd.print( " ");      
            } 
          }
          delay(1);
        }
        //when button is pressed again, wait till unpressed
        while (digitalRead(11) == 0) {        
          delay(1);
        }
        break;
      }
      official_minutes = minutes;             //reset inside timer
      
      
      if (analogRead(A0) < calibration) {     //if you are sitting
        //Serial.println(i);
        unsitting_Count = 0;
        //when time is up, beep until you stand up
        if (counter2 >= (600 * minutes) - 1) {
          int n = 1;
          while (analogRead(A0) < calibration) { 
            tone(12, 440);
            n ++;
            delay(100);
          } 
          noTone(12);
        } 
        
      }
        else {
          unsitting_Count += 1;
          //Serial.println(i);
          if (unsitting_Count >= 50) {  //If you are standing
            unsitting_Count = 0;
            break;
          } 
        }
        delay(100);
    }
  }
  //if you are not sitting for five seconds or more:
  else {
    minutes = official_minutes;
    digitalWrite(8, LOW);
    lcd.setCursor(0,0);
    lcd.print("You aren't      ");
    lcd.setCursor(0,1);
    lcd.print("sitting         ");
    //lcd.setCursor(9,1);
    //lcd.print(analogRead(A0));
    //Serial.println(analogRead(A0));
    lcd.print("        ");
  }
  delay(250);*/
}   
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/smartCushion.JPG" layout="fill" className="h-full object-center group-hover:opacity-75 image shadow-2xl" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">Smart Cushion</p>
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