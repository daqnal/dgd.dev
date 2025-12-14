<script>
  import { projects } from "./projects";
  import ProjectDisplay from "./ProjectDisplay.svelte";

  let projIndex = $state(0);

  function handleClick(i) {
    projIndex = i;
  }
</script>

<div class="flex gap-2 w-full h-full">
  <div class="w-2/9 min-w-2/9 bg-base-200 rounded-box p-2 flex flex-col">
    <h2 class="text-xl font-bold text-center mb-2">Projects</h2>
    <ul class="menu w-full bg-base-100 rounded-box px-2 py-2 flex-grow gap-2">
      {#each projects as { title, icon: Icon }, i}
        <li class="flex w-full">
          <button
            class="btn btn-ghost w-full btn-wide {i === projIndex
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
