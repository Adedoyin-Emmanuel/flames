import { Ojuju } from "next/font/google";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ojuju = Ojuju({ subsets: ["latin"], weight: "800" });

const Home = () => {
  const HeaderText = () => {
    return (
      <h1
        className={cn(
          ojuju.className,
          "font-extrabold text-center md:text-[7rem] text-[5rem] gradient-text cursor-pointer"
        )}
      >
        FLAMES
      </h1>
    );
  };

  return (
    <section className="w-screen h-screen grid md:grid-cols-2 justify-center p-2 overflow-x-hidden">
      <section className="flex flex-col items-center justify-center">
        <div className="md:hidden mb-5">
          <HeaderText />
        </div>
        <img
          src="/assets/giving-flowers.jpg"
          alt="Giving flowers"
          className="w-full max-w-md"
        />
      </section>

      <section className="flex flex-col items-start md:justify-center md:p-2">
        <div className="md:block hidden mb-5">
          <HeaderText />
        </div>
        <section className="w-full md:p-0 p-2">
          <section className="w-full flex md:flex-row flex-col items-center gap-x-5 ">
            <div className="w-full md:my-0 my-2">
              <Label htmlFor="yourName" className="text-base">
                What's your name?
              </Label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="p-8 my-2"
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
              />
            </div>
          </section>

          <div className="w-full my-5">
            <Button
              className={
                (ojuju.className,
                "font-semibold w-full p-9 text-2xl border-[1px] flex items-center justify-center")
              }
              variant={"secondary"}
            >
              Play ❣️
            </Button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
