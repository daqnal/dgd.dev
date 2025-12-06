import { Instagram, Rat, Waves } from "@lucide/svelte"

// Import MD files for the projects
import ratmd from "$lib/md/projects/rat.md?raw";
import fsmd from "$lib/md/projects/flowysurf.md?raw";
import ggmd from "$lib/md/projects/grabagram.md?raw";


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
]
