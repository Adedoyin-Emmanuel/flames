"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import randomImage from "@/utils/randomImage";
import React from "react";
import HeaderText from "@/app/components/header-text";

const image = randomImage();

const Home = () => {
  const [formData, setFormData] = React.useState({
    yourName: "",
    crushName: "",
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-screen h-screen grid md:grid-cols-2 justify-center p-2 overflow-x-hidden">
      <section className="flex flex-col items-center justify-center">
        <div className="md:hidden mb-5">
          <HeaderText />
        </div>
        <img src={image} alt="Giving flowers" className="w-full max-w-md" />
      </section>

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
                name="yoourName"
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
