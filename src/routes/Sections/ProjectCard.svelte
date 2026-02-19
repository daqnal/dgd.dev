<script>
    import { SquareArrowOutUpRight } from "@lucide/svelte";
    import SvelteMarkdown from "svelte-marked";

    let { title, images, icon: Icon, link, desc, md } = $props();
</script>

<div>
    <div class="relative rounded-tl-box">
        <div class="carousel flex w-full">
            {#each images as image, i}
                <div id="item{i + 1}" class="carousel-item relative w-full">
                    <img
                        src="/images/projects/{image}"
                        alt={title}
                        class="w-full"
                    />
                </div>
            {/each}
        </div>
        <div
            style="position: absolute; left: 0; right: 0; margin-inline: auto; width: fit-content;"
            class="bottom-4 flex place-items-center gap-4"
        >
            <a
                class="btn btn-soft font-bold flex gap-2 place-content-center p-2 rounded-full shadow-lg backdrop-blur-sm opacity-85"
                href={link}
                target="_blank"
            >
                <Icon class="w-5 inline" />
                <span>{title}</span>
            </a>

            <div class="flex gap-2">
                {#if images.length > 1}
                    {#each Array(images.length) as _, i}
                        <a
                            href="#item{i + 1}"
                            class="btn btn-sm btn-circle btn-soft">{i + 1}</a
                        >
                    {/each}
                {/if}
            </div>
        </div>
    </div>

    <article class="prose w-full bg-base-200 p-4 rounded-b-box">
        <SvelteMarkdown source={md} />
    </article>
</div>
