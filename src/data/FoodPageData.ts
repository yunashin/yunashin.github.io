import { FoodImage } from "../types/FoodPageTypes";

// Food tags
export const HOMEMADE = "#homemade";
export const OMAKASE = "#omakase";
export const BOSTON = "#boston";
export const NYC = "#nyc";
export const JERSEY_CITY = "#jersey-city";
export const HOBOKEN = "#hoboken";
export const ROCKLAND_COUNTY = "#rockland-county";
export const TORONTO = "#toronto";
export const MEXICO = "#mexico";
export const SOUTH_KOREA = "#south-korea";
export const JAPAN = "#japan";
export const HAWAII = "#hawaii";
export const CAPE_COD = "#cape-cod";
export const NANTUCKET = "#nantucket";
export const CANNES = "#cannes";
export const NICE = "#nice";
export const MENTON = "#menton";
export const MONACO = "#monaco";
export const TANGLEWOOD = "#tanglewood";
export const SALEM = "#salem";
export const PROVIDENCE = "#providence";
export const CAFE = "#cafe";
export const BRUNCH = "#brunch";
export const COCKTAILS = "#cocktails";
export const ICE_CREAM = "#ice-cream";
export const SEAFOOD = "#seafood";
export const KOREAN = "#korean";
export const HAWAIIAN = "#hawaiian";
export const CHINESE = "#chinese";
export const INDIAN = "#indian";
export const FRENCH = "#french";
export const SPANISH = "#spanish";
export const ITALIAN = "#italian";
export const MEXICAN = "#mexican";
export const THAI = "#thai";
export const JAPANESE = "#japanese";
export const AMERICAN = "#american";
export const MEDITERRANEAN = "#mediterranean";
export const BAKERY = "#bakery";

export const LOCATION_FOOD_TAGS = [
  HOMEMADE,
  BOSTON,
  NYC,
  TORONTO,
  MEXICO,
  SOUTH_KOREA,
  JAPAN,
  HAWAII,
  CAPE_COD,
  NANTUCKET,
  CANNES,
  NICE,
  MENTON,
  MONACO,
  TANGLEWOOD,
  PROVIDENCE,
  ROCKLAND_COUNTY,
  JERSEY_CITY,
  HOBOKEN,
  SALEM,
].sort((a, b) => a.localeCompare(b));

export const CUISINE_FOOD_TAGS = [
  AMERICAN,
  BRUNCH,
  CAFE,
  BAKERY,
  FRENCH,
  SPANISH,
  ITALIAN,
  MEDITERRANEAN,
  MEXICAN,
  THAI,
  JAPANESE,
  KOREAN,
  INDIAN,
  HAWAIIAN,
  SEAFOOD,
  CHINESE,
  COCKTAILS,
  ICE_CREAM,
  OMAKASE,
].sort((a, b) => a.localeCompare(b));

export const FOOD_TAGS = [
  HOMEMADE,
  ...LOCATION_FOOD_TAGS,
  ...CUISINE_FOOD_TAGS,
];

