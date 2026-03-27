import { Rat, Waves, CircleUserRound, Sparkles, type Icon as IconType, Scroll } from "@lucide/svelte";

import FormalHomeworkMD from "$lib/md/landing/formal-homework.md";
import FlowysurfMD from "$lib/md/landing/flowysurf.md";
// import GrabagramMD from "$lib/md/landing/grabagram.md";
import MinisiteMD from "$lib/md/landing/minisite.md";
import RatMD from "$lib/md/landing/rat.md";
import HyprlandMD from "$lib/md/landing/hyprland.md";


interface Project {
    title: string;
    images: string[];
    icon: typeof IconType;
    link: string;
    desc: string;
    md: string;
}


interface Skill {
    name: string;
    proficiency?: number;
    desc?: string;
    link?: string;
}

interface SkillGroup {
    name: string;
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        name: "Programming Languages",
        skills: [
            {
                name: "Python",
                proficiency: 90
            },
            {
                name: "Java",
                proficiency: 100
            },
            {
                name: "JavaScript",
                proficiency: 70
            },
            {
                name: "Lua",
                proficiency: 10,
            },
            {
                name: "C",
                proficiency: 0,
                desc: "To be learned in class Spring 2026.",
            },
        ],
    },
    {
        name: "Libraries & Frameworks",
        skills: [
            {
                name: "React",
                proficiency: 70
            },
            {
                name: "Svelte",
                proficiency: 50
            },
            {
                name: "Django",
                proficiency: 40
            },
            {
                name: "Tauri",
                proficiency: 20,
            },
            {
                name: "Astro",
                proficiency: 60,
            },
            {
                name: "Hugo",
                proficiency: 20,
            },
            {
                name: "Bun",
                proficiency: 20
            },
            {
                name: "Prisma",
                proficiency: 30
            },
            {
                name: "Node.js",
                proficiency: 40,
            },
            {
                name: "Express.js",
                proficiency: 10,
            },
            {
                name: "TailwindCSS",
                proficiency: 100,
            },
        ],
    },
    {
        name: "Scripts & Markup",
        skills: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "LaTeX" },
            { name: "Typst" },
        ]
    },
    {
        name: "Software",
        skills: [
            {
                name: "Git",
                proficiency: 90
            },
            {
                name: "Vim/Neovim",
                proficiency: 40
            },
            {
                name: "VSCode"
            },
            {
                name: "Zed"
            },
            {
                name: "Obsidian"
            },
            {
                name: "DaVinci Resolve",
                proficiency: 90
            },
            {
                name: "Adobe Creative Cloud",
                proficiency: 80,
            },
            {
                name: "VirtualBox",
                proficiency: 50,
            },
            {
                name: "Blender",
                proficiency: 10,
            },
            {
                name: "Microsoft Office",
                proficiency: 70,
            },
            {
                name: "YunoHost"
            },
        ],
    },
    {
        name: "Operating Systems",
        skills: [
            { name: "Arch Linux" },
            { name: "Debian/Ubuntu" },
            { name: "Windows" },

        ]
    },
    {
        name: "CS Coursework",
        skills: [
            {
                name: "Intro to Computing (Python)",
            },
            {
                name: "Intro to OOP (Java)",
            },
            {
                name: "Data Structures & Algorithms",
            },
            {
                name: "Objects & Design",
            },
            {
                name: "Computer Organization & Principles",
            },
            {
                name: "Intro to Perception & Robotics",
            },
        ]
    },
    {
        name: "Mathematics Coursework",
        skills: [
            {
                name: "Integral Calculus",
            },
            {
                name: "Multivariable Calculus",
            },
            {
                name: "Linear Algebra",
            },
            {
                name: "Probability & Statistics",
            },
            {
                name: "Discrete Mathematics",
            },
        ]
    }
]

export const projects: Project[] = [
    {
        title: "flowysurf",
        icon: Waves,
        images: ["flowysurf.png", "flowysurf2.png", "flowysurf3.png"],
        link: "https://flowy.surf",
        desc: "Flowchart project manager",
        md: FlowysurfMD,
    },
    {
        title: "Typst Homework",
        icon: Scroll,
        images: ["proof1.png", "proof2.png", "subquestions.png"],
        link: "https://typst.app/universe/package/formal-homework",
        desc: "A small Typst package that provides an easy way to start writing formal homework documents",
        md: FormalHomeworkMD,
    },
    {
        title: "Hyprland Dotfiles",
        icon: Sparkles,
        images: ["hyprland.png"],
        link: "https://git.dgd.sh/dan/hyprland-dotfiles",
        desc: "Config files for a beautiful Hyprland setup on Arch Linux",
        md: HyprlandMD,
    },
    {
        title: "rat",
        icon: Rat,
        images: ["rat.gif"],
        link: "https://rat.dance",
        desc: "horizontally spinning rat",
        md: RatMD,
    },
    {
        title: "Personal Minisite",
        icon: CircleUserRound,
        images: ["minisite.png"],
        link: "https://git.dgd.sh/dan/personal-minisite-template",
        desc: "Template to get a cusotmized static portfolio site up and runing",
        md: MinisiteMD,
    },
]
