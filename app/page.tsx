import Image from "next/image";
import { Ojuju } from "next/font/google";
import { cn } from "@/lib/utils";

const ojuju = Ojuju({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <section className="w-screen h-screen flex items-center p-5">
      <section className="w-full">
        <img
          src="/assets/giving-flowers.jpg"
          alt="Giving flowers"
          width={700}
          height={1000}
        />
      </section>

      <section className="content">
        <h1
          className={cn(
            ojuju.className,
            "font-extrabold text-[7rem] gradient-text cursor-pointer"
          )}
        >
          FLAMES
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem,
        suscipit distinctio voluptates beatae ut! Quia delectus, eveniet est
        error in sed consequuntur consectetur id, recusandae, ipsa officia. Est,
        dicta.
      </section>
    </section>
  );
}
