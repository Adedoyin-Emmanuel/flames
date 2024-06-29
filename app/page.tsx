import Image from "next/image";
import { Ojuju } from "next/font/google";
import { cn } from "@/lib/utils";

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
        <div className="md:hidden mb-2">
          <HeaderText />
        </div>
        <img
          src="/assets/giving-flowers.jpg"
          alt="Giving flowers"
          className=" w-full max-w-md"
        />
      </section>

      <section className="flex flex-col items-start justify-center">
        <div className="md:block hidden mb-5">
          <HeaderText />
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem,
          suscipit distinctio voluptates beatae ut! Quia delectus, eveniet est
          error in sed consequuntur consectetur id, recusandae, ipsa officia.
          Est, dicta.
        </p>
      </section>
    </section>
  );
};

export default Home;
