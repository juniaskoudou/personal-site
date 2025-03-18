
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { MessageCircleDashed } from "lucide-react";
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1>
                Hey, I&apos;m Junias K.
              </h1>
              <p>
                Product Designer - Curently @ DATADOG 
                <br />
                + Casual Photographe & Vibe Coder 
                <br />
                + Based Paris, France
              </p>
            </div>

            <div>
              <Button> Send an email </Button>
              <Button> 
                <MessageCircleDashed /> 
              </Button>
              <Button> 
                <MessageCircleDashed /> 
              </Button>
            </div>
            

          </div>

          <div>
            <p>
              I am passionate about crafting aesthetically pleasing and highly functional software and apps. I believe that creativity and consistency are key to creating meaningful experiences.
            </p>
            <p>
              I have always been interested in coding. As a self-taught designer, I actually came across programing first, back in 2013, years before learning product design. Today it&apos;s just vibe coding with AI.
            </p>
          </div>
        </div>

        <div className="max-w-[1392px] mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/MAAT-Lisbone.png"
              alt="Photo by Drew Beamer"
              fill
            />
          </AspectRatio>

        </div>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Junias.
        </p>
        <p>v 0.18.03.24</p>
      </footer>
    </div>

  );
}
