<script>
    export let data;
</script>

<div>
    <h1>{data.title}</h1>
    <p>{data.date}</p>
    <article>
        <svelte:component this={data.content} />
    </article>
</div>
