"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!pageRef.current) return;

      const container = pageRef.current;
      container.style.opacity = "1";

      const heading = container.querySelector("h1");
      const introLines = container.querySelectorAll(".intro-text span");
      const buttons = container.querySelector(".button-group");
      const paragraphs = container.querySelectorAll(".bio-paragraph");
      const imageSection = container.querySelector(".image-section");

      const animationSettings = {
        duration: 0.8,
        easing: [0.25, 0.1, 0.25, 1]
      };

      if (heading) {
        animate(
          heading as HTMLElement,
          { 
            opacity: [0, 1], 
            y: [15, 0] 
          },
          animationSettings
        );
      }

      if (introLines.length) {
        animate(
          Array.from(introLines) as HTMLElement[],
          { 
            opacity: [0, 1], 
            y: [15, 0] 
          },
          { 
            ...animationSettings,
            delay: stagger(0.05, { startDelay: 0.15 }),
          }
        );
      }

      
      if (buttons) {
        animate(
          buttons as HTMLElement,
          { 
            opacity: [0, 1], 
            y: [15, 0] 
          },
          { 
            ...animationSettings,
            delay: 0.1,
          }
        );
      }

      if (paragraphs.length) {
        animate(
          Array.from(paragraphs) as HTMLElement[],
          { 
            opacity: [0, 1], 
            y: [15, 0] 
          },
          { 
            ...animationSettings,
            delay: stagger(0.03, { startDelay: 0.3}), 
          }
        );
      }

      if (imageSection) {
        animate(
          imageSection as HTMLElement,
          { 
            opacity: [0, 1], 
            y: [15, 0] 
          },
          { 
            ...animationSettings,
            delay: 0.7,
          }
        );
      }

    });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div 
        className="max-w-[1080px] mx-auto px-4" 
        ref={pageRef} 
        style={{ opacity: 0, transition: "opacity 0.2s ease" }}
      >
        <main className="mt-[100px] sm:mt-[256px] sm:mb-25 mb-10">
          <div className="flex flex-col sm:gap-14 gap-8 w-full max-w-[520px] mx-auto">
            <div className="flex flex-col sm:gap-11 gap-6 justify-start items-start">
              <div className="flex flex-col gap-3 sm:gap-4 justify-start items-start">
                <h1 className="sm:text-6xl text-4xl font-semibold text-primary tracking-tighter">
                  Hey, I&apos;m Junias K.
                </h1>
                <div className="font-mono font-normal uppercase text-foreground/85 text-sm sm:text-lg leading-relaxed intro-text flex flex-col">
                  <span>Product Designer @ Datadog</span>
                  <span>+ Casual Photographer</span>
                  <span>+ Based Paris, France</span>
                </div>
              </div>

              <div className="flex gap-2 button-group">
                <Button
                  className="cursor-pointer"
                  onClick={() => {
                    datadogRum.addAction('email_clicked', {
                      email: 'juniashk@gmail.com',
                      location: 'homepage'
                    });
                    window.open("mailto:juniashk@gmail.com", "_blank");
                  }}
                >
                  Send an email
                </Button>
                <Button
                  className="cursor-pointer"
                  size="icon"
                  variant="secondary"
                  onClick={() => {
                    datadogRum.addAction('linkedin_clicked', {
                      profile: 'Juniask',
                      location: 'homepage'
                    });
                    window.open(
                      "https://www.linkedin.com/in/Juniask/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <Linkedin />
                </Button>
                <Button
                  className="cursor-pointer"
                  size="icon"
                  variant="secondary"
                  onClick={() => {
                    datadogRum.addAction('instagram_clicked', {
                      profile: 'junias.jpeg',
                      location: 'homepage'
                    });
                    window.open(
                      "https://www.instagram.com/junias.jpeg/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <Instagram />
                </Button>
              </div>
            </div>

            <div className="w-full flex flex-col space-y-4 sm:space-y-6 text-primary sm:text-[26px] text-lg font-medium tracking-tight">
              <p className="bio-paragraph">
                Welcome to my digital space. Here you&apos;ll find my design project, photos and
                thoughts on various topics. (soon)
              </p>
              <p className="bio-paragraph">
                As for me, I am passionate about design and tech in general. I came across
                programming and design in high school back in 2012. Started with coding in visual
                basic for windows apps, then I discover graphics design, UI design and video editing.
              </p>
              <p className="bio-paragraph">
                I live in Paris, but I was born and raise in Abidjan, Côte
                d&apos;Ivoire. I moved to France in 2021 to complete my education in business and
                marketing (nothing to do with design right?).
              </p>
              <p className="bio-paragraph">
                I love crafting aesthetic and highly functional web software and mobile apps. I
                believe that creativity, combined with consistency and iteration, is key to creating
                meaningful user experiences.
              </p>
              <p className="bio-paragraph">
                In late 2023, I started investing in my passion for photography. I quickly fell in
                love with Fujifilm cameras and their custom recipes as they allow me to shoot with
                little to no post-editing. The journey so far has been incredible.
              </p>
            </div>
          </div>

          <div className="sm:mt-25 mt-10 flex flex-col sm:gap-4 gap-2 justify-start items-center image-section">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src="/DSCF7591.JPG"
                alt="Chasing Magic - Lisboa, Portugal - Junias K."
                fill
                className="object-cover"
              />
            </AspectRatio>
            <span className="text-[10px] sm:text-xs text-primary font-mono font-normal uppercase tracking-tight text-center">
              Chasing Magic - Lisboa
            </span>
          </div>
        </main>
        <footer className="border-t border-primary py-2 mb-5 flex justify-between items-center text-primary text-xs font-normal tracking-tight">
          <p>&copy; {new Date().getFullYear()} Junias.</p>
          <p>v0.2</p>
        </footer>
      </div>
    </div>
  );
}
