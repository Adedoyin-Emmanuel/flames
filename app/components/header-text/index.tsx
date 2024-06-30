import { Ojuju } from "next/font/google";
import { cn } from "@/lib/utils";

const ojuju = Ojuju({
  subsets: ["latin"],
  weight: "800",
});

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

export default HeaderText;
