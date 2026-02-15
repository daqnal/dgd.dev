<script>
    import SvelteMarkdown from "svelte-marked";
    import md from "$lib/md/info.md?raw";
</script>

<div>
    <h2 id="info" class="text-4xl text-center mb-4 mt-8">Info</h2>

    <div class="bg-base-200 rounded-box p-4">
        <article class="prose">
            <SvelteMarkdown source={md} />
        </article>
    </div>
</div>
