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
    {
      name: "Photos",
      url: "/posts/photos",
    },
  ];

  const dev = true;
</script>

{#if !dev}
  <div class="w-full flex flex-col place-items-center">
    <div
      class="flex flex-col gap-4 w-[95vw] sm:w-[85vw] md:w-[75vw] max-w-[1080px] my-8"
    >
      <div class="w-full flex gap-2 min-h-32">
        <div class="flex-grow text-center bg-base-200 rounded-box">
          <p class="my-2">Pinned</p>
        </div>

        <div class="flex-grow text-center bg-base-200 rounded-box">
          <p class="my-2">Recent</p>
        </div>
      </div>

      {#each categories as { name, url }}
        <div class="w-full bg-base-200 p-3 rounded-box min-h-30">
          <a href={url} class="link text-xl">{name}</a>
        </div>
      {/each}
    </div>
  </div>
{:else}
  <div class="w-full flex flex-col place-items-center p-16">
    <p class="text-5xl">🚧</p>
    <p class="text-xl">Under Construction</p>
    <p>
      See the <a
        target="_blank"
        href="https://git.dgd.sh/dan/dgd.dev/src/branch/v5"
        class="link">v5 branch</a
      > for development progress
    </p>
  </div>
{/if}
