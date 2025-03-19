"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1080px] mx-auto px-4">
        <main className="mt-[100px] sm:mt-[256px] sm:mb-25 mb-10">
          <div className="flex flex-col sm:gap-14 gap-8 w-full">
            <div className="flex flex-col sm:gap-11 gap-6 justify-start items-start">
              <div className="flex flex-col gap-4 justify-start items-start">
                <h1 className="sm:text-6xl text-5xl font-normal text-primary tracking-tight">
                  Hey, I&apos;m Junias K.
                </h1>
                  <p className="font-mono font-light uppercase text-foreground/85 text-sm sm:text-lg leading-relaxed">
                  Product Designer
                  <br />
                  + Casual Photographe
                  <br />
                  + Based Paris, France
                </p>
              </div>

              <div className="flex gap-2">
                <Button className="cursor-pointer" onClick={() => window.open('mailto:juniashk@gmail.com', '_blank')}> 
                  Send an email 
                </Button>
                <Button 
                  className="cursor-pointer" 
                  size="icon" 
                  variant="secondary" 
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/Juniask/', '_blank', 'noopener,noreferrer');
                  }}
                > 
                  <Linkedin /> 
                </Button>
                <Button 
                  className="cursor-pointer" 
                  size="icon" 
                  variant="secondary" 
                  onClick={() => {
                    window.open('https://www.instagram.com/junias.jpeg/', '_blank', 'noopener,noreferrer');
                  }}
                > 
                  <Instagram /> 
                </Button>
              </div>
              

            </div>

            <div className="w-full flex flex-col space-y-4 sm:space-y-6 text-primary/70 sm:text-[20px] text-sm font-light  text-justify tracking-tight">
              <p>
                Welcome to my digital space. Here you&apos;ll find my design project,  photos and thoughts on various topics. 
              </p>
              <p>
              As for me, I am passionate about design and tech in general. I came across programming and design in high school back in 2012. Started with coding in visual basic for windows apps, I built stuff like this or this. Then I discover graphics design, UI design and video editing.
              </p>
              <p>
              My family and I live in Paris, but I was born and raise in Abidjan, Côte d&apos;Ivoire. I moved to France in 2021 to complete my education in business and marketing (nothing to do with design right?).
              </p>
              <p>
              I love  crafting aesthetic and highly functional web software and mobile apps. I believe that creativity, combined with consistency and iteration, is key to creating meaningful experiences for humans.
              </p>
              <p>
              In late 2023, I started investing in my passion for photography. I quickly fell in love with Fujifilm cameras and their custom recipes as they allow me to shoot with little to no post-editing. The journey so far has been incredible.
              </p>
              
            </div>
          </div>

          <div className="sm:mt-25 mt-10 flex flex-col gap-4 justify-start items-center">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src="/DSCF7591.JPG"
                alt="Chasing Magic - Lisboa, Portugal - Junias K."
                fill
                className="object-cover"
              />
            </AspectRatio>
            <span className="text-xs text-primary font-mono font-normal uppercase tracking-tight text-center">
              Chasing Magic - Lisboa, Portugal
            </span>
          </div>
        </main>
        <footer className="border-t border-primary py-2 mb-5 flex justify-between items-center text-primary text-xs font-normal tracking-tight">
          <p>
            &copy; {new Date().getFullYear()} Junias.
          </p>
          <p>v0.0.1</p>
        </footer>
      </div>
    </div>

  );
}
