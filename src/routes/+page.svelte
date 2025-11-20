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
    Moon,
    Presentation,
    ScrollText,
    Sun,
  } from "@lucide/svelte";

  let components = [
    { title: "First Glance", comp: FirstGlance, icon: CircleUser },
    { title: "Projects", comp: Projects, icon: Presentation },
    { title: "Skills", comp: Skills, icon: BrainCircuit },
    { title: "About Me", comp: About, icon: ScrollText },
    { title: "Links & Contact", comp: Links, icon: Link2 },
  ];

  let compIdx = $state(1);

  function handleClick(index) {
    compIdx = index;
    console.log(scrollY);
  }

  // Switches pages up or down on scroll
  $effect(() => {
    function handler(e) {
      if (Math.abs(e.deltaY) < 40) return;
      compIdx = Math.max(
        0,
        Math.min(components.length - 1, compIdx + (e.deltaY > 0 ? 1 : -1)),
      );
    }
    window.addEventListener("wheel", handler);
    return () => window.removeEventListener("wheel", handler);
  });
</script>

<div class="flex h-full">
  <div class="grow p-4">
    {#each [components[compIdx].comp] as Comp}
      <Comp />
    {/each}
  </div>
  <div
    class="flex flex-col place-content-center place-items-center gap-4 grow-0 pr-4 py-4"
  >
    {#each components as { title, icon: Icon }, i}
      <PageButton
        {title}
        icon={Icon}
        onclick={() => handleClick(i)}
        active={i === compIdx}
      />
    {/each}
    <button class="btn btn-circle tooltip tooltip-left" data-tip="Toggle theme">
      <label class="swap swap-rotate">
        <input type="checkbox" class="theme-controller" value="emerald" />
        <Sun class="swap-off w-5 m-auto" />
        <Moon class="swap-on w-5 m-auto" />
      </label>
    </button>
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
