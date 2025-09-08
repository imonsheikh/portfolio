import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
        <div>
          <h3 className="font-semibold text-white/70 tracking-wider mb-1">
            MERN Stack Developer
          </h3>
          <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
          <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
            MD Imon Mia
          </h1>
        </div>
 
          <div className="w-full h-[170px] md:h-[140px] relative ">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
        <Link
          download
          href={"/resume.pdf"}
          className="bg-transparent rounded-full border border-lightSky/50 flex items-center px-6 py-2.5 gap-2 text-sm text-lightSky hover:bg-hoverColor hover:text-black hoverEffect"
        >
          Download Resume
          <Download className="w-4 h-4" />
        </Link> 
        <SocialLinks/> 
        <Statistics/>
      </div>
      <Photo/>
    </Container>
  );
}
