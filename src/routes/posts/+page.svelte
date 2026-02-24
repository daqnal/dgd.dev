<script>
    const categories = [
        {
            name: "Articles",
            url: "/posts/articles",
        },
        {
            name: "Miscellaneous",
            url: "/posts/misc",
        },
    ];
</script>

<div class="w-full flex flex-col place-items-center">
    <div class="w-[95vw] sm:w-[85vw] md:w-[75vw] max-w-[1080px] my-8">
        <div class="w-full flex gap-2">
            <div class="flex-grow text-center bg-base-200 rounded-box">
                <p class="my-2">Pinned</p>
            </div>

            <div class="flex-grow text-center bg-base-200 rounded-box">
                <p class="my-2">Recent</p>
            </div>
        </div>

        {#each categories as { name, url }}
            <div>
                <a href={url} class="link link-primary">{name}</a>
            </div>
        {/each}
    </div>
</div>
