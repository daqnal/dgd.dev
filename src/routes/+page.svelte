<script>
  import PageButton from "./PageButton.svelte";
  import FirstGlance from "./FirstGlance.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
  import About from "./About.svelte";
  import Links from "./Links.svelte";

  import {
    BrainCircuit,
    CircleUser,
    Link2,
    Presentation,
    ScrollText,
  } from "@lucide/svelte";

  let components = [
    { comp: FirstGlance, icon: CircleUser },
    { comp: Projects, icon: Presentation },
    { comp: Skills, icon: BrainCircuit },
    { comp: About, icon: ScrollText },
    { comp: Links, icon: Link2 },
  ];

  let currentComponentIdx = $state(0);

  function handleClick(index) {
    currentComponentIdx = index;
  }
</script>

<div class="flex h-full">
  <div class="grow p-4">
    {#each [components[currentComponentIdx].comp] as Comp}
      <Comp />
    {/each}
  </div>
  <div class="flex flex-col place-content-center gap-4 grow-0 px-4">
    {#each [components] as btn}
      <PageButton icon={btn.icon} />
    {/each}
  </div>
</div>

<!-- <style> -->
<!--   .main { -->
<!--     display: flex; -->
<!--     width: 100%; -->
<!--     height: 100%; -->
<!--   } -->
<!--   .buttons-container { -->
<!--     display: flex; -->
<!--     flex-direction: column; -->
<!--     flex-grow: 0; -->
<!--     justify-content: center; -->
<!--     gap: 25px; -->
<!--     padding-left: 25px; -->
<!--     padding-right: 25px; -->
<!--   } -->
<!--   .content-container { -->
<!--     flex-grow: 1; -->
<!--   } -->
<!-- </style> -->
