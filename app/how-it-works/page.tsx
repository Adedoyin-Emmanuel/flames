import Header from "@/app/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="w-full flex items-center justify-around flex-col">
      <Header />
      <br></br>
      <section className="w-full max-w-[600px]  flex flex-col items-center  justify-center my-4 p-3">
        <h2 className="font-extrabold text-[20px] w-full text-start my-2">
          How it works
        </h2>
        <p className="text-justify">
          FLAMES is a playful game that forecasts the nature of a relationship
          between two people based on their names. If you're not familiar with
          FLAMES, it entails removing the common letters in both names, then
          counting the remaining letters as a whole number. This number is then
          used to iterate on the letters of the word "FLAMES" until a letter is
          selected as the final outcome. You can watch{" "}
          <Link
            className="underline"
            href={"https://www.youtube.com/watch?v=KUpMjgo4aUM"}
          >
            This video to better understand
          </Link>{" "}
          or{" "}
          <Link
            className="underline"
            href={
              "https://clipsave.ng/app/youtube?url=https://www.youtube.com/watch?v=KUpMjgo4aUM"
            }
          >
            Download the video .
          </Link>
          If you are a developer and you want to understand the technical
          aspects, you can view the repository here. Kindly star the repo.{" "}
          <Link
            className="underline"
            href={"https://github.com/adedoyin-emmanuel/flames"}
          >
            View repository on Github
          </Link>
        </p>

        <Link href={"/"} className="w-full">
          <Button className="w-full p-6 my-3">Back to app</Button>
        </Link>
      </section>
    </section>
  );
}
