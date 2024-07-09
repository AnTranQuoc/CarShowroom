
import lamboLogo from "/logos/lambo.webp";

import ferrariLogo from "/logos/ferrari.webp";

import bugatti from "/logos/bugatti.webp"

import italy from "/countryflags/it.svg"

import germany from "/countryflags/de.svg"

import chiron_intro from "/Video/intro_chiron.mp4"

import f12_intro from "/Video/intro_f12.mp4"

import lb_intro from "/Video/intro_lambor.mp4"

import f12Sound from "/audio/carsounds/f12.mp3";

import huracanSound from "/audio/carsounds/huracan.mp3";

import viper from "/audio/carsounds/viper.mp3";

export const cars = [
  
  {
    logo: ferrariLogo,
    video: f12_intro,
    country: italy,
    manufacturer: "Ferrari",
    model: "F12berlinetta",
    year: "2012",
    sound: f12Sound,
    colors: [
      {
        name: "Argento Nurburgring",
        hexCode: "#999C9C",
      },
      {
        name: "Bianco Avus",
        hexCode: "#BBBEB0",
      },
      {
        name: "Blu Abu Dhabi",
        hexCode: "#002A3B",
      },
      {
        name: "Blu Mirabeau",
        hexCode: "#1F3C59",
      },
      {
        name: "Blu Pozzi",
        hexCode: "#050526",
      },
      {
        name: "Blu Tour de France",
        hexCode: "#001F3D",
      },
      {
        name: "Giallo Modena",
        hexCode: "#BF9A00",
      },
      {
        name: "Grigio Alloy",
        hexCode: "#849BA9",
      },
      {
        name: "Grigio Ingrid",
        hexCode: "#5F584C",
      },
      {
        name: "Grigio Silverstone",
        hexCode: "#424341",
      },
      {
        name: "Grigio Titanio",
        hexCode: "#737B7D",
      },
      {
        name: "Nero",
        hexCode: "#040607"
      },
      {
        name: "Nero Daytona",
        hexCode: "#121212",
      },
      {
        name: "Rosso Corsa",
        hexCode: "#9E0001",
      },
      {
        name: "Rosso Mugello",
        hexCode: "#4C0007",
      },
      {
        name: "Rosso Scuderia",
        hexCode: "#B00000",
      },
    ],
    displacement: "6,262 cc",
    maxPower: "730 BHP",
    torque: "509 lb-ft",
    drivetrain: "RWD",
    length: "4,618 mm",
    width: "1,942 mm",
    height: "1,273 mm",
    weight: "1,525 kg",
    description: `"The flagship model of Ferrari wasn't just fast, it was a 
    technological marvel." Ferrari unveiled its might new flagship, the F12 
    Berlinetta, in 2012 at the Geneva Motor Show. The successor to the 599 GTB 
    Fiorano featured a newly-designed base structure whose space frame and body 
    shell combined 12 different types of aluminum alloys. The front mid-mounted 
    engine came in the form of a naturally aspirated 6262 cc V-12 producing 
    729.7 HP and 509.9 ft-lb of peak torque, making it the most powerful Ferrari 
    road car to date. Impressive numbers, to be sure, but Ferrari spent a majority 
    of its development effort on the car's architecture. The F12 Berlinetta was 1.8 
    inches shorter, 0.7 inches narrower and 2.4 inches lower than its predecessor, 
    with a wheelbase that measured 1.1 inches less. The engine sat 1.1 inches lower 
    than the 599, and the dual clutch 7-speed F1-matic gearbox utilized a transaxle 
    layout—both of these features helped to lower the center of gravity by 0.9 inches 
    and established a nearly ideal front/rear weight ratio of 46:54. On the road, 
    the F12 Berlinetta, despite its elegant good looks, was an  absolute beast. 
    It ran from zero to 100 km/h in a phenomenal 3.1 seconds, getting to 200 km/h 
    in just 8.5, and topping out at a blurring 340 km/h. With its improved handling 
    balance, it set a new fastest road car lap around the Fiorano test track, 
    besting the 599 GTO by a full second. With refined aerodynamics, advanced 
    electronic devices and a brake cooling system that trickled down from its 
    Formula 1 race car, this prancing horse deserved to be the flagship for what 
    is arguably the most revered and recognized company in automotive history.`,
  },
 
  {
    logo: lamboLogo,
    video: lb_intro,
    country: italy,
    manufacturer: "Lamborghini",
    model: "Huracán",
    sound: viper,
    year: "2015",
    colors: [
      {
        name: "Arancio Borealis",
        hexCode: "#FBA400",
      },
      {
        name: "Bianco Canopus",
        hexCode: "#B7B9B7",
      },
      {
        name: "Bianco Icarus",
        hexCode: "#B7C0BF",
      },
      {
        name: "Bianco Monocerus",
        hexCode: "#B6BAB8",
      },
      {
        name: "Blu Caelum",
        hexCode: "#002669",
      },
      {
        name: "Grigio Admetus",
        hexCode: "#6B685C",
      },
      {
        name: "Grigio Lynx",
        hexCode: "#707176",
      },
      {
        name: "Grigio Nimbus",
        hexCode: "#7F8282",
      },
      {
        name: "Giallo Inti",
        hexCode: "#AA850E",
      },
      {
        name: "Giallo Horus",
        hexCode: "#947205",
      },
      {
        name: "Nero Helene",
        hexCode: "#151618",
      },
      {
        name: "Nero Nemesis",
        hexCode: "#312F30",
      },
      {
        name: "Nero Noctis",
        hexCode: "#292927",
      },
      {
        name: "Rosso Mars",
        hexCode: "#BE0001",
      },
      {
        name: "Verde Mantis",
        hexCode: "#6BB716",
      },
    ],
    displacement: "5,204 cc",
    maxPower: "602 BHP",
    torque: "413 lb-ft",
    drivetrain: "AWD",
    length: "4,459 mm",
    width: "2,236 mm",
    height: "1,165 mm",
    weight: "1,422 kg",
    description: `The Huracán was first shown at the 2014 Geneva Motor Show as 
    the successor to Lamborghini's most successful model to date, the Gallardo.
    The reason for the popularity of the Gallardo, which kept it in production 
    for 10 years, was the relatively compact body for a Lamborghini and the 
    resulting agility of the car that gave it a well-balanced level of performance 
    befitting the 'Supercar' label. The Huracán carries on these base 
    characteristics and though the length and width of the car have been 
    slightly enlarged, it was kept very close to the size of the Gallardo. 
    The styling however was changed drastically. Although it shares the base 
    wedge shape, the soulful form with its combination of curved lines and 
    surfaces sets it apart from the linear Gallardo and signifies that 
    Lamborghini design has entered its next phase. In terms of the car's 
    structure, it has evolved from an aluminium space frame to an aluminium and 
    carbon hybrid. This made the body 10% lighter and 50% higher in rigidity. 
    Mounted mid-ship in this shell is a fully revamped 5.2 litre V10 producing 
    601 BHP / 57.1 kgfm. This power is transferred through Lamborghini's first 
    7-speed dual clutch transmission and the new Haldex 5 AWD system to the ground.
    In addition, an integrated drive control system called ANIMA was added to 
    instantly switch the engine, transmission, AWD and handling characteristics 
    to cover everything from urban driving to circuit runs. With a top speed of 
    325 km/h and a 0-100 km/h acceleration of 3.2 seconds, it wouldn't do it 
    justice to call it a 'baby' Lambo anymore.`,
  },

  {
    logo: bugatti,
    video: chiron_intro,
    country: germany,
    manufacturer: "Bugatti",
    model: "Chiron",
    year: "2021",
    sound: huracanSound,
    colors: [
      //{
      //  name: "temp1",
      //  hexCode: ["#6B685C", "#7F8282"]
      //},
      {
        name: "Argento Nurburgring",
        hexCode: "#999C9C",
      },
      {
        name: "Bianco Avus",
        hexCode: "#BBBEB0",
      },
      {
        name: "Blu Abu Dhabi",
        hexCode: "#002A3B",
      },
      {
        name: "Arancio Borealis",
        hexCode: "#FBA400",
      },
      {
        name: "Blu Caelum",
        hexCode: "#002669",
      },
      {
        name: "Grigio Admetus",
        hexCode: "#6B685C",
      },
      {
        name: "Grigio Lynx",
        hexCode: "#707176",
      },
      {
        name: "Grigio Nimbus",
        hexCode: "#7F8282",
      },
      {
        name: "Giallo Inti",
        hexCode: "#AA850E",
      },
      {
        name: "Giallo Horus",
        hexCode: "#947205",
      },
      {
        name: "Nero Helene",
        hexCode: "#151618",
      },
      {
        name: "Nero Nemesis",
        hexCode: "#312F30",
      },
      {
        name: "Nero Noctis",
        hexCode: "#292927",
      },
      {
        name: "Rosso Mars",
        hexCode: "#BE0001",
      },
      {
        name: "Verde Mantis",
        hexCode: "#6BB716",
      }
    ],
    displacement: "8,000 cc",
    maxPower: "1,500 BHP",
    torque: "1,600 lb-ft",
    drivetrain: "AWD",
    length: "4,500 mm",
    width: "2,000 mm",
    height: "1,200 mm",
    weight: "1,800 kg",
    description: `The Bugatti Chiron is a mid-engine two-seater sports car developed and manufactured in 
    Molsheim, France by French automobile manufacturer Bugatti Automobiles S.A.S. 
    The successor to the Bugatti Veyron, the Chiron was first shown at the Geneva Motor Show on 1 March 2016.
    The car is based on the Bugatti Vision Gran Turismo concept car. The car is named after 
    the Monegasque driver Louis Chiron. The main carryover component from the 
    Veyron is the quad-turbocharged W16 engine, though it is heavily updated. 
    The Chiron has 1,103 kW (1,500 PS; 1,479 hp) of power and 1,600 N⋅m (1,180 lb⋅ft) of torque starting from 2000 rpm.
    The Chiron can accelerate from 0-97 km/h (0-60 mph) in 2.4 seconds according to the manufacturer, 0-200 km/h (0-124 mph) in 6.5 seconds and 0-300 km/h (0-186 mph) in 13.6 seconds.
    In a world-record-setting test at the Volkswagen Group's Ehra-Lessien test track, the Chiron reached a verified top speed of 420 km/h (261 mph) for the Chiron and 304 mph (490 km/h) for the Chiron Super Sport 300+.`,
  }
];
