<script>
  import { ExternalLink } from "@lucide/svelte";
  import RatMD from "$lib/md/projects/rat.md";

  const mdMap = {
    rat: RatMD,
  };
  // see chat history to finish this feature

  let { project } = $props();
</script>

<div class="w-full h-full flex flex-col p-4">
  <div class="w-full flex flex-col place-items-center gap-2">
    <img
      src={project.img}
      alt={project.shortDesc}
      class="max-w-3/4 max-h-3/4 rounded-box"
    />
    <p>{project.desc}</p>
    <a
      href={project.link}
      target="_blank"
      class="btn btn-sm btn-primary rounded-full"
    >
      <ExternalLink class="w-4 h-4" />
      <span>Visit {project.title}</span>
    </a>
  </div>
  <article class="prose"></article>
</div>
