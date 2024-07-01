import MySet from "@/app/core/set";
import randomResponse from "@/utils/randomResponse";

interface formDataProps {
  yourName: string;
  crushName: string;
}

export const calculateFlames = (formData: formDataProps) => {
  let combinedName = (formData.crushName + formData.yourName)
    .toLowerCase()
    .trim();
  let myName = formData.yourName.toLowerCase().trim();
  let myCrushName = formData.crushName.toLowerCase().trim();
  let myNameSet = new MySet<string>();
  let myCrushNameSet = new MySet<string>();

  for (let char of myName) {
    myNameSet.add(char, false);
  }

  for (let char of myCrushName) {
    myCrushNameSet.add(char, false);
  }

  const commonLetters = myNameSet.intersection(myCrushNameSet);
  const matchOccurrences = commonLetters.length() * 2;
  const resultant = combinedName.length - matchOccurrences;

  const FLAMES = ["F", "L", "A", "M", "E", "S"];
  const FLAMES_MEANINGS: any = {
    F: "Friends",
    L: "Lovers",
    A: "Admirers",
    M: "Marriage",
    E: "Enemies",
    S: "Secret Lovers",
  };

  const RESPONSES: any = {
    F: [
      "Dem friend zone you 🤗",
      "If boo bore aaah, adey 😎",
      "You are like a brother/sister to me 😊",
      "We be padi for life 🙌",
      "No love here, na pure friendship 🙅‍♂️",
      "Friendship na our portion 😂",
      "You no fit escape this friendship o 😄",
      "Na just friend vibes we dey catch 🎉",
      "You be my gist partner 📚",
      "Na you I dey call when gist full ground 🤣",
      "Nothing for you 😵",
    ],
    L: [
      "You dey chop love ❤️",
      "No be small love 😍",
      "Me I dey eat 😍",
      "Na true love be this o 💕",
      "You don capture my heart finish 😘",
      "My heart na your own 😘",
      "Love wan finish me for your matter 💞",
      "We dey on top love cruise 🚢",
      "Your love dey shack me 💖",
      "You be the sugar for my tea ☕",
      "Kai, I go love o 😍",
    ],
    A: [
      "You fall pass 🥰",
      "I see you 👀",
      "Ask me out already 😏",
      "You don burst my brain 🥺",
      "Abeg, stop to dey form 😎",
      "I dey gbadun you 😍",
      "No dey do like say you no see me 🧐",
      "Make we run this matter 💌",
      "You be my crush since secondary school 🏫",
      "I dey feel you die 🥵",
    ],
    M: [
      "Dondooo !!",
      "Awares) 👏",
      "Journeying forever together 👫",
      "We don jam rock o 🥳",
      "Omo, na forever be this 💍",
      "We go dey together till old age 👴👵",
      "Na lifetime parole be this 💑",
      "I don find my missing rib 💖",
      "You be my better half 💑",
      "Na you be my one and only 💞",
    ],
    E: [
      "You're both toxic ⛔️",
      "We no dey mix like water and oil ☢️",
      "Shoot me already 🔥",
      "E never go work 😒",
      "May you live long to see my success 😡",
      "I hope KARMA slaps you before I do 👋",
      "Na wah for una 🚫",
      "We be like Tom and Jerry 🐭🐱",
      "You no dey my level 🚷",
      "Trouble dey sleep, yanga go wake am ⚡",
      "You be my wahala partner 😤",
      "I no fit deal with your drama 🎭",
      "Stop the fooling, e no fit work 🤡",
    ],
    S: [
      "How far plus the stalking? 👀",
      "Chale you for looksharp ! Shoot your shoot. 📢",
      "Make I be your anon",
      "Na secret admirer levels 😍",
      "I dey crush on you tay tay 😏",
      "Lowkey dey follow you 😍",
      "You be my lowkey bae 💘",
      "I dey eye you since 📸",
      "I dey monitor you like CCTV 📹",
      "Na you I dey dream about every night 🌙",
      "Tomorrow may be too late, shoot your shot now! 🫵",
    ],
  };

  const index = (resultant % FLAMES.length) - 1;
  const meaning = FLAMES_MEANINGS[FLAMES[index]];
  const response = randomResponse(RESPONSES[FLAMES[index]]);

  return {
    meaning,
    response,
  };
};
