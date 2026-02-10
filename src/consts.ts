import { Instagram, Rat, Waves, CircleUserRound, Sparkles } from "@lucide/astro";

import { Content as FlowysurfMD } from "./md/flowysurf.md";
import { Content as GrabagramMD } from "./md/grabagram.md";
import { Content as MinisiteMD } from "./md/minisite.md";
import { Content as RatMD } from "./md/rat.md";
import { Content as HyprlandMD } from "./md/hyprland.md";



interface Project {
    title: string;
    icon: object;
    imgs: string[];
    link: string;
    desc: string;
    md: object;
}


interface Skill {
    name: string;
    desc?: string;
    proficiency: number;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

export const skills: SkillCategory[] = [
    {
        name: "Programming Languages",
        skills: [
            {
                name: "Python",
                proficiency: 90
            },
        ],
    },
]

export const projects: Project[] = [
    {
        title: "grabagram",
        icon: Instagram,
        imgs: ["grabagram.png"],
        link: "https://git.dgd.sh/dan/grabagram",
        desc: "Instagram reel downloader",
        md: GrabagramMD,
    },
    {
        title: "flowysurf",
        icon: Waves,
        imgs: ["flowysurf.png", "flowysurf2.png", "flowysurf3.png"],
        link: "https://flowy.surf",
        desc: "Flowchart project manager",
        md: FlowysurfMD,
    },
    {
        title: "rat",
        icon: Rat,
        imgs: ["rat.png"],
        link: "https://rat.dance",
        desc: "horizontally spinning rat",
        md: RatMD,
    },
    {
        title: "Personal Minisite",
        icon: CircleUserRound,
        imgs: ["minisite.png"],
        link: "https://git.dgd.sh/dan/personal-minisite-template",
        desc: "Template to get a cusotmized static portfolio site up and runing",
        md: MinisiteMD,
    },
    {
        title: "Hyprland Dotfiles",
        icon: Sparkles,
        imgs: ["hyprland.png"],
        link: "https://git.dgd.sh/dan/hyprland-dotfiles",
        desc: "Config files for a beautiful Hyprland setup on Arch Linux",
        md: HyprlandMD,
    },

]