import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialData = [
  {
    title: "Github",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/imonsheikh",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/md-imon-mia-59b408202/",
  },
  {
    title: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    link: "https://www.facebook.com/mdemon.sheikh.758",
  },
  {
    title: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    link: "https://www.instagram.com/imon1971/",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3">
        {socialData.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.link}
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/40 hover:text-lightSky hoverEffect"
              >
                {item.icon}
              </Link>
            </TooltipTrigger> 
            <TooltipContent className="text-xs uppercase font-medium rounded-md border border-lightSky/30">
                {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
