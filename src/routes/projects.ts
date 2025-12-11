import { Instagram, Rat, Waves, CircleUserRound } from "@lucide/svelte"

// Import MD files for the projects
import ratmd from "$lib/md/projects/rat.md?raw";
import fsmd from "$lib/md/projects/flowysurf.md?raw";
import ggmd from "$lib/md/projects/grabagram.md?raw";
import msmd from "$lib/md/projects/minisite.md?raw";


interface Project {
  title: string;
  icon: object;
  img: string;
  link: string;
  desc: string;
  md: string;
}


export const projects: Project[] = [
  {
    title: "grabagram",
    icon: Instagram,
    img: "images/projects/grabagram.png",
    link: "https://git.dgd.sh/dan/grabagram",
    desc: "Instagram reel downloader",
    md: ggmd,
  },
  {
    title: "flowysurf",
    icon: Waves,
    img: "/images/projects/flowysurf.png",
    link: "https://flowy.surf",
    desc: "Flowchart project manager",
    md: fsmd,
  },
  {
    title: "rat",
    icon: Rat,
    img: "/images/projects/rat.png",
    link: "https://rat.dance",
    desc: "horizontally spinning rat",
    md: ratmd,
  },
  {
    title: "Personal Minisite",
    icon: CircleUserRound,
    img: "/images/projects/minisite.png",
    link: "https://git.dgd.sh/dan/personal-minisite-template",
    desc: "Template to get a cusotmized static portfolio site up and runing.",
    md: msmd,
  }

]
