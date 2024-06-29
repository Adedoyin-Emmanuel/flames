import { Ojuju } from "next/font/google";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

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

      <section className="flex flex-col items-start md:justify-center">
        <div className="md:block hidden mb-5">
          <HeaderText />
        </div>
        <section className="w-full flex gap-4 ">
          <Input type="text" placeholder="Your Name" className="p-8" />
          <Input type="email" placeholder="Your Email" />
        </section>
      </section>
    </section>
  );
};

export default Home;
