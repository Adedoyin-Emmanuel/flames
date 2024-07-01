"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import randomImage from "@/utils/randomImage";
import { cn } from "@/lib/utils";
import React from "react";
import HeaderText from "@/app/components/header-text";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { calculateFlames } from "@/app/core/flames";
import { Ojuju } from "next/font/google";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const image = randomImage();
const ojuju = Ojuju({
  subsets: ["latin"],
  weight: "700",
});

const Home = () => {
  const [formData, setFormData] = React.useState({
    yourName: "",
    crushName: "",
  });
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<React.ReactNode>(
    <></>
  );
  const { toast } = useToast();

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.crushName || !formData.yourName) {
      toast({
        title: "Oh sugar 😞!",
        description: "Please fill in both names",
      });
      return;
    }
    const result = calculateFlames(formData);

    setShowModal(true);
    setModalContent(
      <section className="w-full p-1 flex flex-col items-center justify-around gap-6 text-white">
        <h1
          className={cn(ojuju.className, "text-5xl font-extrabold capitalize")}
        >
          {formData.yourName}
        </h1>

        <p className="text-2xl">&</p>

        <h1
          className={cn(ojuju.className, "text-5xl font-extrabold  capitalize")}
        >
          {formData.crushName}
        </h1>

        <h1 className="text-2xl font-bold my-2">{result.meaning}</h1>

        <p>{result.response}</p>
      </section>
    );
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
        <DialogContent className="w-[95.666667%] md:w-full h-1/2">
          {modalContent}
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
            <div className="flex gap-x-4">
              <Link
                className="block underline my-3"
                href={"https://github.com/adedoyin-emmanuel/flames"}
              >
                Star on Github
              </Link>

              <Link className="block underline my-3" href={"/how-it-works"}>
                How it works
              </Link>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Home;
