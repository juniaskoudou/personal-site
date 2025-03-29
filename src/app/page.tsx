"use client";
import { Icons } from "@/components/icons/Icons";

const aboutMe = `I’m Junias, a product designer based in Paris. 
I am passionate about design and tech in general. 
I love crafting aesthetic and  functional web and mobile apps. 
I believe that creativity, data and iteration are key to creating meaningful user experiences.`

const aboutPhotography = `In late 2023, I started investing in my passion for photography. I quickly fell in love with Fujifilm cameras and their custom recipes as they allow me to shoot with little to no post-editing. The journey so far has been incredible.`
export default function Home() {

  return (
        <main className="flex flex-col gap-6">
          <section className="flex flex-col gap-4 text-stone-950">
            <div className="bg-[url('/HeaderImage.png')] bg-cover bg-center h-[80px] relative">
              <span className="font-mono uppercase font-medium text-[10px] text-white bg-black/30 px-2 py-1 absolute bottom-2 left-2">
                Skytteholm, Sweden
              </span>
            </div>
            <h1 className="font-[Newsreader] sm:text-xl text-lg font-medium italic tracking-tight">
              Welcome to my digital space
            </h1>
            <p className="md:text-md text-sm text-primary leading-relaxed tracking-tight font-medium">
              {aboutMe}
            </p>
            <p className="md:text-md text-sm text-primary leading-relaxed tracking-tight font-medium">
              {aboutPhotography}
            </p>
            <span className="font-[Caveat] font-normal text-[26px]">
              jhk.
            </span>
          </section>

          <hr className="border-stone-200 border-dashed" />

          <section className="flex flex-col gap-6">
            <h1 className="font-[Newsreader] text-lg font-medium italic tracking-tight">
              Today
            </h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icons.Camera className="size-6 text-stone-950" />
                  <span className="font-medium text-sm tracking-tight text-stone-950">Street photographer</span>
                </div>
                <p className="text-xs text-stone-500 tracking-tight font-normal">I shoot with my Fuijifilm XT 30 II. My got to lense is the Sigma 18-50mm f/2.8 DC DN. Below are the available photos.</p>
                <div className="text-xs text-stone-400 tracking-tight font-medium">Coming soon !</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icons.Layers className="size-6 text-stone-950" />
                  <span className="font-medium text-sm tracking-tight text-stone-950"> Product Designer</span>
                </div>
                <p className="text-xs text-stone-500 tracking-tight font-normal">
                  I recently joined the design team at Datadog where I&apos;m working in the UX monitoring team.
                </p>
              </div>
            </div>
          </section>
        </main>
  );
}
