<script>
  import { ArrowLeftFromLine } from "@lucide/svelte";

  export let data;
</script>

<div class="w-full flex flex-col place-items-center">
  <div class="w-[95vw] sm:w-[85vw] md:w-[75vw] max-w-[1080px] my-8">
    <div class="w-full mb-2 flex">
      <div class="flex-grow">
        <h1 class="text-3xl">{data.title}</h1>
        <i>{data.form}</i>
        <p>
          {new Date(data.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div class="flex gap-1">
          <!-- <span>Tags:</span> -->
          {#each data.tags as tag}
            <div class="badge badge-soft badge-primary">{tag}</div>
          {/each}
        </div>
      </div>

      <div class="flex gap-1 self-end">
        <button
          onclick={() => window.history.back()}
          class="btn btn-sm rounded-full tooltip"
          data-tip="Go back"
        >
          <ArrowLeftFromLine class="w-4" />
        </button>
      </div>
    </div>

    <article class="w-full max-w-full prose bg-base-200 p-3 rounded-box">
      <svelte:component this={data.content} />
    </article>
  </div>
</div>
