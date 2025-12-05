<script>
  import { marked } from "marked";
  import { ExternalLink } from "@lucide/svelte";

  let { project } = $props();
</script>

<div
  class="w-full h-full flex flex-col place-items-center md:flex-row p-4 gap-4 overflow-auto"
>
  <div class="w-full md:w-4/7 flex flex-col place-items-center gap-2">
    <img
      src={project.img}
      alt={project.shortDesc}
      class="max-w-3/4 md:max-w-full max-h-3/4 md:max-h-full rounded-box"
    />
    <p>{project.desc}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-sm btn-primary rounded-full"
    >
      <ExternalLink class="w-4 h-4" />
      <span>Visit {project.title}</span>
    </a>
  </div>
  <div class="w-full md:w-3/7 h-full flex flex-col place-content-center">
    <h1 class="text-5xl font-black italic my-2 ml-2">{project.title}</h1>
    <article
      class="prose w-full h-fit max-h-3/4 bg-base-100 p-4 rounded-box overflow-auto"
    >
      {@html marked(project.md)}
    </article>
  </div>
</div>
