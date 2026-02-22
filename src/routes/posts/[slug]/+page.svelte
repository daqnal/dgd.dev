<script>
    export let data;
</script>

<div>
    <h1>{data.title}</h1>
    <p>{data.date}</p>
    <article class="prose">
        <svelte:component this={data.content} />
    </article>
</div>
