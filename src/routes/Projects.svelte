<script lang="ts">
  import { projects } from "./projects";
  import ProjectDisplay from "./ProjectDisplay.svelte";

  let projIndex = $state(0);

  function handleClick(i: number) {
    projIndex = i;
  }
</script>

<div class="flex gap-4 w-full h-full">
  <div class="bg-base-200 rounded-box p-4 flex flex-col">
    <h2 class="text-xl font-bold text-center mb-4">Projects</h2>
    <ul class="menu w-75 bg-base-100 rounded-box px-4 py-4 flex-grow gap-2">
      {#each projects as { title, icon: Icon }, i}
        <li class="flex">
          <button
            class="btn btn-ghost w-full {i === projIndex
              ? 'bg-primary text-primary-content'
              : ''}"
            onclick={() => handleClick(i)}
          >
            <Icon />
            <p>{title}</p>
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="bg-base-200 flex-grow h-full rounded-box">
    <ProjectDisplay project={projects[projIndex]} />
  </div>
</div>
