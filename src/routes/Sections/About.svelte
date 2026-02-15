<script>
    import SvelteMarkdown from "svelte-marked";

    import md from "$lib/md/about.md?raw";
</script>

<div>
    <h2 id="about" class="text-4xl text-center mb-4 mt-8">About</h2>

    <article class="prose bg-base-200 p-4 rounded-box">
        <SvelteMarkdown source={md} />
    </article>
</div>
