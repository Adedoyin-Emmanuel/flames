"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import randomImage from "@/utils/randomImage";
import React from "react";
import HeaderText from "@/app/components/header-text";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MySet from "@/app/core/set";

const image = randomImage();

const Home = () => {
  const [formData, setFormData] = React.useState({
    yourName: "",
    crushName: "",
  });
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const randomResponse = (array: any) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const checkUnique = () => {
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
      ],
    };

    const index = (resultant % FLAMES.length) - 1;
    const meaning = FLAMES_MEANINGS[FLAMES[index]];
    const response = randomResponse(RESPONSES[FLAMES[index]]);

    console.log({
      meaning,
      response,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkUnique();
  };

  return (
    <section className="w-screen h-screen grid md:grid-cols-2 justify-center p-2 overflow-x-hidden">
      <section className="flex flex-col items-center justify-center">
        <div className="md:hidden mb-5">
          <HeaderText />
        </div>
        <img src={image} alt="Giving flowers" className="w-full max-w-md" />
      </section>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <section className="flex flex-col items-start md:justify-center md:p-2">
        <div className="md:block hidden mb-5">
          <HeaderText />
        </div>
        <form className="w-full md:p-0 p-2" onSubmit={(e) => handleSubmit(e)}>
          <section className="w-full flex md:flex-row flex-col items-center gap-x-5">
            <div className="w-full md:my-0 my-2">
              <Label htmlFor="yourName" className="text-base">
                What's your name?
              </Label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="p-8 my-2"
                name="yourName"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:my-0 my-2">
              <Label htmlFor="yourName" className="text-base">
                Enter your crush's name?
              </Label>
              <Input
                type="text"
                placeholder="Enter your crush's name"
                className="p-8 my-2"
                name="crushName"
                onChange={handleInputChange}
              />
            </div>
          </section>

          <div className="w-full my-5">
            <Button
              className={
                "font-semibold w-full p-9 text-[20px] border-[1px] flex items-center justify-center"
              }
              variant={"ghost"}
            >
              Play ❣️
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Home;
