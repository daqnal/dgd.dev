<script>
  import { Rat, Waves } from "@lucide/svelte";

  let projects = [
    {
      title: "rat",
      icon: Rat,
      img: "/images/projects/rat.png",
      link: "https://rat.dance",
      shortDesc: "horizontally spinning rat",
      fullDesc: "A 3D horizontally spinning rat made with React Three Fiber",
    },
    {
      title: "flowysurf",
      icon: Waves,
      img: "/images/projects/flowysurf.png",
      link: "https://flowy.surf",
      shortDesc: "Flowchart project manager",
      fullDesc:
        "flowysurf is a lightweight visual project manager optimized for planning milestones and tasks with a clean UI. Drag nodes, connect task flows, and track milestone progress — milestones automatically aggregate upstream Task completion.",
    },
  ];
</script>

<div class="flex gap-4 w-full h-full">
  <div class="bg-base-200 rounded-box p-4 flex flex-col">
    <h2 class="text-xl font-bold text-center mb-4">Projects</h2>
    <ul class="menu w-75 bg-base-100 rounded-box px-4 py-4 flex-grow">
      {#each projects as { title, icon: Icon, img, link, desc }, i}
        <li class="flex">
          <btn class="w-full h-full">
            <Icon />
            <p>{title}</p>
          </btn>
        </li>
      {/each}
    </ul>
  </div>
  <div class="bg-base-200 flex-grow h-full rounded-box"></div>
</div>
