import { Rat, Waves } from "@lucide/svelte"

// Import MD files for the projects
import ratmd from "$lib/md/projects/rat.md?raw";
import fsmd from "$lib/md/projects/flowysurf.md?raw";


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
    title: "rat",
    icon: Rat,
    img: "/images/projects/rat.png",
    link: "https://rat.dance",
    desc: "horizontally spinning rat",
    md: ratmd,
  },
  {
    title: "flowysurf",
    icon: Waves,
    img: "/images/projects/flowysurf.png",
    link: "https://flowy.surf",
    desc: "Flowchart project manager",
    md: fsmd,
  },
]
