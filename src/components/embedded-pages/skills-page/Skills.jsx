import "./Skills.css";

export default function Skills() {

  const skills = [
    {
      skilltype: "Scripts and Languages", 
      data: [
        {
          name: "Python", 
          desc: "Versatile high-level language", 
          iconPath: "/images/skill-icons/py.svg"
        }, 
        {
          name: "JavaScript", 
          desc: "Popular language used for web development", 
          iconPath: "/images/skill-icons/js.svg"
        },
        {
          name: "Java",
          desc: "Influential",
          iconPath: "/images/skill-icons/java.svg"
        },
        {
          name: "Lua",
          desc: "Brazil",
          iconPath: "/images/skill-icons/lua.svg",
          extraClasses: "invert"
        }
      ]
    },
    {
      skilltype: "Libraries and Frameworks", 
      data: [{
        name: "React", 
        desc: "JavaScript framework used for building responsive web applications", 
        iconPath: "/images/skill-icons/react.svg"
      },
      {
        name: "Astro",
        desc: "Web meta-framework for blogging and publishing content",
        iconPath: "/images/skill-icons/astro.svg"
      },
      {
        name: "TailwindCSS",
        desc: "CSS framework that utilizes utility classes for quick styling",
        iconPath: "/images/skill-icons/tailwind.svg"
      },
      {
        name: "Streamlit",
        desc: "CSS framework that utilizes utility classes for quick styling",
        iconPath: "/images/skill-icons/streamlit.svg"
      },
      {
        name: "daisyUI",
        desc: "CSS framework that utilizes utility classes for quick styling",
        iconPath: "/images/skill-icons/daisyui.svg"
      },
      {
        name: "Hugo",
        desc: "CSS framework that utilizes utility classes for quick styling",
        iconPath: "/images/skill-icons/hugo.svg"
      },
    ]
    },
    {
      skilltype: "Operating Systems", 
      data: [
        {
          name: "Arch Linux", 
          desc: "Advanced Linux distribution for customizability and minimalism", 
          iconPath: "/images/skill-icons/arch.svg"
        }, 
        {
          name: "Debian/Ubuntu", 
          desc: "Linux distribution of choice for servers and desktops due to its reliability and LTS release schedule", 
          iconPath: "/images/skill-icons/deb.svg"
        },
        {
          name: "Windows", 
          desc: "Microsoft's consumer and commercial OS with the highest desktop market share", 
          iconPath: "/images/skill-icons/windows.svg"
        },
        {
          name: "Windows Server", 
          desc: "Commercial server OS based on the Windows desktop", 
          iconPath: "/images/skill-icons/windows_server.svg"
        },
      ]
    },
    {
      skilltype: "Software", 
      data: [
        {
          name: "Visual Studio Code", 
          desc: "Microsoft's industry standard IDE", 
          iconPath: "/images/skill-icons/vsc.svg"
        }, 
        {
          name: "Vim/Neovim", 
          desc: "Powerful keyboard-based text editor extendable to be an IDE", 
          iconPath: "/images/skill-icons/vim.svg"
        },
        {
          name: "DaVinci Resolve",
          desc: "",
          iconPath: "/images/skill-icons/resolve.svg"
        },
        {
          name: "Obsidian",
          desc: "",
          iconPath: "/images/skill-icons/obsidian.svg"
        }
      ]
    },
  ];

  return (
    <div className="bg-base-100/50 rounded-box w-full h-full flex justify-evenly">
      {skills.map(({skilltype, data}, index) => (
        <div className="w-full text-center flex flex-col gap-4 pt-4">
          <div className="h-12 flex place-items-center place-content-center">
            <span className="font-bold">{skilltype}</span>
          </div>

          <div className="marquee flex-1">
            {skills[index].data.map(({name, desc, iconPath, extraClasses}, index) => (
              <div className="flex flex-col place-items-center marquee-content w-full">
                <img src={iconPath} alt={`${name} logo`} className={`w-16 h-16 mb-2 grayscale ${extraClasses}`} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