export const FOOD_PAGE_DATA: FoodImage[] = [
  {
    id: "lucy-and-jane",
    imageUrl: "https://i.imgur.com/utoiRDe.jpeg",
    caption: "(Ube) Lucy Rain from Lucy and Jane Matcha in Seaport",
    tags: [CAFE, BOSTON],
  },
  {
    id: "kantina-0",
    imageUrl: "https://i.imgur.com/4VoGe18.jpeg",
    caption: "Kantina in Sparkill, NY",
    tags: [KOREAN, JAPANESE, CHINESE, MEXICAN, ROCKLAND_COUNTY],
  },
  {
    id: "kantina-1",
    imageUrl: "https://i.imgur.com/5Zgm4c7.jpeg",
    caption: "Kantina in Sparkill, NY",
    tags: [KOREAN, JAPANESE, CHINESE, MEXICAN, ROCKLAND_COUNTY],
  },
  {
    id: "kantina-2",
    imageUrl: "https://i.imgur.com/ksYkxCP.jpeg",
    caption: "Kantina in Sparkill, NY",
    tags: [KOREAN, JAPANESE, CHINESE, MEXICAN, ROCKLAND_COUNTY],
  },
  {
    id: "sushi-by-bosso-1",
    imageUrl: "https://i.imgur.com/g2j6Lz7.jpeg",
    caption: "Sushi by Bosso on Newbury Street",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "sushi-by-bosso-2",
    imageUrl: "https://i.imgur.com/Cx567k6.jpeg",
    caption: "Sushi by Bosso on Newbury Street",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "kings-dining-and-entertainment",
    imageUrl: "https://i.imgur.com/jYiF6Mx.jpeg",
    caption: "Kings Dining & Entertainment in Seaport",
    tags: [AMERICAN, COCKTAILS, BOSTON],
  },
  {
    id: "wagamama-1",
    imageUrl: "https://i.imgur.com/5q7Vdz2.jpeg",
    caption: "Wagamama in Faneuil Hall",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "wagamama-2",
    imageUrl: "https://i.imgur.com/V6AaYzL.jpeg",
    caption: "Wagamama in Faneuil Hall",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "seventy-five-on-liberty-wharf",
    imageUrl: "https://i.imgur.com/xjlPV8Y.jpeg",
    caption: "75 on Liberty Wharf in Seaport",
    tags: [COCKTAILS, BOSTON],
  },
  {
    id: "yogi-gastronomad-0",
    imageUrl: "https://i.imgur.com/xf2FyFk.jpeg",
    caption: "Yogi Gastronomad (Barn Joo) in Nomad, NYC",
    tags: [KOREAN, AMERICAN, NYC],
  },
  {
    id: "yogi-gastronomad-1",
    imageUrl: "https://i.imgur.com/liwPFZv.jpeg",
    caption: "Yogi Gastronomad (Barn Joo) in Nomad, NYC",
    tags: [KOREAN, AMERICAN, NYC],
  },
  {
    id: "wusong-road",
    imageUrl: "https://i.imgur.com/WlHDjHh.jpeg",
    caption: "Wusong Road Tiki Bar in Cambridge",
    tags: [SEAFOOD, COCKTAILS, CHINESE, KOREAN, JAPANESE, BOSTON],
  },
  {
    id: "boston-sail-loft-1",
    imageUrl: "https://i.imgur.com/VIqhi5u.jpeg",
    caption: "Lobster roll from Boston Sail Loft in North End/Waterfront",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "wagamama-0",
    imageUrl: "https://i.imgur.com/IxnBT7v.jpeg",
    caption: "Wagamama in Faneuil Hall",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "flower-drop",
    imageUrl: "https://i.imgur.com/vDTdq4i.jpeg",
    caption: "Homemade Flower Drop cocktails for Halloween",
    tags: [COCKTAILS, HOMEMADE],
  },
  {
    id: "lakon-1",
    imageUrl: "https://i.imgur.com/LTh2mpV.jpeg",
    caption: "Matcha ribbon cake from Lakon in Seaport",
    tags: [BAKERY, CAFE, BOSTON],
  },
  {
    id: "seatopia",
    imageUrl: "https://i.imgur.com/GdiDMGf.jpeg",
    caption: "Homemade Seatopia sushi",
    tags: [JAPANESE, HOMEMADE],
  },
  {
    id: "apple-cider-mimosa",
    imageUrl: "https://i.imgur.com/JA5tQnW.jpeg",
    caption: "Homemade apple cider mimosa",
    tags: [COCKTAILS, HOMEMADE],
  },
  {
    id: "f1-arcade",
    imageUrl: "https://i.imgur.com/q1zyTQH.jpeg",
    caption: "F1 Arcade in Seaport",
    tags: [COCKTAILS, BOSTON],
  },
  {
    id: "bella-vista-north-end",
    imageUrl: "https://i.imgur.com/tmmOAQB.jpeg",
    caption: "Chicken francese from Bella Vista North End",
    tags: [ITALIAN, BOSTON],
  },
  {
    id: "the-friendly-toast",
    imageUrl: "https://i.imgur.com/rOqClLw.jpeg",
    caption: "The Friendly Toast near Newbury Street",
    tags: [BRUNCH, BOSTON],
  },
  {
    id: "adriatic-restaurant-and-bar",
    imageUrl: "https://i.imgur.com/hDeXX4S.jpeg",
    caption: "Adriatic Restaurant & Bar in Salem, MA",
    tags: [SEAFOOD, SALEM],
  },
  {
    id: "myers-and-chang-0",
    imageUrl: "https://i.imgur.com/p8Olyee.jpeg",
    caption: "Dan Dan noodles and bao buns from Myers + Chang in South End",
    tags: [CHINESE, KOREAN, BOSTON],
  },
  {
    id: "myers-and-chang-1",
    imageUrl: "https://i.imgur.com/G0AE584.jpeg",
    caption: "Myers + Chang in South End",
    tags: [CHINESE, KOREAN, BOSTON],
  },
  {
    id: "myers-and-chang-2",
    imageUrl: "https://i.imgur.com/DOJt8YV.jpeg",
    caption: "Myers + Chang in South End",
    tags: [CHINESE, KOREAN, BOSTON],
  },
  {
    id: "contessa-0",
    imageUrl: "https://i.imgur.com/HTd9Ex2.jpeg",
    caption: "Contessa on Newbury Street",
    tags: [ITALIAN, BOSTON],
  },
  {
    id: "contessa-1",
    imageUrl: "https://i.imgur.com/O5pZeNG.jpeg",
    caption: "Contessa on Newbury Street",
    tags: [ITALIAN, BOSTON],
  },
  {
    id: "rail-stop",
    imageUrl: "https://i.imgur.com/F2uWaEV.jpeg",
    caption: "Clam chowder from Rail Stop in Brighton",
    tags: [AMERICAN, SEAFOOD, BOSTON],
  },
  {
    id: "trade-0",
    imageUrl: "https://i.imgur.com/ExuSnRa.jpeg",
    caption: "Tuna tartare from Trade in Downtown/Waterfront",
    tags: [MEDITERRANEAN, BOSTON],
  },
  {
    id: "trade-1",
    imageUrl: "https://i.imgur.com/sb3XRq9.jpeg",
    caption: "Trade in Downtown/Waterfront",
    tags: [MEDITERRANEAN, BOSTON],
  },
  {
    id: "faccia-a-faccia",
    imageUrl: "https://i.imgur.com/rFV31Hn.jpeg",
    caption: "Squid ink uni trottole from Faccia a Faccia on Newbury Street",
    tags: [ITALIAN, BOSTON],
  },
  {
    id: "schmittys",
    imageUrl: "https://i.imgur.com/GYHDleF.png",
    caption: "Honey deuces from Schmitty's in Hoboken, NJ",
    tags: [COCKTAILS, HOBOKEN],
  },
  {
    id: "red-ribbon-bakeshop",
    imageUrl: "https://i.imgur.com/W4gUIxV.jpeg",
    caption: "Ube cake from Red Ribbon Bakeshop in Jersey City, NJ",
    tags: [BAKERY, JERSEY_CITY],
  },
  {
    id: "mr-nakamoto-0",
    imageUrl: "https://i.imgur.com/lcNVMjd.jpeg",
    caption: "Mr. Nakamoto in Cannes, France",
    tags: [JAPANESE, CANNES],
  },
  {
    id: "mr-nakamoto-1",
    imageUrl: "https://i.imgur.com/KXI0zeZ.jpeg",
    caption: "Mr. Nakamoto in Cannes, France",
    tags: [JAPANESE, CANNES],
  },
  {
    id: "le-chaophraya-0",
    imageUrl: "https://i.imgur.com/uwzRk2s.jpeg",
    caption:
      "Chicken satay and Thai iced tea from Le Chaophraya in Cannes, France",
    tags: [THAI, CANNES],
  },
  {
    id: "le-chaophraya-1",
    imageUrl: "https://i.imgur.com/T8k6lT9.jpeg",
    caption: "Pinapple fried rice from Le Chaophraya in Cannes, France",
    tags: [THAI, CANNES],
  },
  {
    id: "casino-cafe-de-paris-0",
    imageUrl: "https://i.imgur.com/jzBAjhD.jpeg",
    caption: "Casino Café de Paris in Monaco",
    tags: [FRENCH, MEDITERRANEAN, MONACO],
  },
  {
    id: "casino-cafe-de-paris-1",
    imageUrl: "https://i.imgur.com/Dzpc3qn.jpeg",
    caption: "Casino Café de Paris in Monaco",
    tags: [FRENCH, MEDITERRANEAN, MONACO],
  },
  {
    id: "mirazur-0",
    imageUrl: "https://i.imgur.com/LgdMJ3O.jpeg",
    caption: "Amuse bouche from Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-1",
    imageUrl: "https://i.imgur.com/KWcmJtr.jpeg",
    caption: "Bread from Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-2",
    imageUrl: "https://i.imgur.com/qObcdee.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-3",
    imageUrl: "https://i.imgur.com/G49RWSA.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-4",
    imageUrl: "https://i.imgur.com/fwMVMvY.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-5",
    imageUrl: "https://i.imgur.com/pwJnLAU.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-6",
    imageUrl: "https://i.imgur.com/lUeUTA0.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-7",
    imageUrl: "https://i.imgur.com/K9yfHva.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-8",
    imageUrl: "https://i.imgur.com/inu89iv.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-9",
    imageUrl: "https://i.imgur.com/5v2Jpwx.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "mirazur-10",
    imageUrl: "https://i.imgur.com/cvksYXd.jpeg",
    caption: "Mirazur in Menton, France",
    tags: [FRENCH, MEDITERRANEAN, MENTON],
  },
  {
    id: "pain-and-cie",
    imageUrl: "https://i.imgur.com/SmwWmBV.jpeg",
    caption: "Omelette from Pain & Cie in Nice, France",
    tags: [BAKERY, FRENCH, NICE],
  },
  {
    id: "boccaccio-0",
    imageUrl: "https://i.imgur.com/t4Vi4wv.jpeg",
    caption: "Oysters from Boccaccio in Nice, France",
    tags: [ITALIAN, SEAFOOD, NICE],
  },
  {
    id: "boccaccio-1",
    imageUrl: "https://i.imgur.com/uEuDLxf.jpeg",
    caption: "Paella from Boccaccio in Nice, France",
    tags: [ITALIAN, SEAFOOD, NICE],
  },
  {
    id: "le-plongeoir-0",
    imageUrl: "https://i.imgur.com/cDyZa7P.jpeg",
    caption: "Le Plongeoir in Nice, France",
    tags: [MEDITERRANEAN, NICE],
  },
  {
    id: "le-plongeoir-1",
    imageUrl: "https://i.imgur.com/2ZyFhXO.jpeg",
    caption: "Le Plongeoir in Nice, France",
    tags: [MEDITERRANEAN, NICE],
  },
  {
    id: "verveine-cafe-and-bakery",
    imageUrl: "https://i.imgur.com/pkkUmxD.jpeg",
    caption: "Ube brownie from Verveine Cafe & Bakery in Cambridge",
    tags: [BAKERY, CAFE, BOSTON],
  },
  {
    id: "legal-sea-foods-harborside-0",
    imageUrl: "https://i.imgur.com/KOFSZJ9.jpeg",
    caption: "Legal Sea Foods - Harborside in Seaport",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "legal-sea-foods-harborside-1",
    imageUrl: "https://i.imgur.com/mhMzB4i.jpeg",
    caption: "Legal Sea Foods - Harborside in Seaport",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "taiyaki-nyc",
    imageUrl: "https://i.imgur.com/6hK6PD3.jpeg",
    caption: "Taiyaki NYC in Seaport",
    tags: [ICE_CREAM, BOSTON],
  },
  {
    id: "marcelinos-0",
    imageUrl: "https://i.imgur.com/bMCf7gX.jpeg",
    caption: "Marcelino's in Seaport",
    tags: [MEDITERRANEAN, COCKTAILS, BOSTON],
  },
  {
    id: "marcelinos-1",
    imageUrl: "https://i.imgur.com/3GkzcwD.jpeg",
    caption: "Marcelino's in Seaport",
    tags: [MEDITERRANEAN, BOSTON],
  },
  {
    id: "marcelinos-2",
    imageUrl: "https://i.imgur.com/3fFku3r.jpeg",
    caption: "Marcelino's in Seaport",
    tags: [MEDITERRANEAN, BOSTON],
  },
  {
    id: "marcelinos-3",
    imageUrl: "https://i.imgur.com/YgtxQqL.jpeg",
    caption: "Marcelino's in Seaport",
    tags: [MEDITERRANEAN, BOSTON],
  },
  {
    id: "mr-h-0",
    imageUrl: "https://i.imgur.com/oJMzSb0.jpeg",
    caption: "Mr. H in Seaport",
    tags: [CHINESE, BOSTON],
  },
  {
    id: "mr-h-1",
    imageUrl: "https://i.imgur.com/QoSV89x.jpeg",
    caption: "Mr. H in Seaport",
    tags: [CHINESE, COCKTAILS, BOSTON],
  },
  {
    id: "mr-h-2",
    imageUrl: "https://i.imgur.com/nNHvXgc.jpeg",
    caption: "Mr. H in Seaport",
    tags: [CHINESE, BOSTON],
  },
  {
    id: "blueberry-lemonade",
    imageUrl: "https://i.imgur.com/nNVbLcV.jpeg",
    caption: "Homemade spiked blueberry lemonades",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "the-rose-and-crown",
    imageUrl: "https://i.imgur.com/y6U4RWb.jpeg",
    caption: "The Rose and Crown in Nantucket",
    tags: [NANTUCKET],
  },
  {
    id: "no-relation-0",
    imageUrl: "https://i.imgur.com/h5GxN3t.jpeg",
    caption: "Omakase at No Relation in South End",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "no-relation-1",
    imageUrl: "https://i.imgur.com/ZURnerP.jpeg",
    caption: "Omakase at No Relation in South End",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "no-relation-2",
    imageUrl: "https://i.imgur.com/48TadMh.jpeg",
    caption: "Omakase at No Relation in South End",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "panang-curry",
    imageUrl: "https://i.imgur.com/GyiRN5P.jpeg",
    caption: "Homemade panang curry",
    tags: [HOMEMADE, THAI],
  },
  {
    id: "kenzoku-mazesoba",
    imageUrl: "https://i.imgur.com/2QNoDFu.jpeg",
    caption: "Tan Tan Mazesoba from Kenzoku Mazesoba near Boston University",
    tags: [KOREAN, BOSTON],
  },
  {
    id: "coppa-0",
    imageUrl: "https://i.imgur.com/OXP46r6.jpeg",
    caption: "Oysters from Coppa in South End",
    tags: [ITALIAN, BOSTON],
  },
  {
    id: "coppa-1",
    imageUrl: "https://i.imgur.com/usp4lm3.jpeg",
    caption: "Spaghetti carbonara with Maine uni from Coppa in South End",
    tags: [ITALIAN, BOSTON],
  },
  {
    id: "japanese-curry",
    imageUrl: "https://i.imgur.com/enPjZ92.jpeg",
    caption: "Homemade Japanese curry",
    tags: [HOMEMADE, JAPANESE],
  },
  {
    id: "julians",
    imageUrl: "https://i.imgur.com/t4ZEWJr.jpeg",
    caption: "The Oakelbowl from Julian's in Providence",
    tags: [AMERICAN, BRUNCH, PROVIDENCE],
  },
  {
    id: "umo",
    imageUrl: "https://i.imgur.com/9ztcs9f.png",
    caption: "Churro del Moro from Umo in the Riviera Maya, MX",
    tags: [MEXICAN, MEXICO],
  },
  {
    id: "mahaniyom",
    imageUrl: "https://i.imgur.com/ORWmVs2.jpeg",
    caption: "Shrimp Pad Thai and Crab Fried Rice from Mahaniyom in Brookline",
    tags: [THAI, BOSTON],
  },
  {
    id: "backbar",
    imageUrl: "https://i.imgur.com/Obv5vj7.jpeg",
    caption: "Backbar in Somerville (cryptic season)",
    tags: [COCKTAILS, BOSTON],
  },
  {
    id: "far-out-0",
    imageUrl: "https://i.imgur.com/aaE1VrA.jpeg",
    caption:
      "Vanilla and mango ice cream with Lucky Charms from Far Out in Cambridge",
    tags: [ICE_CREAM, BOSTON],
  },
  {
    id: "lakon-0",
    imageUrl: "https://i.imgur.com/Jo8PMP4.jpeg",
    caption: "Pistachio latte from Lakon in Seaport",
    tags: [BAKERY, CAFE, BOSTON],
  },
  {
    id: "row-34-0",
    imageUrl: "https://i.imgur.com/aSUa8cn.jpeg",
    caption: "Row 34 in Seaport",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "row-34-1",
    imageUrl: "https://i.imgur.com/lhC8s8t.jpeg",
    caption: "Tuna tartare from Row 34 in Seaport",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "lolita",
    imageUrl: "https://i.imgur.com/uP2jjEK.jpeg",
    caption: "Lolita in Seaport",
    tags: [MEXICAN, COCKTAILS, BOSTON],
  },
  {
    id: "chicken-tikka-masala",
    imageUrl: "https://i.imgur.com/SxfIgeo.jpeg",
    caption: "Homemade chicken tikka masala",
    tags: [HOMEMADE, INDIAN],
  },
  {
    id: "jonquils",
    imageUrl: "https://i.imgur.com/or1b6VA.jpeg",
    caption: "Seasonal chai cake from Jonquils on Newbury Street",
    tags: [CAFE, BOSTON],
  },
  {
    id: "chocolate-martini",
    imageUrl: "https://i.imgur.com/xBm2IUi.jpeg",
    caption: "Homemade chocolate martini",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "love-potion",
    imageUrl: "https://i.imgur.com/jeIIyZI.jpeg",
    caption: "Homemade Love Potion (Valentine's Day cocktail)",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "umami-omakase-0",
    imageUrl: "https://i.imgur.com/K9Pbhmd.jpeg",
    caption: "Umami Omakase in Somerville",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "umami-omakase-1",
    imageUrl: "https://i.imgur.com/3kgXvYj.jpeg",
    caption: "Umami Omakase in Somerville",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "umami-omakase-2",
    imageUrl: "https://i.imgur.com/mS7LKmc.jpeg",
    caption: "Umami Omakase in Somerville",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "umami-omakase-2",
    imageUrl: "https://i.imgur.com/IfQsJxw.jpeg",
    caption: "Valentine's Day dessert from Umami Omakase in Somerville",
    tags: [OMAKASE, JAPANESE, BOSTON],
  },
  {
    id: "neptune-oyster",
    imageUrl: "https://i.imgur.com/MPGiaW2.jpeg",
    caption: "Uni bucatini from Neptune Oyster in North End",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "far-out-1",
    imageUrl: "https://i.imgur.com/IblHG8L.jpeg",
    caption: "Mango matcha ice cream from Far Out in Cambridge",
    tags: [ICE_CREAM, BOSTON],
  },
  {
    id: "dan-dan-ramen-noodles",
    imageUrl: "https://i.imgur.com/83c1RJY.jpeg",
    caption: "Homemade Dan Dan Ramen Noodles",
    tags: [HOMEMADE, KOREAN, JAPANESE],
  },
  {
    id: "trifecta",
    imageUrl: "https://i.imgur.com/LrPltPq.jpeg",
    caption:
      "Nutcracker-inspired cocktails from Trifecta in the Four Seasons One Dalton Street",
    tags: [COCKTAILS, BOSTON],
  },
  {
    id: "saltie-girl",
    imageUrl: "https://i.imgur.com/hAnO4S6.jpeg",
    caption: "Saltie Girl on Newbury Street",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "wicked-craft-co",
    imageUrl: "https://i.imgur.com/OAnMAOQ.jpeg",
    caption: "Pistachio martini from Wicked Craft Co. in North End",
    tags: [COCKTAILS, BOSTON],
  },
  {
    id: "dahuinjeong",
    imageUrl: "https://i.imgur.com/hQdMrlq.jpeg",
    caption: "Korean BBQ from Dahuinjeong in Seoul, South Korea",
    tags: [KOREAN, SOUTH_KOREA],
  },
  {
    id: "isola",
    imageUrl: "https://i.imgur.com/rGGfFa5.jpeg",
    caption: "Korean-Italian fusion from Isola in Seoul, South Korea",
    tags: [KOREAN, ITALIAN, SOUTH_KOREA],
  },
  {
    id: "eeguk",
    imageUrl: "https://i.imgur.com/LPOBHri.jpeg",
    caption: "Korean-Italian uni pasta from Eeguk in Seoul, South Korea",
    tags: [KOREAN, ITALIAN, SOUTH_KOREA],
  },
  {
    id: "minute-papillon",
    imageUrl: "https://i.imgur.com/eUsoTvo.jpeg",
    caption: "Minute Papillon churro cafe in Seoul, South Korea",
    tags: [MEXICAN, CAFE, SOUTH_KOREA],
  },
  {
    id: "cricket",
    imageUrl: "https://i.imgur.com/zSvOa7f.jpeg",
    caption: "Cricket in Seoul, South Korea",
    tags: [COCKTAILS, SOUTH_KOREA],
  },
  {
    id: "insadong",
    imageUrl: "https://i.imgur.com/k0hZ4em.jpeg",
    caption: "Budaejjigae from a restaurant in Insadong in Seoul, South Korea",
    tags: [KOREAN, SOUTH_KOREA],
  },
  {
    id: "sushi-yamaken-higashi-ginza",
    imageUrl: "https://i.imgur.com/QXjhuLg.jpeg",
    caption: "Omakase from Sushi Yamaken in Higashi Ginza in Tokyo, Japan",
    tags: [OMAKASE, JAPANESE, JAPAN],
  },
  {
    id: "sushi-yamaken-higashi-ginza",
    imageUrl: "https://i.imgur.com/8ODd9G6.jpeg",
    caption: "Omakase from Sushi Yamaken in Higashi Ginza in Tokyo, Japan",
    tags: [OMAKASE, JAPANESE, JAPAN],
  },
  {
    id: "honey-deuce",
    imageUrl: "https://i.imgur.com/uYUge0t.jpeg",
    caption: "Homemade Honey Deuce cocktail inspired by the US Open",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "turners-seafood",
    imageUrl: "https://i.imgur.com/jmIywTV.jpeg",
    caption: "Turner's Seafood in Salem, MA",
    tags: [SEAFOOD, SALEM],
  },
  {
    id: "mikes-pastry",
    imageUrl: "https://i.imgur.com/sqtNyKM.jpeg",
    caption: "Lobster tail from Mike's Pastry in North End",
    tags: [BAKERY, BOSTON],
  },
  {
    id: "joes",
    imageUrl: "https://i.imgur.com/6vb9Poo.jpeg",
    caption: "Joe's in North End/Waterfront",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "apple-tree-inn",
    imageUrl: "https://i.imgur.com/phW3pe6.jpeg",
    caption: "Apple Tree Inn near Tanglewood in Lenox, MA",
    tags: [AMERICAN, TANGLEWOOD],
  },
  {
    id: "art-bar",
    imageUrl: "https://i.imgur.com/lDK4dom.jpeg",
    caption: "Art Bar in Cambridge",
    tags: [AMERICAN, BOSTON],
  },
  {
    id: "art-cafe",
    imageUrl: "https://i.imgur.com/Zunpq7x.jpeg",
    caption: "Art Cafe in Nyack, NY",
    tags: [CAFE, ROCKLAND_COUNTY],
  },
  {
    id: "hudson-and-co",
    imageUrl: "https://i.imgur.com/WLfETRM.jpeg",
    caption: "Seafood platter from Hudson & Co. in Jersey City, NJ",
    tags: [SEAFOOD, JERSEY_CITY],
  },
  {
    id: "red-paper-clip-0",
    imageUrl: "https://i.imgur.com/gebuXlM.jpeg",
    caption: "Red Paper Clip in West Village, NYC",
    tags: [FRENCH, CHINESE, NYC],
  },
  {
    id: "red-paper-clip-1",
    imageUrl: "https://i.imgur.com/6kRnvFn.jpeg",
    caption: "Red Paper Clip in West Village, NYC",
    tags: [FRENCH, CHINESE, NYC],
  },
  {
    id: "hotteok",
    imageUrl: "https://i.imgur.com/ndegyyF.jpeg",
    caption: "Homemade hotteok",
    tags: [HOMEMADE, KOREAN],
  },
  {
    id: "yume-ga-arukara",
    imageUrl: "https://i.imgur.com/YVjF2ju.jpeg",
    caption: "Hot and cold udon from Yume Ga Arukara in Seaport",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "sushi-by-bosso-0",
    imageUrl: "https://i.imgur.com/Nm1pBLb.jpeg",
    caption: "Sushi by Bosso on Newbury Street",
    tags: [JAPANESE, BOSTON],
  },
  {
    id: "boston-sail-loft-0",
    imageUrl: "https://i.imgur.com/HKgpCXu.jpeg",
    caption:
      "Boston Sail Loft (best clam chowder in Boston) in North End/Waterfront",
    tags: [SEAFOOD, BOSTON],
  },
  {
    id: "salad",
    imageUrl: "https://i.imgur.com/xrNK4Pe.jpeg",
    caption: "Homemade salad",
    tags: [HOMEMADE],
  },
  {
    id: "lobster-pasta",
    imageUrl: "https://i.imgur.com/x7cYg56.jpeg",
    caption: "Homemade lobster pasta",
    tags: [HOMEMADE, SEAFOOD, BOSTON],
  },
  {
    id: "lokal",
    imageUrl: "https://i.imgur.com/XC9K2k8.jpeg",
    caption: "Lokal in Jersey City, NJ",
    tags: [COCKTAILS, JERSEY_CITY],
  },
  {
    id: "ondo",
    imageUrl: "https://i.imgur.com/YltmAte.jpeg",
    caption: "Ondo in Jersey City, NJ",
    tags: [KOREAN, JERSEY_CITY],
  },
  {
    id: "mari-0",
    imageUrl: "https://i.imgur.com/EXBLpvv.jpeg",
    caption: "Mari in Hell's Kitchen, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "mari-1",
    imageUrl: "https://i.imgur.com/55KHwnv.jpeg",
    caption: "Mari in Hell's Kitchen, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "mari-2",
    imageUrl: "https://i.imgur.com/h8nhaIC.jpeg",
    caption: "Mari in Hell's Kitchen, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "mari-3",
    imageUrl: "https://i.imgur.com/ZvQVYI6.jpeg",
    caption: "Mari in Hell's Kitchen, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "fish-cheeks",
    imageUrl: "https://i.imgur.com/OOgDEBE.jpeg",
    caption: "Fish Cheeks in NoHo, NYC",
    tags: [THAI, NYC],
  },
  {
    id: "barn-joo-0",
    imageUrl: "https://i.imgur.com/mSpQZBb.jpeg",
    caption: "Uni bibimbap from Barn Joo in Koreatown, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "ube-pancakes",
    imageUrl: "https://i.imgur.com/8OzbLNO.jpeg",
    caption: "Homemade Trader Joe's ube pancakes",
    tags: [HOMEMADE],
  },
  {
    id: "blueberry-clover-club",
    imageUrl: "https://i.imgur.com/UA4m4Uc.jpeg",
    caption: "Homemade Blueberry Clover Club",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "otto-strada",
    imageUrl: "https://i.imgur.com/Qq62KjG.jpeg",
    caption: "Otto Strada in Hoboken, NJ",
    tags: [ITALIAN, HOBOKEN],
  },
  {
    id: "la-boheme",
    imageUrl: "https://i.imgur.com/KwTYsB0.jpeg",
    caption: "Cheese board from La Boheme in Hoboken, NJ",
    tags: [FRENCH, HOBOKEN],
  },
  {
    id: "carpaccio",
    imageUrl: "https://i.imgur.com/ysnCOxr.jpeg",
    caption: "Oysters from Carpaccio in the American Dream Mall",
    tags: [SEAFOOD],
  },
  {
    id: "bao-buns-0",
    imageUrl: "https://i.imgur.com/yz9MhbK.jpeg",
    caption: "Bao buns from Dear Maud in Hoboken, NJ",
    tags: [AMERICAN, HOBOKEN],
  },
  {
    id: "ramen",
    imageUrl: "https://i.imgur.com/qEnRwo6.jpeg",
    caption: "Ramen from Shokudo in Hoboken, NJ",
    tags: [JAPANESE, HOBOKEN],
  },
  {
    id: "bao-buns-1",
    imageUrl: "https://i.imgur.com/V9vkWQF.jpeg",
    caption: "Bao buns from Shokudo in Hoboken, NJ",
    tags: [JAPANESE, HOBOKEN],
  },
  {
    id: "lamb-bolognese",
    imageUrl: "https://i.imgur.com/a26J50W.jpeg",
    caption: "Homemade pasta with lamb bolognese",
    tags: [HOMEMADE, ITALIAN],
  },
  {
    id: "pinwheel-garden",
    imageUrl: "https://i.imgur.com/HsbDvu4.jpeg",
    caption: "Pinwheel Garden in Jersey City, NJ",
    tags: [CHINESE, THAI, INDIAN, JAPANESE, KOREAN, JERSEY_CITY],
  },
  {
    id: "11-tigers-0",
    imageUrl: "https://i.imgur.com/Yf0jMlp.jpeg",
    caption: "Omakase from 11 Tigers in Stuy Town, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "11-tigers-1",
    imageUrl: "https://i.imgur.com/EJnCURF.jpeg",
    caption: "Omakase from 11 Tigers in Stuy Town, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "11-tigers-2",
    imageUrl: "https://i.imgur.com/8riIkJG.jpeg",
    caption: "Omakase from 11 Tigers in Stuy Town, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "11-tigers-3",
    imageUrl: "https://i.imgur.com/5IOWJyI.jpeg",
    caption: "Omakase from 11 Tigers in Stuy Town, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "salad-1",
    imageUrl: "https://i.imgur.com/WpKdpyh.jpeg",
    caption: "Homemade salad",
    tags: [HOMEMADE],
  },
  {
    id: "white-cosmo",
    imageUrl: "https://i.imgur.com/Tu75Oh5.jpeg",
    caption: "Homemade White Cosmopolitan",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "sunset-cider",
    imageUrl: "https://i.imgur.com/UfIXd24.jpeg",
    caption: "Homemade Sunset Cider",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "bar-room-0",
    imageUrl: "https://i.imgur.com/J4TPxXa.jpeg",
    caption: "The Bar Room at The Modern, NYC",
    tags: [COCKTAILS, NYC],
  },
  {
    id: "bar-room-1",
    imageUrl: "https://i.imgur.com/Twr2UMN.jpeg",
    caption: "The Bar Room at The Modern, NYC",
    tags: [COCKTAILS, NYC],
  },
  {
    id: "nougatine-0",
    imageUrl: "https://i.imgur.com/n2b6V8I.jpeg",
    caption: "Nougatine in Columbus Circle, NYC",
    tags: [NYC],
  },
  {
    id: "nougatine-1",
    imageUrl: "https://i.imgur.com/3UDubEY.jpeg",
    caption: "Nougatine in Columbus Circle, NYC",
    tags: [NYC],
  },
  {
    id: "nougatine-2",
    imageUrl: "https://i.imgur.com/eC6Qfbj.jpeg",
    caption: "Nougatine in Columbus Circle, NYC",
    tags: [NYC],
  },
  {
    id: "nougatine-3",
    imageUrl: "https://i.imgur.com/NigBlHd.jpeg",
    caption: "Nougatine in Columbus Circle, NYC",
    tags: [NYC],
  },
  {
    id: "velvet-snowbird",
    imageUrl: "https://i.imgur.com/YVHRdOG.jpeg",
    caption: "Homemade Velvet Snowbird",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "melona-spritz",
    imageUrl: "https://i.imgur.com/Phqq8X4.jpeg",
    caption: "Homemade Melona Spritz",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "dalgona-martini",
    imageUrl: "https://i.imgur.com/rMvvlAR.jpeg",
    caption: "Homemade Dalgona Martini",
    tags: [HOMEMADE, COCKTAILS],
  },
  {
    id: "shaka-kitchen",
    imageUrl: "https://i.imgur.com/BbEauZ0.jpeg",
    caption: "Shaka Kitchen in Hoboken, NJ",
    tags: [HAWAIIAN, HOBOKEN],
  },
  {
    id: "battellos-0",
    imageUrl: "https://i.imgur.com/6rP9otT.jpeg",
    caption: "Battello's in Jersey City, NJ",
    tags: [ITALIAN, SEAFOOD, JERSEY_CITY],
  },
  {
    id: "battellos-1",
    imageUrl: "https://i.imgur.com/abmYtb4.jpeg",
    caption: "Battello's in Jersey City, NJ",
    tags: [ITALIAN, SEAFOOD, JERSEY_CITY],
  },
  {
    id: "cheese-board",
    imageUrl: "https://i.imgur.com/m1Huc7G.jpeg",
    caption: "Homemade cheese board",
    tags: [HOMEMADE],
  },
  {
    id: "sushi-ishikawa-0",
    imageUrl: "https://i.imgur.com/PDUw2ac.jpeg",
    caption: "Omakase from Sushi Ishikawa in Upper West Side, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "sushi-ishikawa-1",
    imageUrl: "https://i.imgur.com/DRGOkSb.jpeg",
    caption: "Omakase from Sushi Ishikawa in Upper West Side, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "sushi-ishikawa-2",
    imageUrl: "https://i.imgur.com/X1E9PzE.jpeg",
    caption: "Omakase from Sushi Ishikawa in Upper West Side, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "flour",
    imageUrl: "https://i.imgur.com/lKcitgS.jpeg",
    caption: "Flour in Hoboken, NJ",
    tags: [ITALIAN, HOBOKEN],
  },
  {
    id: "the-pheasant",
    imageUrl: "https://i.imgur.com/MwYjva4.jpeg",
    caption: "The Pheasant in Cape Cod",
    tags: [AMERICAN, CAPE_COD],
  },
  {
    id: "wequassett-resort-and-golf-club",
    imageUrl: "https://i.imgur.com/Zwd2I3W.jpeg",
    caption: "Lobster roll from Wequassett Resort and Golf Club in Cape Cod",
    tags: [SEAFOOD, CAPE_COD],
  },
  {
    id: "fat-taco-0",
    imageUrl: "https://i.imgur.com/JCD2Wwp.jpeg",
    caption: "Fat Taco in Hoboken, NJ",
    tags: [MEXICAN, HOBOKEN],
  },
  {
    id: "fat-taco-1",
    imageUrl: "https://i.imgur.com/RrWAd4K.jpeg",
    caption: "Fat Taco in Hoboken, NJ",
    tags: [MEXICAN, HOBOKEN],
  },
  {
    id: "fat-taco-2",
    imageUrl: "https://i.imgur.com/g2URNkr.jpeg",
    caption: "Fat Taco in Hoboken, NJ",
    tags: [MEXICAN, HOBOKEN],
  },
  {
    id: "rezdora-0",
    imageUrl: "https://i.imgur.com/cSIbe5J.jpeg",
    caption: "Rezdora in Flatiron, NYC",
    tags: [ITALIAN, NYC],
  },
  {
    id: "rezdora-1",
    imageUrl: "https://i.imgur.com/6Ek0qLY.jpeg",
    caption: "Rezdora in Flatiron, NYC",
    tags: [ITALIAN, NYC],
  },
  {
    id: "rezdora-2",
    imageUrl: "https://i.imgur.com/qCniv5P.jpeg",
    caption: "Rezdora in Flatiron, NYC",
    tags: [ITALIAN, NYC],
  },
  {
    id: "dimsum-garden",
    imageUrl: "https://i.imgur.com/qt90v6w.jpeg",
    caption: "Dimsum Garden in Midtown East, NYC",
    tags: [CHINESE, NYC],
  },
  {
    id: "basque-tapas-bar-0",
    imageUrl: "https://i.imgur.com/kTEZnhW.jpeg",
    caption: "Seafood paella from Basque Tapas Bar in Piermont, NY",
    tags: [SPANISH, ROCKLAND_COUNTY],
  },
  {
    id: "basque-tapas-bar-1",
    imageUrl: "https://i.imgur.com/JlAfBTO.jpeg",
    caption: "Basque Tapas Bar in Piermont, NY",
    tags: [SPANISH, ROCKLAND_COUNTY],
  },
  {
    id: "barn-joo-1",
    imageUrl: "https://i.imgur.com/URO8cEB.jpeg",
    caption: "Barn Joo in Union Square, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "barn-joo-2",
    imageUrl: "https://i.imgur.com/78Tfp1J.jpeg",
    caption: "Oyster happy hour at Barn Joo in Union Square, NYC",
    tags: [KOREAN, NYC],
  },
  {
    id: "il-posto-accanto",
    imageUrl: "https://i.imgur.com/AQCXH5f.jpeg",
    caption:
      "Spicy squid ink pasta with uni from Il Posto Accanto in Alphabet City, NYC",
    tags: [ITALIAN, NYC],
  },
  {
    id: "nami-nori",
    imageUrl: "https://i.imgur.com/d0c7XYP.jpeg",
    caption: "Nami Nori in West Village, NYC",
    tags: [JAPANESE, NYC],
  },
  {
    id: "kin-toh",
    imageUrl: "https://i.imgur.com/kIhXznw.jpeg",
    caption: "Kin Toh in Tulum, MX",
    tags: [JAPANESE, MEXICO],
  },
  {
    id: "starbucks-reserve",
    imageUrl: "https://i.imgur.com/LfiZf9f.jpeg",
    caption: "Espresso martini flights from Starbucks Reserve in Chelsea, NYC",
    tags: [CAFE, COCKTAILS, NYC],
  },
  {
    id: "ues",
    imageUrl: "https://i.imgur.com/F4XWQak.jpeg",
    caption: "UES speakeasy in Upper East Side, NYC",
    tags: [COCKTAILS, NYC],
  },
  {
    id: "takumi-0",
    imageUrl: "https://i.imgur.com/EtmEKJ0.jpeg",
    caption: "Omakase from Takumi in Lower East Side, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "takumi-1",
    imageUrl: "https://i.imgur.com/l5jFwhd.jpeg",
    caption: "Omakase from Takumi in Lower East Side, NYC",
    tags: [OMAKASE, JAPANESE, NYC],
  },
  {
    id: "cn-tower",
    imageUrl: "https://i.imgur.com/DuON6ho.jpeg",
    caption: "Dinner at 360 Restaurant (CN Tower) in Toronto, CA",
    tags: [TORONTO],
  },
  {
    id: "serendipity",
    imageUrl: "https://i.imgur.com/Q5Ilff9.jpeg",
    caption: "Serendipity in Midtown East, NYC",
    tags: [BRUNCH, ICE_CREAM, NYC],
  },
  {
    id: "the-mark",
    imageUrl: "https://i.imgur.com/asSddn5.jpeg",
    caption: "The Mark in Upper East Side, NYC",
    tags: [NYC],
  },
  {
    id: "nats-on-bank",
    imageUrl: "https://i.imgur.com/PbCFhg3.png",
    caption: "Nat's on Bank in West Village, NYC",
    tags: [BRUNCH, AMERICAN, NYC],
  },
  {
    id: "ono-seafood",
    imageUrl: "https://i.imgur.com/jNRrcbt.png",
    caption: "Poké from Ono Seafood in Honolulu, HI",
    tags: [HAWAIIAN, HAWAII],
  },
  {
    id: "leonards-bakery",
    imageUrl: "https://i.imgur.com/hGS3wBQ.png",
    caption: "Malasadas from Leonard's Bakery in Honolulu, HI",
    tags: [BAKERY, HAWAII],
  },
  {
    id: "doraku-sushi",
    imageUrl: "https://i.imgur.com/EeIAEVU.jpeg",
    caption: "Doraku Sushi in Honolulu, HI",
    tags: [JAPANESE, HAWAII],
  },
  {
    id: "tipsy-scoop",
    imageUrl: "https://i.imgur.com/4uEyWqj.jpeg",
    caption: "Ice cream cocktails from Tipsy Scoop in Kips Bay, NYC",
    tags: [ICE_CREAM, COCKTAILS, NYC],
  },
];
