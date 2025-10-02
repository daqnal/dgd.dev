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
        }
      ]
    },
    {
      skilltype: "Libraries and Frameworks", 
      data: [{
        name: "React", 
        desc: "JavaScript framework used for building responsive web applications", 
        iconPath: "/images/skill-icons/react.svg"
      }]
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
          iconPath: "/images/skill-icons/nvim.svg"
        }
      ]
    },
  ];

  return (
    <div className="bg-base-100/50 rounded-box w-full h-full flex justify-evenly p-4">
      {skills.map(({skilltype, data}, index) => (
        <div className="w-full text-center">
          <div className="mb-4">
            <span className="">{skilltype}</span>
          </div>

          <div className="marquee">
            {skills[index].data.map(({name, desc, iconPath}, index) => (
              <div className="flex flex-col place-items-center marquee-content">
                <img src={iconPath} alt={`${name} logo`} className="w-16 h-16" />
                <span>{name}</span>
              </div>
            ))}
          </div>
          
        </div>
      ))}
    </div>
  );
}
