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

    var code = `// I could not find the Python code I used for the Raspberry Pi, but here is the C/C++ Arduino Prototyping predecessor
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Fonts/FreeMonoOblique9pt7b.h>

#include "DHT.h"
#include <DHT_U.h>

#define DHTPIN 8
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
DHT dht(DHTPIN, DHTTYPE);

#define LOGO_HEIGHT   64
#define LOGO_WIDTH    64

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET     -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

const int MOSFETPIN = 9;

#define LUMPIN A0

String settings[2] = {"Temp.", "Humidity"};
int setting = 0;

int temperature = 72;
int humidity = 50;

static const unsigned char PROGMEM logo_bmp[] =
{ B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B01111111, B11111111, B11000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B11100000, B00000000, B00111111, B11111111, B11100000, B00000000,
  B00000000, B00000001, B01011000, B00000000, B00000000, B00000000, B00110000, B00000000,
  B00000000, B00000010, B01000110, B00000000, B00000000, B00000000, B01010000, B00000000,
  B00000000, B00000100, B01000001, B10000000, B00000000, B00000000, B01001000, B00000000,
  B00000000, B00001000, B10000000, B01100000, B00000000, B00000000, B01001000, B00000000,
  B00000000, B00010000, B10000000, B00011000, B00000000, B00000000, B01000100, B00000000,
  B00000000, B00100000, B10000000, B00000110, B00000000, B00000000, B10000100, B00000000,
  B00000000, B01000000, B10000000, B00000001, B10000000, B00000000, B10000010, B00000000,
  B00000000, B10000000, B10000000, B00000000, B01100000, B00000000, B10000010, B00000000,
  B00000001, B00000000, B10000000, B00000000, B00011000, B00000000, B10000001, B00000000,
  B00000010, B00000001, B00000000, B00000000, B00000110, B00000001, B00000001, B00000000,
  B00000100, B00000001, B00000000, B00000000, B00000001, B10000001, B00000000, B10000000,
  B00001000, B00000001, B00000000, B00000000, B00000000, B11000010, B00000000, B10000000,
  B00010000, B00000001, B00000000, B00000000, B00000000, B00011111, B00000000, B01000000,
  B00100000, B00000001, B00000000, B00000000, B00000000, B00111010, B11000000, B01000000,
  B01000000, B00000010, B00000000, B00000000, B00000001, B11000010, B00100000, B00100000,
  B11100000, B00000010, B00000000, B00000000, B00001110, B00000010, B00010000, B00100000,
  B01010000, B00000010, B00000000, B00000000, B01110000, B00000010, B00001000, B00010000,
  B01001000, B00000010, B00000000, B00000011, B10000000, B00000100, B00000110, B00010000,
  B00100100, B00000100, B00000000, B00011100, B00000000, B00000100, B00000001, B00001000,
  B00100010, B00000100, B00000000, B11100000, B00000000, B00000100, B00000000, B10001000,
  B00100001, B00000100, B00000111, B00000000, B00000000, B00000100, B00000000, B01000100,
  B00010000, B10000100, B00111000, B00000000, B00000000, B00001000, B00000000, B00110100,
  B00010000, B01000100, B11000000, B00000000, B00000000, B00001000, B00000000, B00001010,
  B00001000, B00101011, B00000000, B00000000, B00000000, B00001000, B00000000, B00000110,
  B00001000, B00011100, B00000000, B00000000, B00000000, B00001000, B00000000, B00000011,
  B00000111, B11111111, B11111111, B11111111, B11111111, B11111111, B11111111, B11111111,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B11111111, B11110000, B00000111, B11111000, B00111000, B00000000, B11101111, B11111111,
  B00100000, B00001000, B00001000, B00000100, B00010100, B00000001, B01000100, B00000001,
  B00100000, B00000100, B00010000, B00000010, B00010010, B00000010, B01000100, B00000001,
  B00100000, B00000010, B00100000, B00000001, B00010001, B00000100, B01000100, B00000000,
  B00100000, B00000010, B00100000, B00000001, B00010000, B10001000, B01000100, B00000000,
  B00100000, B00000010, B01000000, B00000000, B10010000, B01010000, B01000100, B00000000,
  B00100000, B00000010, B01000000, B00000000, B10010000, B00100000, B01000100, B00000000,
  B00100000, B00000010, B01000000, B00000000, B10010000, B00000000, B01000100, B00000000,
  B00100000, B00000010, B01000000, B00000000, B10010000, B00000000, B01000111, B1111110,
  B00100000, B00000010, B01000000, B00000000, B10010000, B00000000, B01000100, B00000000,
  B00100000, B00000010, B01000000, B00000000, B10010000, B00000000, B01000100, B00000000,
  B00100000, B00000010, B00100000, B00000001, B00010000, B00000000, B01000100, B00000000,
  B00100000, B00000010, B00100000, B00000001, B00010000, B00000000, B01000100, B00000000,
  B00100000, B00000100, B00010000, B00000010, B00010000, B00000000, B01000100, B00000001,
  B00100000, B00001000, B00001000, B00000100, B00010000, B00000000, B01000100, B00000001,
  B11111111, B11110000, B00000111, B11111000, B00111000, B00000000, B11101111, B11111111,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000,
  B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000
};

void setup() {
  //DHT
  dht.begin();
  //initialize Serial
  Serial.begin(9600);

  //buttons
  pinMode(13, INPUT_PULLUP); //Red
  pinMode(12, INPUT_PULLUP); //Green
  pinMode(11, INPUT_PULLUP); //Black1
  pinMode(10, INPUT_PULLUP); //Black2
  //OLED setup
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  //Auto-PowerOff Setup
  pinMode(MOSFETPIN, OUTPUT);
  digitalWrite(MOSFETPIN, HIGH);
  //initialization logo
  display.display();
  display.setCursor(0, 0);
  testdrawbitmap();
  display.display();
  delay(4000);
}

void loop() {
  float curTemperature = dht.readTemperature(true);
  float curHumidity = dht.readHumidity();
  display.setTextSize(2);
  display.clearDisplay();
  if (black1Press()) {
    setting --;
    setting = (sizeof(settings) / sizeof(settings[0]) - setting) % (sizeof(settings) / sizeof(settings[0]));
  }
  else if (black2Press()) {
    setting ++;
    setting = (setting) % (sizeof(settings) / sizeof(settings[0]));
  }
  for (int i = 0; i <= 1; i ++) {
    display.setTextSize(2);
    display.setCursor(0, i * (64 / (sizeof(settings) / sizeof(settings[0]))));
    if (i == setting) {
      display.setTextColor(BLACK, WHITE);
      display.print(settings[i]);
      if (i == 0) {
        display.setTextSize(1);
        display.setCursor(0,15 + i * (64 / (sizeof(settings) / sizeof(settings[0]))));
        display.print("Current Temp:");
        display.print(curTemperature);
        display.print("F");
      }
      else {
        display.setTextSize(1);
        display.setCursor(0,15 + i * (64 / (sizeof(settings) / sizeof(settings[0]))));
        display.print("Current Humidity:");
        display.print(curHumidity);
      }
      display.setTextColor(WHITE, BLACK);
    }
    else {
      display.print(settings[i]);
      if (i == 0) {
        display.setTextSize(1);
        display.setCursor(0,15 + i * (64 / (sizeof(settings) / sizeof(settings[0]))));
        display.print("Current Temp:");
        display.print(curTemperature);
        display.print("F");
      }
      else {
        display.setTextSize(1);
        display.setCursor(0,15 + i * (64 / (sizeof(settings) / sizeof(settings[0]))));
        display.print("Current Humidity:");
        display.print(curHumidity);
      }
    }
  }
  display.display();
  if (redPress()) {
    display.setTextSize(1);
    display.clearDisplay();
    display.setCursor(0, 10);
    display.print("     Power Off?     ");
    display.setCursor(0, 32);
    display.print("YES(Green)   NO(Red)");
    display.display();
    bool x = true;
    while (x) {
      if (greenPress()) {
        x = false;
        digitalWrite(MOSFETPIN, LOW);
      }
      if (redPress()) {
        x = false;
      }
      delay(50);
    }
  }
  if (greenPress()) {
    if (setting == 0) {
      display.clearDisplay();
      display.setTextSize(2);
      display.setCursor(0, 10);
      display.print("   Temp.  ");
      while (!redPress() && !greenPress()) {
        if (black1Press()) {
          temperature --;
        }
        else if (black2Press()) {
          temperature ++;
        }
        display.setCursor(0, 32);
        display.print("  < ");
        display.print(temperature);
        display.print(" >  ");
        display.display();
        delay(50);
      }

    }
    if (setting == 1) {
      display.setTextSize(2);
      display.clearDisplay();
      display.setCursor(0, 0);
      display.print(" Humidity ");
      display.setCursor(0, 32);
      display.print("  < ");
      display.print(humidity);
      display.print(" >  ");
      display.display();
      while (!redPress() && !greenPress()) {
        if (black1Press()) {
          humidity --;
        }
        else if (black2Press()) {
          humidity ++;
        }
        display.setCursor(0, 32);
        display.print("  < ");
        display.print(humidity);
        display.print(" >  ");
        display.display();
        delay(50);
      }
    }
  }
  //  lcd.setCursor(0,0);
  //  lcd.print("fea");
  //  delay(2000);
  //
  //  float HUMIDITY = dht.readHumidity();
  //  // Read temperature as Celsius (the default)
  //  //float t = dht.readTemperature();
  //  // Read temperature as Fahrenheit (isFahrenheit = true)
  //  float FAHRENHEIT = dht.readTemperature(true);
  //  // Check if any reads failed and exit early (to try again).
  //  if (isnan(HUMIDITY) || isnan(FAHRENHEIT)) {
  //    Serial.println("Failed to read from DHT sensor!");
  //    return;
  //  }
  //
  //
  //
  //  int LUMVALUE = analogRead(LUMPIN);
  //
  //
  //
  //  Serial.print("Humidity: ");
  //  Serial.println(HUMIDITY);
  //  Serial.print("Temperature: ");
  //  Serial.print(FAHRENHEIT);
  //  Serial.println("°F ");
  //  Serial.print("Brightness: ");
  //  Serial.println(LUMVALUE);
  delay(100);
}
void testdrawbitmap(void) {
  display.clearDisplay();

  display.drawBitmap(
    (display.width()  - LOGO_WIDTH ) / 2,
    (display.height() - LOGO_HEIGHT) / 2,
    logo_bmp, LOGO_WIDTH, LOGO_HEIGHT, 1);
  display.display();
  delay(1000);
}
bool redPress() {
  if (digitalRead(13) == LOW)
    while (digitalRead(13) == LOW) {}
  else {
    return false;
  }
  return true;
}
bool greenPress() {
  if (digitalRead(12) == LOW)
    while (digitalRead(12) == LOW) {}
  else {
    return false;
  }
  return true;
}
bool black1Press() {
  if (digitalRead(11) == LOW)
    while (digitalRead(11) == LOW) {}
  else {
    return false;
  }
  return true;
}
bool black2Press() {
  if (digitalRead(10) == LOW)
    while (digitalRead(10) == LOW) {}
  else {
    return false;
  }
  return true;
}
`
          return (
              <div className="isolate bg-white h-screen place-content-center justify-center items-center">
                <div class="grid grid-cols-2 gap-4 p-8 min-h justify-center items-center">
                  <div className="imageContainer">
                      <Image src="/screenshots/dome1.png" layout="fill" className="border h-fit object-center group-hover:opacity-75 image shadow-2xl" />
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-auto border-2">
                  <pre><code class="language-python">{code}</code></pre>
                  </div>
                  </div>
                  <div className = "grid place-items-center">
                      <div>
                  {/* <h3 className="mt-4 text-xl text-gray-700 text-center">idk yet</h3> */}
                  <p className="mt-1 text-4xl font-medium text-gray-900 text-center">DOME - Smart Thermostat</p>
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