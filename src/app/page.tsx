
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { MessageCircleDashed } from "lucide-react";
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <main className="mx-auto mt-[256px] mb-[100px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
          <div className="flex flex-col gap-11 justify-start items-start">
            <div className="flex flex-col gap-4 justify-start items-start">
              <h1 className="text-6xl font-normal text-foreground tracking-tight">
                Hey, I&apos;m Junias K.
              </h1>
              <p className="font-mono font-light uppercase text-foreground/85 text-sm leading-relaxed">
                Product Designer - Curently @ DATADOG 
                <br />
                + Casual Photographe & Vibe Coder 
                <br />
                + Based Paris, France
              </p>
            </div>

            <div className="flex gap-2">
              <Button> 
                Send an email 
              </Button>
              <Button size="icon" variant="secondary"> 
                <MessageCircleDashed /> 
              </Button>
              <Button size="icon" variant="secondary"> 
                <MessageCircleDashed /> 
              </Button>
            </div>
            

          </div>

          <div className="flex gap-9 justify-start items-center w-full">
            {[
              "I love about crafting aesthetic and highly functional software and apps. I believe that creativity and consistency are key to creating meaningful experiences.",
              "I have always been interested in coding. As a self-taught designer, I actually came across programing first back in 2013, years before learning product design.",
              "In late 2023, I started investing in my passion for photography. I quickly fell in love with Fujifilm cameras, and the journey has been incredible so far."
            ].map((text, i) => (
              <p key={i} className="text-foreground/85 text-md w-full font-light">
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-[1392px] mx-auto mt-[100px]">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/MAAT-Lisbone.png"
              alt="Photo by Drew Beamer"
              fill
            />
          </AspectRatio>

        </div>
      </main>
      <footer className="w-[1392px] mx-auto border-t border-primary/20 py-4 flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Junias.
        </p>
        <p>v 0.18.03.24</p>
      </footer>
    </div>

  );
}
