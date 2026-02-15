<script>
    import { projects } from "../../consts";
    import ProjectCard from "../../components/ProjectCard.svelte";
    import Icon from "../../components/Icon.astro";
</script>

<div
    id="projects"
    class="flex flex-col max-w-full place-items-center my-4 content-box"
>
    <h2 class="text-4xl section-title">Projects</h2>

    <div
        class="bg-base-200 w-[65ch] max-w-full p-4 rounded-box flex flex-col gap-2"
    >
        {#each projects as { title, images, icon, link, desc, md }, i}
            <Icon IconComponent={icon} />

            <!-- <ProjectCard
                {title}
                {images}
                Icon={icon}
                {link}
                {desc}
                Markdown={md}
            /> -->
        {/each}
    </div>
</div>
