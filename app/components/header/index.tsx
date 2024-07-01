import React from "react";
import { Github, Twitter, BadgeInfo, Youtube } from "lucide-react";
import Link from "next/link";
import { Ojuju } from "next/font/google";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const ojuju = Ojuju({
  subsets: ["latin"],
  weight: "700",
});

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`${className} w-full max-w-[600px] py-3`}>
      <div className="mx-auto flex items-center justify-between p-3">
        <h1 className={cn(ojuju.className, "font-extrabold text-3xl")}>
          Flames
        </h1>

        <div className="flex gap-x-5">
          <Link href={"https://youtube.com/@adedoyin-emmanuel-adeniyi"}>
            <Youtube className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href={"https://github.com/adedoyin-emmanuel/flames"}>
            <Github className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href={"https://x.com/Emmysoft_Tm"}>
            <Twitter className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
