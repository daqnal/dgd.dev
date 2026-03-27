<script>
  import { ChevronDown } from "@lucide/svelte";

  const tags = ["Fullstack", "UI/UX", "Linux", "IT", "Video Editing"];

  const colorCategories = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-success",
    "bg-warning",
    "bg-error",
  ];
</script>

<div
  class="text-center flex flex-col place-items-center place-content-center w-full h-[100vh]"
  id="top"
>
  <div class="absolute z-[-1] w-[95vw] h-[95vh]">
    <enhanced:img
      class="object-cover w-full h-full rounded-box"
      src="/src/lib/assets/images/mtns.jpg"
    />
  </div>

  <h1 class="text-5xl text-white/90 mb-2 text-shadow-md">Daniel Durling</h1>

  <span
    class="text-rotate w-fit text-2xl duration-10000 italic rounded-full capitalize mx-2 text-neutral"
  >
    <span>
      {#each tags as tag, i}
        <span class="w-full px-4 {colorCategories[i]}">{tag}</span>
      {/each}
    </span>
  </span>

  <div class="mt-6 animate-bounce text-neutral-content">
    <a href="#about" class="btn btn-circle btn-ghost">
      <ChevronDown />
    </a>
  </div>
</div>
