<script lang="ts">
    import { projects } from "../../consts";
    import ProjectCard from "./ProjectCard.svelte";

    let projectIdx = $state(0);

    function handleClick(i: number) {
        projectIdx = i;
    }
</script>

<div>
    <h2 id="projects" class="text-4xl text-center mb-4 mt-8">Projects</h2>

    <div
        class="w-full max-w-full flex flex-wrap place-content-evenly gap-2 bg-base-200 rounded-t-box p-2"
    >
        {#each projects as { title, icon: Icon }, i}
            <button
                class="btn btn-soft btn-primary"
                onclick={() => handleClick(i)}
                disabled={projectIdx === i}
            >
                <Icon />
                <span>{title}</span>
            </button>
        {/each}
    </div>

    <ProjectCard
        title={projects[projectIdx].title}
        images={projects[projectIdx].images}
        icon={projects[projectIdx].icon}
        link={projects[projectIdx].link}
        desc={projects[projectIdx].desc}
        md={projects[projectIdx].md}
    />
</div>
